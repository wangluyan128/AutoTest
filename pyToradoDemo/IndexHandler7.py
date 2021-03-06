from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler7(RequestHandler):
    def get(self):
        self.write("hello qikuedu.com")
        self.send_error(404,msg="页面丢失",info="家里服务器搞对象去了")

    def write_error(self, status_code, **kwargs) -> None:
        self.write("<h1>出错啦，工程师MM正在赶来的途中。。。</h1>")
        self.write("<p>错误信息：%s</p>"%kwargs["msg"])
        self.write("<p>错误描述：%s</p>"%kwargs["info"])

if __name__ == "__main__":
    app = Application([(r"/",IndexHandler7)])
    app.listen(8000)
    IOLoop.current().start()

    '''
    .send_error()用于发送HTTP错误页(状态码). 该操作会调用.clear() .set_status()
    .write_error()用于清除headers, 设置状态码, 发送错误页. 重写.write_error()可以自定义错误页.
    '''
