/**
 * 题目：
 * 1.判断服务器上面有没有upload目录，没有就创建这个目录
 * 2.找出html目录下面的所有目录，然后打印出来
 */
const fs = require("fs");

/**文件操作系统：
 * 读取目录：fs.readdir
 * 删除目录：fs.rmdir
 */
fs.stat("upload", (err, stats) => {
  //判断有没有upload
  if (err) {
    fs.mkdir("upload", (error) => {
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log("创建upload目录成功！");
      }
    });
  } else {
    console.log(stats);
  }
});
fs.mkdir("./html", (err, data) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log("创建html文件夹成功！");
    console.log(data);
    fs.mkdir("./html/test_01", (err, data_01) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        console.log(data_01);
      }
    });
    fs.mkdir("./html/test_02", (err, data_02) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        console.log(data_02);
      }
    });
  }
});

fs.readdir("html", (err, res) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log("读取目录成功！");
    console.log(res);
  }
});
