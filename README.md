# Housing Rental Mobile App

The App uses NativeScript-Vue framework

1. Login/logout
1. Obtaining user rental instructions
1. Get house map information
1. User operation authority control
1. Use Webpack to build the JavaScript part of the NativeScript application
1. Support IOS and Android clients, etc...

## Run project-sails first, then run the following code to start
```
npm install -g nativescript@latest
```
```
tns preview
```

## 项目描述

1、手机端使用NativeScript-Vue框架进行混合开发，支持IOS和Android客户端

2、连接房屋租赁系统的后台。

3、使用Fetch API请求数据，调用Leaflet API定位房屋的地图位置。

4、使用ngrok实现反向代理和内网穿透。

5、实现游客浏览，用户登入与登出，用户租赁操作，获取用户租赁信息，游客操作权限控制。

## 项目优化

1、v-for加key优化列表渲染，减少重绘加载。

2、<keep-alive>包裹路由显示，提高页面渲染效率。
  
3、使用函数型组件，优化生命周期。

4、活用v-show代替v-if，减少操作操作网页dom。

5、使用Webpack构建NativeScript应用程序的JavaScript部分。

6、使用babel 打包程式码。
