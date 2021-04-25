const http = require("http");
const url = require("url");
const fs = require("fs");

/**使用http创建服务 */
http
  .createServer(function (req, res) {
    fs.stat("index.js", (error, stats) => {
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        // Console：文件：true

        console.log(`目录：${stats.isDirectory()}`);
        // Console：目录：false

        return false;
      }
    });
    let result = {};
    if (req.url !== "/favicon.ico") {
      /**使用url的parse方法
       * parse需要两参数;
       * 第一个是地址;
       * 第二个是true的话表示把get传值转化成对象;
       */
      result = url.parse(req.url, true);
    }
    /**设置HTTP头部信息：状态码：200 ，文件类型:html,字符集：utf-8*/
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });

    /**往页面打印值 */
    res.write(
      `<h1 style='text-algin:center'>姓名：${result.query.username} 年龄：${result.query.age}</h1>`
    );

    /**响应结束 */
    res.end();
  })
  .listen(4000);
console.log("服务已经启动：http://localhost:4000/");
console.log(url);
let str = "{ target: '123' }";
console.log(JSON.parse(str));

/**
 * console.log(url.parse("http://www.baidu.com"));
 * Console：
  Url {
    protocol: 'http:',   协议
    slashes: true,       斜杠
    auth: null,          身份验证
    host: 'www.baidu.com',  主机
    port: null,          端口
    hostname: 'www.baidu.com', 主机名
    hash: null,          哈希
    search: null,         
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://www.baidu.com/' 
  }
 */
