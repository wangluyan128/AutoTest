import json

from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler5(RequestHandler):
    def get(self):
        print(self.request)

        json_str = {"username":"admin","password":"123123"}
        self.write(json.dumps(json_str))

if __name__ == "__main__":
    app = Application([(r"/",IndexHandler5)])
    app.listen(8000)
    IOLoop.current().start()