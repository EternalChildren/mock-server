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
访问http://localhost:1516/data-one<br/>
可以看到`{"status":"0000","msg":"成功","res":"data-one"}`
<br/>便代表mock服务器启动成功<br/>

## 3.命令介绍
```json
      "scripts": {
         "start": "node main.js https://example/",
         "mock": "node main.js mock",
         "dev": "nodemon main.js https://example/",
         "dev:mock": "nodemon mian.js mock"
         }
```
共有4个命令：
启用proxy server之前需要将"https://example/"替换成自身项目的根ip
 1. start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;启动proxy server
 2. mock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;启动mock server
 3. dev&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热更新方式启动proxy server
 4. dev:mock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热更新方式启动mock server

## 4.Proxy Server
1. 将代理ip替换成项目ip之后，启用proxy服务器
2. 便可以自动将发往proxy的请求转发到目标服务器
3. 拿到结果后再将其请求结果返回

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

## 5.Mock Server
1. 编写mock 数据 （此处需求学习mockjs库）---->[传送门][2]
2. 启动mock server
3. 接受到自己编写的mock数据

mock server采取了适配文件夹的模式来搭建mock server 路由系统<br/>
会读取mock文件夹来建立请求url<br/>
比如请求 根ip:1516/api/test/abc<br/>
那么实际上访问的就是 mock 文件下的 api文件夹下的 test文件夹下的 abc.js文件<br/>

## 6.其他
本项目源于找不到合适的mock server。<br/>
要么是项目过于庞大一个mock server不应该携带过多的私有属性<br/>
另一方面不喜欢采取将mock数据置于前端代码源（这是大部分前端采取的一种方式）<br/>
所以决定自己搭建一个简单易用并且功能强大本地mock server<br/>
README.md做的比较次，不要在意细节，有疑问直接issues<br/>
希望大家喜欢，欢迎star！！欢迎issues！！！<br/>

  [1]: https://www.npmjs.com/package/apisauce
  [2]: https://github.com/nuysoft/Mock/wiki
