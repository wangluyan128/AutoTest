'''
程序调试之debug配置
#自动重启+取消缓存模板+取消缓存静态文件+提供追踪信息
tornado.web.Application([(..)], debug=True)

注：开发之初可以设置debug=True方便调试，开发完毕改为False.

路由信息初始化参数配置
tonado.web.Application([(r””, Handler, {k:v})])
def initialize(self, k)

路由名称设置及反解析
#名称设置
tornado.web.Application([
    url(r””, handler, {k,v}, name=“”)
])

#反解析操作
reverse_url(name)

'''
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application, url


class IndexHandler3(RequestHandler):
    def get(self):
        self.write("<a href='"+self.reverse_url("login")+"'>用户登录</a>")

class RegistHandle(RequestHandler):
    def initialize(self,title):
        self.title = title

    def get(self):
        self.write("注册业务处理："+str(self.title))

class LoginHandler(RequestHandler):
    def get(self):
        self.write("用户登录页面展示")

    def post(self):
        self.write("用户登录功能处理")

if __name__ =="__main__":
    app = Application(
        [
            (r"/",IndexHandler3),
            (r"/regist",RegistHandle,{"title":"会员注册"}),
            url(r"/login",LoginHandler,name="login"),
        ],debug=True)
    http_server = HTTPServer(app)
    http_server.listen(8001)

    IOLoop.current().start()