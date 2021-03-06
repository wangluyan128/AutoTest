'''
get方式传递参数
get_query_arguments(name,default=_ARG_DEFAULT,strip=True)
get_query_argument(name ,strip=True)

post方式传递参数
get_body_arguments(name, default=_ARG_DEFAULT,strip=True)
get_body_argument(name ,strip=True)
'''
from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler4(RequestHandler):
    def get(self):
        #获取get方式传递的参数
        username = self.get_query_argument("username")
        usernames = self.get_query_arguments("username")

        print(username)
        print(usernames)

    def post(self):
        #获取post方式传递的参数
        username = self.get_body_argument("username")
        usernames = self.get_body_arguments("username")

        print(username)
        print(usernames)
if __name__ == "__main__":
    app = Application([(r"/",IndexHandler4)])

    app.listen(8000)

    IOLoop.current().start()

    '''
    http://localhost:8000/?username=123
    '''