import os

from locust import TaskSet, task, HttpLocust, between


class Test(TaskSet):
    @task
    def test_get(self):
        #self.client.get('http://bili.haidie-tech.com/?test=1')
        request_params = {
            'test':1
        }
        self.client.get(url='http://bili.haidie-tech.com',params=(request_params))

class WebsiteUser(HttpLocust):
    task_set = Test
    host = 'http://bili.haidie-tech.com'
    #host = 'localhost'
    wait_time = between(2,5)

if __name__ == "__main__":
    cmd = 'locust -f e:\work\LocustDemo\Test.py --no-web --csv=example -c 100000 -r 2 -t 30s'
    #cmd = 'locust -f e:\work\LocustDemo\Test.py'
    os.system(cmd)