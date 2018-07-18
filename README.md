# Mock-server

------

为了使前后端人员只需要定义好接口文档就可以开始并行工作，互不影响，mock便是最好的解决方案之一，能够加快前后端测试组人员的开发速度

------

## 1.什么是 Mock-server
 1. 简单
 2. 功能强大
 3. 建立项目mock库
 4. 能够mock服务器与test服务器双端任意切换

## 2.如何开始

```cmd
    git clone git@github.com:EternalChildren/mock-server.git
    npm i
    npm start
```
添加请求头部mock字段为true
之后访问http://localhost:1516/data
可以看到`{"status":"0000","msg":"成功","res":"data-one"}`
<br/>便代表mock服务器启动成功<br/>

## 3.命令介绍

```json
      "scripts": {
         "start": "node main.js ${your proxy server}",
         "dev": "nodemon main.js ${your proxy server}",
         }
```

共有2个命令：
启用mock server之前需要将${your proxy server}替换成自身项目的api请求根ip
 1. start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;启动proxy server
 2. dev&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热更新方式启动proxy server

## 4.Proxy Server
1. 将代理ip替换成项目ip之后，启用proxy服务器
2. 请求头部携带mock字段则将读取mock数据
3. 如果无mock字段则将请求转发目标服务器获取数据
4. 返回mock数据或者目标服务器数据

request项目采用了apisauce---->[传送门][1]
```javascript
  // /src/util/request.js
  headers: {
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
```
这里做了设置了这三个基础请求头部，如果不需要可以删除，另外如果项目有需求在请求头携带token之类的auth数据可以手动修改此处<br/>
另外如果对代理服务器有项目自身的需求的话需自身对源代码进行适配<br/>

## 5.Mock 数据

mock数据采用了mockjs库 ----> [传送门][2]
tips:
1. mock文件接受返回一个执行函数或者对象
2. 如果是函数则执行函数需返回一个对象

## 6.其他
本项目源于找不到合适的mock server。<br/>
要么是项目过于庞大一个mock server不应该携带过多的私有属性<br/>
另一方面不喜欢采取将mock数据置于前端代码源（这是大部分前端采取的一种方式）<br/>
所以决定自己搭建一个简单易用并且功能强大本地mock server<br/>
README.md做的比较次，不要在意细节，有疑问直接issues<br/>
希望大家喜欢，欢迎star！！欢迎issues！！！<br/>

  [1]: https://www.npmjs.com/package/apisauce
  [2]: https://github.com/nuysoft/Mock/wiki
