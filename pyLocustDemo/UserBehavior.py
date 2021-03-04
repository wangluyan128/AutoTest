import os

from lxml import etree

from locust import TaskSet, task, HttpLocust

#关联
class UserBehavior(TaskSet):

    @staticmethod
    def get_session(html):
        tree = etree.HTML(html)
        return tree.xpath("//div[@class='btnbox']/input[@name='session']/@value")[0]

    @task
    def test_login(self):
        html = self.client.get('/login').text
        username = 'user@compay.com'
        password = '123456'
        session = self.get_session(html)
        payload = {
            'username':username,
            'password':password,
            'session':session
        }
        self.client.post('/login',data = payload)
    @task
    def all_interface(self):
        #豆瓣图书api为例
        with self.client.get('https://api.douban.com/v2/book/1220562',name = 'LhcActivity/GetActConfig',catch_response=True) as response:
            assert response.json()['rating']['max']==10     #python断言对接口返回值中的max字段进行断言
            if response.status_code ==200:  #对http响应码是否200进行判断
                response.success()
            else:
                response.failure('GetActConfig[Failed!]')
class WebsiteUser(HttpLocust):
    host = 'https://debugtalk.com'
    task_set = UserBehavior
    min_wait = 1000
    max_wait = 3000
