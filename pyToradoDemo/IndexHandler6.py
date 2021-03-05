from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application


class IndexHandler6(RequestHandler):
    def set_default_headers(self) -> None:
        #第二种响应头设置方式
        print("--------------->响应头set_default_headers()执行")
        self.set_header("Content-type","application/json;charset=utf-8")
        self.set_header("qiku","奇酷信息")

    def get(self):
        #第一种操作响应头的方式
        #self.set_header("Content-type","application/json")
        print("-------------->get方法执行")
        self.write("{'name':'jerr'}")
        self.set_header("qiku","qikuedu.com")

if __name__=="__main__":
    app = Application([(r"/",IndexHandler6)])
    app.listen(8000)
    IOLoop.current().start()

    '''
    .add_header() .set_header() .set_default_headers()
设置响应HTTP头, 前两者的不同点在于多次设置同一个项时, .add_header()会叠加参数, 而.set_header()则以最后一次为准.
.set_default_headers()比较特殊, 是一个空方法, 可根据需要重写, 作用是在每次请求初始化RequestHandler时设置默认headers.
.clear_header() .clear()
.clear_header()清除指定的headers, 而.clear()清除.set_default_headers()以外所有的headers设置.
# add_header
self.add_header('Foo', 'one')
self.add_header('Foo', 'two')
# set_header
self.set_header('Bar', 'one')
self.set_header('Bar', 'two')

# HTTP头的设置结果
# Foo → one, two
# Bar → two
    '''