'''
.render()

返回渲染完成的html. 调用后不能再进行输出操作.
.redirect()

重定向, 可以指定3xx重定向状态码. 调用后不能再进行输出操作.
# 临时重定向 301
self.redirect('/foo')
# 永久重定向 302
self.redirect('/foo', permanent=True)
# 指定状态码, 会忽略参数 permanent
self.redirect('/foo', status=304)
'''
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application, url


class IndexHandler9(RequestHandler):
    def get(self):
        self.write("<a href = '"+self.reverse_url("login")+"'>用户登录</a>")

class RegistHandler(RequestHandler):
    def initialize(self,title):
        self.title = title

    def get(self):
        self.write("注册业务处理："+str(self.title))

class LoginHandler(RequestHandler):
    def get(self):
        self.write("用户登录页面展示")
    def post(self):
        self.write("用户登录功能处理")

if __name__ == "__main__":
    app = Application(
        [
            (r"/",IndexHandler9),
            (r"/regist",RegistHandler,{"title":"会员注册"}),
            url(r"/login",LoginHandler,name="login"),
         ]
    )
    http_server = HTTPServer(app)
    http_server.listen(8000)

    IOLoop.current().start()