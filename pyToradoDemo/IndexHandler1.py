'''
httpserver监听端口
1.tornado.httpserver.HTTPServer(app)
2.httpserver.listen(port)

httpserver实现多进程操作
tornado.httpserver.HTTPServer(app)
httpserver.bind(port)
httpserver.start(0/None/<0/num)
'''
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler1(RequestHandler):
    def get(self):
        self.write('给自己一点时间，理清所有的荒唐与期望。')

if __name__ == '__main__':
    app = Application([(r'/',IndexHandler1)])
    http_server = HTTPServer(app)
    #最原始的方式
    http_server.bind(8888)
    http_server.start(1)

    #启动Ioloop轮询监听
    IOLoop.current().start()