'''
UserBehavior类继承TaskSet类，用于描述用户行为：

使用@task装饰的方法为一个事务，方法的参数用于指定该行为的执行权重，参数越大每次被用户执行的概率越高，默认为1（事务blogs()被执行的概率是bky_index()的2倍）；
on_start()：每个locust用户执行测试事务之前执行一次，用于做初始化的工作，如登录；
　　WebsiteUser类用于设置性能测试属性：

host :要加载主机的URL前缀(即“https://www.cnblogs.com”)，通常是在命令行启动locust时使用--host选项指定，若命令行启动时未指定，该属性被使用；
task_set：指向定义的一个用户行为类；
min_wait：模拟用户在执行每个任务之间等待的最小时间，单位为毫秒；
max_wait：模拟用户在执行每个任务之间等待的最大时间，单位为毫秒（min_wait和max_wait默认值为1000，因此，如果没有声明min_wait和max_wait，则locust将在每个任务之间始终等待1秒。）；

'''


#定义用户行为
#若不指定执行任务的权重，则相当于比例为1:1。
from locust import TaskSet, task, HttpLocust, Locust


class UserBehavior(TaskSet):
    def on_start(self):
        print("start");

    @task(1)
    def bky_index(self):
        self.client.get('/')

    @task(2)
    def blogs(self):
        self.client.get('/Clairewang/p/8622280.html')
def test_job1(obj):
    obj.client.get('/job1')
def test_job2(obj):
    obj.client.get('/job2')
class UserBehavior(TaskSet):
    tasks = {test_job1:1,test_job2:2}
    # tasks = [(test_job1,1), (test_job1,2)] # 两种方式等价复制代码

#weight：一个文件中有多个locust用户类时，指定用户类的权重（默认新增locust用户时会随机选择一个用户类）；
#WebUserLocus用户执行的概率是MobileUserLocust用户的三倍。
class WebUserLocust(Locust):
    weight = 3
    ...
class MobileUserLocust(Locust):
    weight =1
    ...

class WebsiteUser(HttpLocust):
    host = 'https://www.cnblogs.com'
    task_set = UserBehavior
    min_wait = 1500
    max_wait = 5000
'''
class JingClue(TashSet):
    def on_start(self):
        self.login()
        self.header = {
            'Authorization':self.token
        }
    def login(self):
        username = '18200389565'
        password = '123456'
        with self.client.post('/security/log/login',{'username':username,'password':password}) as response:
            if response.status_code ==200:
                self.token = 'Bearer ' +response.json()['data']['token']

    @task
    def publicoceanclues(self):
        url = '/DataService/publicOcean/getPublicOceanClues'
        data = {
            'pageSize':20,
            'pageIndex':1,
            'sortField':'discardTime',
            'sortType':-1
        }
        self.client.post(url,json=data,headers=self.header)
'''