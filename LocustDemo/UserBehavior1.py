#参数化
#所有并发虚拟用户共享同一份测试数据，各虚拟用户在数据列表中循环取值。
#例如，模拟3用户并发请求网页，总共有100个URL地址，每个虚拟用户都会依次循环加载这100个URL地址；加载示例如下表所示。
from locust import TaskSet, task, HttpLocust


class UserBehavior(TaskSet):
    def on_start(self):
        self.index = 0

    @task
    def test_visit(self):
        url = self.locust.share_data[self.index]
        print('visit url:%s' %url)
        self.index = (self.index +1)%len((self.locust.share_data))
        self.client.get(url)

class WebsiteUser(HttpLocust):
    host = 'https://debugtalk.com'
    task_set = UserBehavior
    share_data = ['url1','url2','url3','url4','url5']
    min_wait = 1000
    max_wait = 3000