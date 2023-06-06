## 1.微信开放平台企业认证

https://open.weixin.qq.com/

## 2.添加移动应用

常见问题：

### （1）安卓证书生成教程

[https://ask.dcloud.net.cn/article/35777](https://ask.dcloud.net.cn/article/35777)



### （2）苹果证书生成教程

[https://ask.dcloud.net.cn/article/152](https://ask.dcloud.net.cn/article/152)



### （3）安卓应用签名生成

1. 下载签名生成工具：
  https://developers.weixin.qq.com/doc/oplatform/Downloads/Android_Resource.html

2. HbuilderX打包安卓自定义基座

3. 发送apk到安卓手机上安装，打开之后输入包名，例如：com.dishaxy.app

4. 复制签名

   

![](https://images2017.cnblogs.com/blog/1134997/201709/1134997-20170921201918040-721702451.png)



### （4）苹果Universal Links生成

打开HbuilderX对应项目的`manifest.json` 的 `app模块配置` -》`支付模块` -》自动生成苹果Universal Links



## 3. 微信支付平台绑定appid

https://pay.weixin.qq.com/



### （1）开通 App支付功能

`产品中心` -》`App支付` -》`申请开通`

### （2）绑定appid

注意：这里的appid指的是微信开放平台当前应用的appid

`产品中心`-》`AppID账号管理`-》`关联appid`