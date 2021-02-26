//OS模块 os 模块提供了一些基本的系统操作函数
//var os = require("os")
//序号	方法 & 描述
// 1	os.tmpdir()
// 返回操作系统的默认临时文件夹。
// 2	os.endianness()
// 返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
// 3	os.hostname()
// 返回操作系统的主机名。
// 4	os.type()
// 返回操作系统名
// 5	os.platform()
// 返回编译时的操作系统名
// 6	os.arch()
// 返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
// 7	os.release()
// 返回操作系统的发行版本。
// 8	os.uptime()
// 返回操作系统运行的时间，以秒为单位。
// 9	os.loadavg()
// 返回一个包含 1、5、15 分钟平均负载的数组。
// 10	os.totalmem()
// 返回系统内存总量，单位为字节。
// 11	os.freemem()
// 返回操作系统空闲内存量，单位是字节。
// 12	os.cpus()
// 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
// 13	os.networkInterfaces()
// 获得网络接口列表。
//1	os.EOL
// 定义了操作系统的行尾符的常量。

var os = require("os");

//CPU的字节序
console.log('endianness:'+os.endianness());
//操作系统名
console.log('type:'+os.type());
//操作系统名
console.log('platform:'+os.platform());
//系统内存总量
console.log('total memory:'+os.totalmem()+' bytes.');
//操作系统空闲内存量
console.log('free memory:'+os.freemem()+' bytes.');

//Path模块
//path 模块提供了一些用于处理文件路径的小工具
//var path = require("path")
//方法
// 序号	方法 & 描述
// 1	path.normalize(p)
// 规范化路径，注意'..' 和 '.'。
// 2	path.join([path1][, path2][, ...])
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
// 3	path.resolve([from ...], to)
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
// path.resolve('/foo/bar', './baz');
// // 返回: '/foo/bar/baz'
//
// path.resolve('/foo/bar', '/tmp/file/');
// // 返回: '/tmp/file'
//
// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// // 如果当前工作目录为 /home/myself/node，
// // 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
// 4	path.isAbsolute(path)
// 判断参数 path 是否是绝对路径。
// 5	path.relative(from, to)
// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
//
// 在 Linux 上：
//
// path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// // 返回: '../../impl/bbb'
// 在 Windows 上：
//
// path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// // 返回: '..\\..\\impl\\bbb'
// 6	path.dirname(p)
// 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
// 7	path.basename(p[, ext])
// 返回路径中的最后一部分。同 Unix 命令 bashname 类似。
// 8	path.extname(p)
// 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
// 9	path.parse(pathString)
// 返回路径字符串的对象。
// 10	path.format(pathObject)
// 从对象中返回路径字符串，和 path.parse 相反。
// 属性
// 序号	属性 & 描述
// 1	path.sep
// 平台的文件路径分隔符，'\\' 或 '/'。
// 2	path.delimiter
// 平台的分隔符, ; or ':'.
// 3	path.posix
// 提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
// 4	path.win32
// 提供上述 path 的方法，不过总是以 win32 兼容的方式交互。

var path = require('path');
//格式化路径
console.log('normalization:' + path.normalize('e:\work\AutoTest\NodejsDemo\get\..'));
//连接路径
console.log('joint path:' +path.join('/test','test1','2slashes/1slash', 'tab', '..'));
//转换为绝对路径
console.log('resolve:'+path.resolve('main.js'));
//路径中文件的后缀名
console.log('ext name:'+path.extname('main.js'));

//Net模块
// Net 模块提供了一些用于底层的网络通信的小工具，包含了创建服务器/客户端的方法
//var net = require("net")
//方法
// 序号	方法 & 描述
// 1	net.createServer([options][, connectionListener])
// 创建一个 TCP 服务器。参数 connectionListener 自动给 'connection' 事件创建监听器。
// 2	net.connect(options[, connectionListener])
// 返回一个新的 'net.Socket'，并连接到指定的地址和端口。
// 当 socket 建立的时候，将会触发 'connect' 事件。
// 3	net.createConnection(options[, connectionListener])
// 创建一个到端口 port 和 主机 host的 TCP 连接。 host 默认为 'localhost'。
// 4	net.connect(port[, host][, connectListener])
// 创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 5	net.createConnection(port[, host][, connectListener])
// 创建一个端口为 port 和主机为 host的 TCP 连接 。host 默认为 'localhost'。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 6	net.connect(path[, connectListener])
// 创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件上。返回 'net.Socket'。
// 7	net.createConnection(path[, connectListener])
// 创建连接到 path 的 unix socket 。参数 connectListener 将会作为监听器添加到 'connect' 事件。返回 'net.Socket'。
// 8	net.isIP(input)
// 检测输入的是否为 IP 地址。 IPV4 返回 4， IPV6 返回 6，其他情况返回 0。
// 9	net.isIPv4(input)
// 如果输入的地址为 IPV4， 返回 true，否则返回 false。
// 10	net.isIPv6(input)
// 如果输入的地址为 IPV6， 返回 true，否则返回 false。
// net.Server
// net.Server通常用于创建一个 TCP 或本地服务器。
//
// 序号	方法 & 描述
// 1	server.listen(port[, host][, backlog][, callback])
// 监听指定端口 port 和 主机 host ac连接。 默认情况下 host 接受任何 IPv4 地址(INADDR_ANY)的直接连接。端口 port 为 0 时，则会分配一个随机端口。
// 2	server.listen(path[, callback])
// 通过指定 path 的连接，启动一个本地 socket 服务器。
// 3	server.listen(handle[, callback])
// 通过指定句柄连接。
// 4	server.listen(options[, callback])
// options 的属性：端口 port, 主机 host, 和 backlog, 以及可选参数 callback 函数, 他们在一起调用server.listen(port, [host], [backlog], [callback])。还有，参数 path 可以用来指定 UNIX socket。
// 5	server.close([callback])
// 服务器停止接收新的连接，保持现有连接。这是异步函数，当所有连接结束的时候服务器会关闭，并会触发 'close' 事件。
// 6	server.address()
// 操作系统返回绑定的地址，协议族名和服务器端口。
// 7	server.unref()
// 如果这是事件系统中唯一一个活动的服务器，调用 unref 将允许程序退出。
// 8	server.ref()
// 与 unref 相反，如果这是唯一的服务器，在之前被 unref 了的服务器上调用 ref 将不会让程序退出（默认行为）。如果服务器已经被 ref，则再次调用 ref 并不会产生影响。
// 9	server.getConnections(callback)
// 异步获取服务器当前活跃连接的数量。当 socket 发送给子进程后才有效；回调函数有 2 个参数 err 和 count。
// 事件
// 序号	事件 & 描述
// 1	listening
// 当服务器调用 server.listen 绑定后会触发。
// 2	connection
// 当新连接创建后会被触发。socket 是 net.Socket实例。
// 3	close
// 服务器关闭时会触发。注意，如果存在连接，这个事件不会被触发直到所有的连接关闭。
// 4	error
// 发生错误时触发。'close' 事件将被下列事件直接调用。
// net.Socket
// net.Socket 对象是 TCP 或 UNIX Socket 的抽象。net.Socket 实例实现了一个双工流接口。 他们可以在用户创建客户端(使用 connect())时使用, 或者由 Node 创建它们，并通过 connection 服务器事件传递给用户。
//
// 事件
// net.Socket 事件有：
//
// 序号	事件 & 描述
// 1	lookup
// 在解析域名后，但在连接前，触发这个事件。对 UNIX sokcet 不适用。
// 2	connect
// 成功建立 socket 连接时触发。
// 3	data
// 当接收到数据时触发。
// 4	end
// 当 socket 另一端发送 FIN 包时，触发该事件。
// 5	timeout
// 当 socket 空闲超时时触发，仅是表明 socket 已经空闲。用户必须手动关闭连接。
// 6	drain
// 当写缓存为空得时候触发。可用来控制上传。
// 7	error
// 错误发生时触发。
// 8	close
// 当 socket 完全关闭时触发。参数 had_error 是布尔值，它表示是否因为传输错误导致 socket 关闭。
// 属性
// net.Socket 提供了很多有用的属性，便于控制 socket 交互：
//
// 序号	属性 & 描述
// 1	socket.bufferSize
// 该属性显示了要写入缓冲区的字节数。
// 2	socket.remoteAddress
// 远程的 IP 地址字符串，例如：'74.125.127.100' or '2001:4860:a005::68'。
// 3	socket.remoteFamily
// 远程IP协议族字符串，比如 'IPv4' or 'IPv6'。
// 4	socket.remotePort
// 远程端口，数字表示，例如：80 or 21。
// 5	socket.localAddress
// 网络连接绑定的本地接口 远程客户端正在连接的本地 IP 地址，字符串表示。例如，如果你在监听'0.0.0.0'而客户端连接在'192.168.1.1'，这个值就会是 '192.168.1.1'。
// 6	socket.localPort
// 本地端口地址，数字表示。例如：80 or 21。
// 7	socket.bytesRead
// 接收到得字节数。
// 8	socket.bytesWritten
// 发送的字节数。
// 方法
// 序号	方法 & 描述
// 1	new net.Socket([options])
// 构造一个新的 socket 对象。
// 2	socket.connect(port[, host][, connectListener])
// 指定端口 port 和 主机 host，创建 socket 连接 。参数 host 默认为 localhost。通常情况不需要使用 net.createConnection 打开 socket。只有你实现了自己的 socket 时才会用到。
// 3	socket.connect(path[, connectListener])
// 打开指定路径的 unix socket。通常情况不需要使用 net.createConnection 打开 socket。只有你实现了自己的 socket 时才会用到。
// 4	socket.setEncoding([encoding])
// 设置编码
// 5	socket.write(data[, encoding][, callback])
// 在 socket 上发送数据。第二个参数指定了字符串的编码，默认是 UTF8 编码。
// 6	socket.end([data][, encoding])
// 半关闭 socket。例如，它发送一个 FIN 包。可能服务器仍在发送数据。
// 7	socket.destroy()
// 确保没有 I/O 活动在这个套接字上。只有在错误发生情况下才需要。（处理错误等等）。
// 8	socket.pause()
// 暂停读取数据。就是说，不会再触发 data 事件。对于控制上传非常有用。
// 9	socket.resume()
// 调用 pause() 后想恢复读取数据。
// 10	socket.setTimeout(timeout[, callback])
// socket 闲置时间超过 timeout 毫秒后 ，将 socket 设置为超时。
// 11	socket.setNoDelay([noDelay])
// 禁用纳格（Nagle）算法。默认情况下 TCP 连接使用纳格算法，在发送前他们会缓冲数据。将 noDelay 设置为 true 将会在调用 socket.write() 时立即发送数据。noDelay 默认值为 true。
// 12	socket.setKeepAlive([enable][, initialDelay])
// 禁用/启用长连接功能，并在发送第一个在闲置 socket 上的长连接 probe 之前，可选地设定初始延时。默认为 false。 设定 initialDelay （毫秒），来设定收到的最后一个数据包和第一个长连接probe之间的延时。将 initialDelay 设为0，将会保留默认（或者之前）的值。默认值为0.
// 13	socket.address()
// 操作系统返回绑定的地址，协议族名和服务器端口。返回的对象有 3 个属性，比如{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。
// 14	socket.unref()
// 如果这是事件系统中唯一一个活动的服务器，调用 unref 将允许程序退出。如果服务器已被 unref，则再次调用 unref 并不会产生影响。
// 15	socket.ref()
// 与 unref 相反，如果这是唯一的服务器，在之前被 unref 了的服务器上调用 ref 将不会让程序退出（默认行为）。如果服务器已经被 ref，则再次调用 ref 并不会产生影响。

var net = require('net');
var server = net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end',function () {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(8088,function () {
    console.log('server is listening');
});

//DNS模块
//DNS 模块用于解析域名
//var dns = require("dns")
//方法
// 序号	方法 & 描述
// 1	dns.lookup(hostname[, options], callback)
// 将域名（比如 'runoob.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。
// 2	dns.lookupService(address, port, callback)
// 使用 getnameinfo 解析传入的地址和端口为域名和服务。
// 3	dns.resolve(hostname[, rrtype], callback)
// 将一个域名（如 'runoob.com'）解析为一个 rrtype 指定记录类型的数组。
// 4	dns.resolve4(hostname, callback)
// 和 dns.resolve() 类似, 仅能查询 IPv4 (A 记录）。 addresses IPv4 地址数组 (比如，['74.125.79.104', '74.125.79.105', '74.125.79.106']）。
// 5	dns.resolve6(hostname, callback)
// 和 dns.resolve4() 类似， 仅能查询 IPv6( AAAA 查询）
// 6	dns.resolveMx(hostname, callback)
// 和 dns.resolve() 类似, 仅能查询邮件交换(MX 记录)。
// 7	dns.resolveTxt(hostname, callback)
// 和 dns.resolve() 类似, 仅能进行文本查询 (TXT 记录）。 addresses 是 2-d 文本记录数组。(比如，[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]）。 每个子数组包含一条记录的 TXT 块。根据使用情况可以连接在一起，也可单独使用。
// 8	dns.resolveSrv(hostname, callback)
// 和 dns.resolve() 类似, 仅能进行服务记录查询 (SRV 记录）。 addresses 是 hostname可用的 SRV 记录数组。 SRV 记录属性有优先级（priority），权重（weight）, 端口（port）, 和名字（name） (比如，[{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'com.redis.service.example.com'}, ...]）。
// 9	dns.resolveSoa(hostname, callback)
// 和 dns.resolve() 类似, 仅能查询权威记录(SOA 记录）。
// 10	dns.resolveNs(hostname, callback)
// 和 dns.resolve() 类似, 仅能进行域名服务器记录查询(NS 记录）。 addresses 是域名服务器记录数组（hostname 可以使用） (比如, ['ns1.example.com', 'ns2.example.com']）。
// 11	dns.resolveCname(hostname, callback)
// 和 dns.resolve() 类似, 仅能进行别名记录查询 (CNAME记录)。addresses 是对 hostname 可用的别名记录数组 (比如，, ['bar.example.com']）。
// 12	dns.reverse(ip, callback)
// 反向解析 IP 地址，指向该 IP 地址的域名数组。
// 13	dns.getServers()
// 返回一个用于当前解析的 IP 地址数组的字符串。
// 14	dns.setServers(servers)
// 指定一组 IP 地址作为解析服务器。
// rrtypes
// 以下列出了 dns.resolve() 方法中有效的 rrtypes值:
//
// 'A' IPV4 地址, 默认
// 'AAAA' IPV6 地址
// 'MX' 邮件交换记录
// 'TXT' text 记录
// 'SRV' SRV 记录
// 'PTR' 用来反向 IP 查找
// 'NS' 域名服务器记录
// 'CNAME' 别名记录
// 'SOA' 授权记录的初始值
// 错误码
// 每次 DNS 查询都可能返回以下错误码：
//
// dns.NODATA: 无数据响应。
// dns.FORMERR: 查询格式错误。
// dns.SERVFAIL: 常规失败。
// dns.NOTFOUND: 没有找到域名。
// dns.NOTIMP: 未实现请求的操作。
// dns.REFUSED: 拒绝查询。
// dns.BADQUERY: 查询格式错误。
// dns.BADNAME: 域名格式错误。
// dns.BADFAMILY: 地址协议不支持。
// dns.BADRESP: 回复格式错误。
// dns.CONNREFUSED: 无法连接到 DNS 服务器。
// dns.TIMEOUT: 连接 DNS 服务器超时。
// dns.EOF: 文件末端。
// dns.FILE: 读文件错误。
// dns.NOMEM: 内存溢出。
// dns.DESTRUCTION: 通道被摧毁。
// dns.BADSTR: 字符串格式错误。
// dns.BADFLAGS: 非法标识符。
// dns.NONAME: 所给主机不是数字。
// dns.BADHINTS: 非法HINTS标识符。
// dns.NOTINITIALIZED: c c-ares 库尚未初始化。
// dns.LOADIPHLPAPI: 加载 iphlpapi.dll 出错。
// dns.ADDRGETNETWORKPARAMS: 无法找到 GetNetworkParams 函数。
// dns.CANCELLED: 取消 DNS 查询。

var dns = require('dns');
dns.lookup('www.github.com',function onLookup(err,address,family) {
    console.log('ip 地址：',address);
    dns.reverse(address,function (err,hostnames) {
        if (err){
            console.log(err.stack);
        }
        console.log('反向解析 '+address + ": " + JSON.stringify(hostnames));
    });
});

//Domain模块
// Domain(域) 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的异常
//var domain = require("domain")
//方法
// 序号	方法 & 描述
// 1	domain.run(function)
// 在域的上下文运行提供的函数，隐式的绑定了所有的事件分发器，计时器和底层请求。
// 2	domain.add(emitter)
// 显式的增加事件
// 3	domain.remove(emitter)
// 删除事件。
// 4	domain.bind(callback)
// 返回的函数是一个对于所提供的回调函数的包装函数。当调用这个返回的函数时，所有被抛出的错误都会被导向到这个域的 error 事件。
// 5	domain.intercept(callback)
// 和 domain.bind(callback) 类似。除了捕捉被抛出的错误外，它还会拦截 Error 对象作为参数传递到这个函数。
// 6	domain.enter()
// 进入一个异步调用的上下文，绑定到domain。
// 7	domain.exit()
// 退出当前的domain，切换到不同的链的异步调用的上下文中。对应domain.enter()。
// 8	domain.dispose()
// 释放一个domain对象，让node进程回收这部分资源。
// 9	domain.create()
// 返回一个domain对象。
// 属性
// 序号	属性 & 描述
// 1	domain.members
// 已加入domain对象的域定时器和事件发射器的数组。

var EventEmitter = require('events').EventEmitter;
var domain = require('domain');
var emitter1 = new EventEmitter();

//创建域
var domain1 = domain.create();

domain1.on('error',function (err) {
    console.log("domain1处理这个错误（"+err.message+")");
});
//显式绑定
domain1.add(emitter1);

emitter1.on('error',function (err) {
    console.log("监听器处理此错误("+err.message+")");
});
emitter1.emit('error',new Error('通过监听器来处理'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error('通过domain1处理'));

var domain2 = domain.create();

domain2.on('error',function (err) {
    console.log("domain2处理这个错误("+err.message+")");
});

//隐式绑定
domain2.run(function () {
    var emitter2 = new EventEmitter();
    emitter2.emit('error',new Error('通过domain2处理'));
});

domain1.remove(emitter1);
emitter1.emit('error',new Error('转换为异常，系统将崩溃！'));