

//jx --version
//jx 命令打包以上项目，并指定 index.js 为 Node.js 项目的主文件：
//$ jx package index.js index

//以上命令执行成功，会生成以下两个文件：
//
// index.jxp 这是一个中间件文件，包含了需要编译的完整项目信息。
//
// index.jx 这是一个完整包信息的二进制文件，可运行在客户端上

//载入 JX 文件
//$ node index.js command_line_arguments
//使用 JXcore 编译后，我们可以使用以下命令来执行生成的 jx 二进制文件：
//
// $ jx index.jx command_line_arguments
