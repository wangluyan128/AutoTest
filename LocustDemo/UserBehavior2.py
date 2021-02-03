#保证并发测试数据唯一性，不循环取数据
#所有并发虚拟用户共享同一份测试数据，并且保证虚拟用户使用的数据不重复。
#例如，模拟3用户并发注册账号，总共有9个账号，要求注册账号不重复，注册完毕后结束测试；加载示例如下表所示。
import queue

from locust import TaskSet, task, HttpLocust


class UserBehavior(TaskSet):

    @task
    def test_register(self):
        try:
            data = self.locust.user_data_queue.get()
        except queue.Empty:
            print('account data run out,test ended.')
            exit(0)

        print('register with user:{},pwd:{}'\
              .format(data['username'],data['password']))
        payload = {
            'username':data['username'],
            'password':data['password']
        }
        self.client.post('/register',data = payload)

class WebsiteUser(HttpLocust):
    host = 'https://debugtalk.com'
    task_set = UserBehavior

    user_data_queue = queue.Queue()
    for index in range(100):
        data = {
            'username':"test%04d" %index,
            'password':'pwd%04d' %index,
            'email':'test%04d@debugtalk.test'%index,
            'phone':'186%08d'%index,
        }
        user_data_queue.put_nowait(data)

    min_wait = 1000
    max_wait = 3000

'''
常用方法：

Queue.qsize() 返回队列的大小
Queue.empty() 如果队列为空，返回True,反之False
Queue.full() 如果队列满了，返回True,反之False，Queue.full 与 maxsize 大小对应
Queue.get([block[, timeout]])获取队列，timeout等待时间
Queue.get_nowait() 相当于Queue.get(False)，非阻塞方法
Queue.put(item) 写入队列，timeout等待时间
Queue.task_done() 在完成一项工作之后，Queue.task_done()函数向任务已经完成的队列发送一个信号。每个get()调用得到一个任务，接下来task_done()调用告诉队列该任务已经处理完毕。
Queue.join() 实际上意味着等到队列为空，再执行别的操作
'''