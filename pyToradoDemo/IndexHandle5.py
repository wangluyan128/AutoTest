from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler5(RequestHandler):
    def get(self):
        #获取get方式的参数
        user = self.get_argument("user")
        print("get方式获取参数："+str(user))

    def post(self):
        #获取post方式的参数
        user = self.get_argument("user")
        print("post方式获取参数："+user.encode("utf-8"))

if __name__ == "__main__":
    app = Application([(r"/",IndexHandler5)])
    app.listen(8000)
    IOLoop.current().start()

    '''
    http://localhost:8000/?user=123
    '''