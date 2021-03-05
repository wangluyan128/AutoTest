'''
全局配置
tornado.options.define(
    name, default, type, multiple, help
)

命令行参数转换
tornado.options.parse_command_line()
'''
#-*- coding:utf-8 -*-

#定义变量


import tornado.options
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application

#tornado.options.parse_config_file('./config.config')
tornado.options.define('port',default=8000,type=int,help="this is the port>for application")

class IndexHandler2(RequestHandler):
    def get(self):
        self.write('我们既然改变不了规则，那就做到最好')

if __name__ == '__main__':
    app = Application([(r'/',IndexHandler2)])
    tornado.options.parse_command_line()

    http_server = HTTPServer(app)
    http_server.bind(tornado.options.options.port)

    http_server.start(1)
    #启动IOLoop轮询监听
    IOLoop.current().start()

'''
E:\work\AutoTest\pyToradoDemo>python IndexHandler2.py --port=8000
'''