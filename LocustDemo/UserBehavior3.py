#保证并发测试数据唯一性，循环取数据
#所有并发虚拟用户共享同一份测试数据，保证并发虚拟用户使用的数据不重复，并且数据可循环重复使用。
#例如，模拟3用户并发登录账号，总共有9个账号，要求并发登录账号不相同，但数据可循环使用；加载示例如下表所示。
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
        self.locust.user_data_queue.put_nowait(data)

class WebsiteUser(HttpLocust):
    host = 'https://debugtalk.com'
    task_set = UserBehavior

    user_data_queue = queue.Queue()
    for index in range(100):
        data = {
            'username':'test%04d'%index,
            'password':'pwd%04d' %index,
            'email':'test%04d@debugtalk.test'%index,
            'phone':'186%08d'%index,
        }
        user_data_queue.put_nowait(data)

    min_wait = 1000
    max_wait = 3000