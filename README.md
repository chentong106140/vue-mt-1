# 前言

#### 在我们项目中都是一些交互比较复杂的电商项目，对于电商项目而言，必然会有购物车，这类项目因为涉及到money，所以对逻辑严谨度要求高。因为这类的项目好多都没人用vue来写，那么我就写一个这样的项目，希望对看到想学或者正在写此类项目的人有所帮助。

#### 思来想去也不知道该写一个什么电商的项目，我这个人吧，比较爱吃，但我不胖啊，我觉得美食的平台比较不错，很合我的胃口，那么我觉得美团就是个不错的素材，一来它足够复杂，开放的外卖平台比一般的公司独有商店更加复杂。二来我喜欢美食。三来见到那么多美食，大家也不会感觉到厌烦。

<<<<<<< HEAD
#### 该项目大大小小80多个页面，涉及注册、登录、商品展示、购物车、下单等等，是一个完整的流程。
=======
### ui 库
* http://framework7.cn/
* https://onsen.io/
* https://vux.li/#/ 
* https://github.com/youzan/vant
* http://www.muse-ui.org/#/index
* http://mint-ui.github.io/#!/zh-cn 

* https://github.com/vuejs/awesome-vue#components--libraries

* https://material.io/icons/
>>>>>>> d971f61363b14de86dbd89a458ddaae8671656c2

#### 因为利用业余时间写，一直没有时间写，我先把框架打起来，有时间就一点点的加功能。

####  注：此项目纯属个人瞎搞，正常下单请选择美团官方客户端。

## 技术栈

##### vue2 + vue-cli + vuex + vue-router + vue-resource/axios + webpack + ES6/7 + fetch + sass + flex + svg + git

## 说明

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

> 如果有想要从基础学习vue的朋友，这个demo可以让你了解更好的学习vue，非常适合入门练习。[地址在这里那](https://segmentfault.com/u/wujian_59939d6a3fccf/articles)

## 目标功能介绍
- [ ] 定位功能 -- 未完成
- [ ] 选择城市 -- 未完成
- [ ] 搜索地址 -- 未完成
- [ ] 展示所选地址附近商家列表 -- 未完成
- [ ] 搜索美食，餐馆 -- 未完成
- [ ] 根据距离、销量、评分、特色菜、配送方式等进行排序和筛选 -- 未完成
- [ ] 二维码 -- 未完成
- [ ] 焦点图 -- 未完成
- [ ] 所有分类 -- 未完成
- [ ] 餐馆食品列表页 -- 未完成
- [ ] 单个食品详情页面 -- 未完成
- [ ] 购物车功能 -- 未完成
- [ ] 商家店铺列表 -- 未完成
- [ ] 商家详情页 -- 未完成
- [ ] 登录、注册 -- 未完成
- [ ] 修改密码 -- 未完成
- [ ] 发送短信 -- 未完成
- [ ] 下单功能 -- 未完成
- [ ] 订单列表 -- 未完成
- [ ] 订单详情 -- 未完成
- [ ] 代付款 -- 未完成
- [ ] 待使用 -- 未完成
- [ ] 待评价 -- 未完成
- [ ] 我的收藏 -- 未完成
- [ ] 最近浏览 -- 未完成
- [ ] 我的页面 -- 未完成
- [ ] 添加、删除、修改收货地址 -- 未完成
- [ ] 设置 -- 未完成
- [ ] 换肤 -- 未完成
- [ ] 消息 -- 未完成
- [ ] 个人信息 -- 未完成
- [ ] 上传头像 -- 未完成
- [ ] 收藏 -- 未完成
- [ ] 评价 -- 未完成
- [ ] 清单 -- 未完成
- [ ] 我的钱包 -- 未完成
- [ ] 余额 -- 未完成
- [ ] 抵用券 -- 未完成
- [ ] 卡包 -- 未完成
- [ ] 好友去哪 -- 未完成
- [ ] 会员中心 -- 未完成
- [ ] 手机充值 -- 未完成
- [ ] 发票助手 -- 未完成
- [ ] 客服中心 -- 未完成
- [ ] 我要合作 -- 未完成
- [ ] 下载App -- 未完成

# 部分截图

### 商铺列表页

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/splb.png" width="365" height="619"/> <img src="https://github.com/Besmall/vue-mt/blob/master/src/components/splb.gif" width="365" height="619"/>


### 商铺筛选页

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/spsx.png" width="365" height="619"/> <img src="https://github.com/Besmall/vue-mt/blob/master/src/components/spsx.gif" width="365" height="619"/>

### 餐饮列表

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/canyin.png" width="365" height="619"/>


# 项目布局
```
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── elm                                         // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
|   ├── components                              // 组件
|   ├── config                                  // 基本配置
|   ├── router
│   └── router.js  
|   ├── store                                   // vuex的状态管理// 路由配置
|   └──
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
```



### ui 框架的整合

museui

npm install less less-loader -save-dev
