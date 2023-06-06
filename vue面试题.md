# 01-Vue基础（简介、模板语法、列表渲染、条件渲染、事件处理）        

## ※  准备：先学vue3基本语法

```
<div id="root">
    <h1>{{msg}}</h1>

    <input type="text" v-model="content" />
    <button @click="addFn">添加</button>
    
    <ul>
        <li v-for="item in todos">{{item.id}} {{item.title}}</li>
    </ul>
</div>
<script src="https://unpkg.com/vue@next"></script>
<script>
// 以前：new Vue({el,data,methods....})
// 以前：new Vue({data,methods....}).$mount('#root')
// 现在：Vue.createApp({data,methods}).mount('#root')

Vue.createApp({
    data() {
        return {
            msg: "hello vue3",

            content: '',
            todos: [
                {id:1, title: '吃饭'},
                {id:2, title: '睡觉'},
                {id:3, title: '挤痘痘'},
            ]
        }   
    },
    methods: {
        addFn() {
            this.todos.push({
                id: this.todos.length,
                title: this.content
            })
        }
    }
}).mount('#root')
</script>
```



## ※  说出vue常用的指令

```
{{data中的键}} 
v-text
v-html
v-bind  简写 :
v-for
v-if、v-else-if、v-else
v-show
v-on   简写 @

v-pre   跳过编译
v-once  仅渲染一次
v-clock 插值闪烁问题  

v-model
```

 

## ※  MVVM、MVC面试题

- 谈谈你对MVC的理解

```
MVC是软件开发中常见的开发模式，主要应用于后端，将程序划分为M模型、V视图、C控制器从而便于团队协作开发，减少代码冗余
```

- 谈谈你对MVVM理解

```
MVVM是Model-View-ViewModel缩写，也就是将MVC中的Controller演变成ViewModel
Model层代表数据模型、
View层代表UI组件
ViewModel是Model、View层的桥梁，数据会绑定到ViewModel并自动将数据渲染到页面，视图变化会通知ViewModel层更新数据。

或者 

随着移动互联网的发展，MVVM思想借鉴MVC、MVP思想演变而来，M模型负责数据维护，V视图负责数据展示，VM则是M和V的桥梁，监控M模型数据变化自动更新V视图，从而解决传统前后端分离JQ架构弊端

开发者在代码中大量调用相同的 DOM API, 处理繁琐 ，操作冗余，使得代码难以维护。
大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
当 Model 频繁发生变化，开发者需要主动更新到View ；当用户的操作导致 Model 发生变化，开发者同样需要将变化的数据同步到Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。
```

- 谈谈MVVM和MVC区别

```
相同点：都是软件开发常见的开发模式或者开发思想
不同点：
1- MVC后端居多，MVVM前端
2- MVC单向通信 目的将M和V代码分离，MVVM则是双向通信，不需要手动操作DOM

或

最初MVC最早出现在后端   M代表模型负责数据处理、V代表视图负责数据战士、C代表控制器负责调度
后来前端也有了MVC库，最早实现的就是backbone.js 但是V和M并没有很好的解耦
因此出现了MVVM模式，
MVVM是Model-View-ViewModel缩写，也就是将MVC中的Controller演变成ViewModel
Model层代表数据模型、
View层代表UI组件
ViewModel是Model、View层的桥梁，数据会绑定到ViewModel并自动将数据渲染到页面，视图变化会通知ViewModel层更新数据。
```





## ※  说一下v-show、v-if的区别

相同点：都可以用户判断控制元素隐藏显示

不同点：1-v-if语法更强、2-v-if控制DOM、v-show控制CSS

如何选：高频切换例如二维码、登录弹框、提示框、删除提示框、tab选项卡，推荐使用v-show 来减少DOM频繁删除创建所产生的额外性能开销



高逼格

```
v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
```







## ※ 【v3】判断循环v-if、v-for优先级

- 手册

```
https://cn.vuejs.org/v2/guide/list.html#v-for-%E4%B8%8E-v-if-%E4%B8%80%E5%90%8C%E4%BD%BF%E7%94%A8
https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8 
```

- 在 vue 2.x 中，在一个元素上同时使用 `v-if` 和 `v-for` 时， `v-for` 会优先作用。

- 在 vue 3.x 中， `v-if` 总是优先于 `v-for` 生效。

  ```
  减少代码冗余,减少性能开销
  ```

  ​


- vue2

```
<div id="root">
    <h1>vue2 v-for>v-if</h1>
    <p v-for="item in todos" v-if="item.show">{{item.title}}</p>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
const vm = new Vue({
    el: "#root",
    data: {
        todos: [
            {id:1, title:'a', show: true},
            {id:2, title:'b', show: false},
            {id:3, title:'c', show: true},
        ]
    }
})
</script>
```

- vue3  优化

```
<div id="root">
    <h1>vue3 v-if > v-for</h1>
    <p v-for="item in todos" v-if="item.show">{{item.title}}</p>
    <!-- <template v-for="item in todos" >
        <p v-if="item.show">{{item.title}}</p>
    </template> -->
</div>
<script src="https://unpkg.com/vue@next"></script>
<script>
Vue.createApp({
    data() {
        return {
            todos: [
                {id:1, title:'a', show: true},
                {id:2, title:'b', show: false},
                {id:3, title:'c', show: true},
            ]
        }
    }
}).mount('#root')
</script>
```









# 02-Vue基础（代码片段、表单输入绑定、实战案例）

## ※ 说一下v-model原理

说明：v-model其实是value属性、input事件的语法糖，底层通过Object.defineProperty来实现

作用：实现表单双向绑定、实现组件使用v-model组件通信

```
<input type="text" v-bind:value="msg2" v-on:input="msg2 = $event.target.value">
```

  

## ※ 深入vue响应式周边

v2响应式原理

````
底层通过Object.defineProperty进行数据劫持，然后通过发布订阅通知视图更新。

或者

vue在初始化数据时，会使用Object.defineProperty重新定义data中所有属性，当页面使用对应属性时，首先会进行依赖收集（watcher，如果属性发生变化就会通知相关依赖进行更新操作（发布订阅。
并且底层针对于对象、数组做了特殊处理，对象类型多次递归，数组类型重写数组方法
````

v2响应式数据无法劫持原因、和解决方案

```
Object.defineProperty语法不能劫持复杂类型
解决：原生解决递归
在VUE中：对象通过递归，数组通过重写方法

实战解决：
this.$forceUpdate()
this.$set(obj, key, value)
避免通过索引更新数组 而使用重写方法
```

v2和v3的区别

```
- Object.defineProperty 拦截的是对象的属性，会改变原对象。 proxy 是拦截整个对象，通过 new 生成一个新对象，不会改变原对象。
- proxy 语法更强，拦截方式除了上面的 get 和 set ，还有 11 种，以前就6个
- proxy 特性更强，可以监听未定义的，针对于N层则get时判断递归添加proxy拦截即可
```

不用reflect可以吗

```
- 简单场景可以，复杂场景不行
- 举例：https://blog.csdn.net/qq_34629352/article/details/114210386  存在BUG
- 其次：用了更方便推荐结合用 例如 has、deleteProperty、defineProperty友好提示等
```



# 03-Vue基础（Class与Style绑定、axios&fetch数据请求）

## ※ Class与Style绑定有没有用过哪里用的

案例1：https://vant-contrib.gitee.io/vant/#/zh-CN/tab

源码1：https://unpkg.com/browse/vant@1.0.0/packages/tab/index.vue

案例3：https://element.eleme.io/#/zh-CN/component/tabs 

源码3：https://unpkg.com/browse/element-ui@2.15.5/packages/tabs/src/tab-bar.vue

案例3：https://element.eleme.io/#/zh-CN/component/button

源码3：https://unpkg.com/browse/element-ui@2.15.5/packages/button/src/button.vue



1-后台管理系统菜单   v-bidn:style="{width: 模型数据}"
2-主题色切换        
3-tab选项卡
4-其他

```
:class="item.icon"
:style="{ width: item.payload ? item.payload.width : '100%' }"
:style="{ width: item.width || '70px' }"
```



## ※ 谈谈你对HTTP理解

```
超文本传输协议、规定客户端和服务端如何通信，

他是是请求行，响应行，请求头，响应头，请求体，响应体组成，
之前我做项目的回收 请求行你们主要查看请求地址、请求状态、请求方式、请求体头里面主要放cookie、token、content-type等，请求体主要看参数有没有传递给后端、响应体后端返回的数据进行项目调试。
```

## ※ 谈谈你对状态码的理解

```
2xx  200成功 201成功并创建新资源
3xx  301永久重定向 302临时重定向 304浏览器缓存
4xx  400参数有误 401密码错误 403无权访问 404文件不存在 405请求方式有误
5xx  500服务器错误
```

## ※ post、get区别

```
安全角度   post对象安全 get地址栏 后期可以通过历史记录查看登陆密码
数据角度   get地址栏 不同浏览器地址栏长度限制   post后端规定 2M 8M
```

## ※ xhr、fetch、axios区别

```
xhr、fetch

相同点：1-都可以发送异步请求、2-都是ECMA定义的
不同点：前者异步回调地狱，后者promise
```

## ※ fetch、axios区别

```
相同点：1 都可以发送异步请求，2 都是promise
不同点：1 fetch官方、axios社区，2 axios更强并发、拦截器等
```

## ※ axios之前有没有封装过！！！！

````
- 封装axios导出request实例对象（timeout、baseURL、.env、headers content-type、
- 请求拦截器（token、CancelToken、Loading
- 响应拦截器-成功（关闭Loading、 接口权限、TOKEN过期、res.data.data过滤 
- 响应拦截器-失败（关闭Loading、timeout处理 、404、canceled、邮件报警捕捉前端异常
````



## ※ axios原理

基于xmlhttprequest构造函数、和node中的http模块封装实现，动态判断浏览器环境、还是服务端环境

去选择对应语法返回promise对象

 



# 04-Vue基础（计算属性、侦听器、过滤器、自定义指令）

## ※ 计算属性、侦听器区别、使用场景

计算属性：计算属性有缓存、并且是响应式依赖缓存，调用不加函数

侦听器：侦听器无缓存，侦听模型数据变化，不能调用



计算属性：

```
vuex中
p2p分期付款、可借余额
P2P年化收益
购物车统计总价总数量
分类树型数据格式、权限树型格式
等等复杂的逻辑，存在性能问题、或者避免重复调用存在性能问题的场景都可以使用计算属性。
```

侦听器

```
网站搜索
监控弹框显示二维码
模糊筛选、关键词筛选
日期筛选、下拉筛选
全选、全不选等
监控路由变化显示对应面包屑
等等
```





## ※ 侦听器相关

- deep是什么哪里用

```
// watch: {
//   // 针对于复杂类型的深度监听
//   // params(newData) {
//   //   console.log(newData);
//   // },
//   params: {
//     deep: true,
//     handler(newData) { // 也可以直接用日期组件的change事件
//       console.log(newData);
//  	   this.params.start_time = newData.date[0];
//   		 this.params.end_time = newData.date[1];
//     },
//   },
// },



editAuth.vue 
// 获取所有权限  当前行数据变化获取最新的权限数据
watch: {
  row: {
    deep: true,
    handler() {
      getAuthsApi().then((res) => {
      	this.authsData = res.data;
      });
    },
  },
},
```



- immediate是什么哪里用

```
watch: { // 监控路由变化同步面包屑
  // $route(newData) {
  //   // console.log(newData);
  //   this.name1 = newData.meta.name1;
  //   this.name2 = newData.meta.name2;
  // },
  $route: {
    handler(newData) {
      this.name1 = newData.meta.name1;
      this.name2 = newData.meta.name2;
    },
  	immediate: true,
  },
},
  
  
 
 watch: { // qf-form封装的表单组件中，编辑传递的row当前行数据变化同步更改
   // row(newData) {
   //   console.log("watch", newData);
   // },
   row: {
     handler(newData) {
        if (!newData) return;
        this.formData = newData;
    },
    immediate: true,
  },
},
```



## ※ 说一下过滤器

作用：项目用来过滤数据，便于维护

语法：Vue.filter()

场景：订单状态、商品状态、性别、支付状态、发货状态。



> 1. 创建 preventReClick.js
>
> ```
> import Vue from 'vue'
> 
> const preventReClick = Vue.directive('preventReClick', {
>     inserted: function (el, binding) {
>         el.addEventListener('click', () => {
>             if (!el.disabled) {
>                 el.disabled = true
>                 setTimeout(() => {
>                     el.disabled = false
>                 }, binding.value || 800)
>             }
>         })
>     }
> });
> 
> export { preventReClick }
> ```
>
> 2. 在main中引入
>
> ```
> import '@/utils/preventReClick'
> ```
>
> 3. html文件中使用
>
> ```
> <el-button type="primary" @click="foo" v-preventReClick>按钮</el-button>
> ```







# 05-Vue基础（ref属性、混入、组件、动态组件、组件通信传值）

## ※ 说一下混入

作用：复用组件里面的逻辑层，减少冗余便于维护

场景：跳转封装this.$router.push 也是为了避免重复点击报错





## ※ 事件.native作用

概念：直接在组件上绑定原生事件

举例：使用elemenui、vantui封装的弹框、input等组件，需要使用官方原生事件



## ※ 组件-data为什么是一个函数

```
一个组件被复用多次，也就会创建多个实例，本质上都是基于同一个构造函数，如果data直接是对象，因为对象是引用类型，所以会影响到所有实例。
因此：为了保证组件不同的实例之间data不冲突，data必须是一个函数


function Component() {}
Component.prototype.data = {}						// 传地址
Component.prototype.data = function() {return {}}     // 返回新对象传值
let c1 = new Component
let c2 = new Component

let t1 = {}
let t2 = t1

let t1 = {}
let t2 = {}
```



## ※ 组件-通信

1  父传子   props

2   子传父  $emit     1 传数据、2 通知

3   状态管理工具 vuex



4   兄弟      eventbus

5  利用this.$parent获取vue组件对象  

6  利用ref获取vue组件对象

7  利用provide、inject

8  利用v-model实现 

9  利用插槽实现





## ※ 框架-组件封装

利用组件通信插槽封装表格、分页、轮播图、面包屑、导航菜单、loading、弹框等

利用命名视图封装头、底部、轮播图、登陆等





# 06-Vue基础（slot插槽、虚拟DOM、浏览器运行机制、回流重绘、生命周期、keep-alive、transition过渡



## ※ 说一下插槽

作用：组件封装，父给子传超文本数据

场景：弹框组件添加编辑弹出表单、头组件、底部组件等



## ※ 组件-生命周期

created				异步请求

mounted			请求请求操作DOM

updated				监控数据变化进一步操作DOM  聊天回底部、订单图表等

destroyed			清除非vue资源、定时器登陆验证码等



activated			缓存后created不触发，添加页数据后跳转到列表页获取最新数据

deactivated			缓存后destroyed不触发，用它来清除非vue资源



errorCapture               捕捉子组件错误 发送异步请求





## ※ 浏览器运行机制

```
主进程：前进后退、下载、开tab
渲染进程（浏览器内核
	GUI  	HTML构建 DOM树、CSS规则、结合、渲染。 后续的回流重绘等
	JS引擎  负责JS解析处理  V8引擎   和GUI互斥
	事件/定时器/异步请求线程
GPU进程：负责3D渲染
第三次插件
```





## ※ 回流重绘

回流：重新布局（width、top、margin、display:none

重绘：重新绘制样式不影响布局（color、background、visibility



```
1、相同点：display和visibility都有讲元素隐藏的意思
2、不同点：display是元素隐藏，隐藏的元素不占文档流
```



## ※ 说一下虚拟DOM

说明：就是用JS来描述真实的DOM，从而提升网页整体性能

原理：减少回流或重绘



## ※ 说一下Diff算法

![1577078308130](images/1577078308130.png)  



算法规则

```
1 步骤一：用JS对象模拟DOM树
2 步骤二：比较两棵虚拟DOM树的差异（切记切记切记：一层一层比）
3 步骤三：把差异应用到真正的DOM树上
4 步骤四：在页面展示

虚拟DOM介绍：https://www.jianshu.com/p/616999666920  
如何实现一个Virtual DOM 算法：https://github.com/livoras/blog/issues/13 
深入理解Diff算法：https://blog.csdn.net/lunahaijiao/article/details/86741739
```

![1577078743964](images/1577078743964.png) 





![1577078805342](images/1577078805342.png) 



![1577078868022](images/1577078868022.png) 

```
<div id="root">
    <div v-for="item in todos">
        <input type="checkbox" name="" id="">
        {{item.title}}
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
const vm = new Vue({
    el: "#root",
    data: {
        todos: [
            {id:1, title:'吃饭'},
            {id:2, title:'睡觉'},
            {id:3, title:'挤痘痘'},
        ]
    }
})
</script>

步骤1：通过浏览器运行 ，给第二个checkbox打钩
步骤2：在控制台 vm.todos.splice(1,1)
```







什么是虚拟DOM：就是使用javascript的对象来描述了DOM结构

为什么要虚拟DOM：提升性能（因为回流、重绘   浏览器工作机制）

如何更新DOM数据：通过diff算法（同层比较）

```
1 步骤一：用JS对象模拟DOM树
2 步骤二：比较两棵虚拟DOM树的差异(注：后期如果写写遍历 加上:key 提升性能的)
3 步骤三：把差异应用到真正的DOM树上
```

切记：当遍历数据的时候要写key   提升性能、也是避免BUG












## ※ Event Loop事件循环***

 简单案例1

````
console.log(1)
console.log(2)

// 1 2


console.log(1)
setTimeout(() => {
    console.log(6)
}, 5000)
console.log(2)

// 1 2 6



console.log(1)
setTimeout(() => {
    console.log(6)
}, 0)
console.log(2)

// 1 2 6   底层原理



console.log(1)
new Promise((resolve,reject) => {
    console.log(7)
    resolve(8)
}).then(res => console.log(res))
setTimeout(() => {
    console.log(6)
}, 0)
console.log(2)   //  1 7 2 8 6 底层原理
````





event loop工作流程

```
js单线程（js引擎）  解析代码 -> 异步交给其他线程可以理解为webapi 处理完成了要触发了 -> 丢进队列（先宏后微  整个script是一个宏）

宏队列		默认整个script就是一个宏、setTimeout、setInterval 
微队列     promise

思想1：先宏，后微
思想2: 处理1个宏之后，清空所有微


留心：在这里面还有一个思想叫 event loop 事件循环 和 执行栈、调用栈
目的： event loop 事件循环 、 将 队列将数据取出来，丢到【执行栈、调用栈】 然后js引擎执行
```







复杂案例：见ppt







## ※ nextTick原理

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。



![boy](./images/a.png)  

 

```
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => { // 将拿到的回调函数存放到数组中
    if (cb) {
      try { // 错误捕获
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) { // 如果当前没有在pending的时候，就会执行timeFunc
    pending = true
    timerFunc() // 多次执行nextTick只会执行一次，timerFunc就是一个异步方法
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
//
```

​    





# 07-Vue高级（脚手架、ToDoList案例、Vue.config.js配置、实战组件封装）

## ※ 框架-框架配置

别名

跨域（最终上线还得后端或运维处理

等







# 09-Vue高级（路由、重定向、模式、参数、动态路由匹配、编程式导航、嵌套路由、导航守卫、动态路由规则addRoutes）





## ※ 路由-参数

参数种类：query、params

传参方式

```
query、url
params、name  url写冒号
params、name  url不写冒号
```





## ※ 路由-动态路由匹配

问题：同一个组件仅仅修改参数created不触发

详情：改路由参数获取最新的 ，就得使用动态路由匹配语法

语法：watch 、组件导航守卫





## ※ 路由-谈谈你对编程式导航的理解

作用：就是利用js跳转网页

场景：登陆、添加、删除等



## ※ 路由-导航守卫登陆鉴权

作用；没登陆不可以访问会员中心、后台首页

语法：router.beforeEach    判断h5  next





## ※ 路由-权限控制或菜单权限

作用：不同角色，权限菜单看到的不一样

实现1：页面菜单导航根据接口数据渲染

实现2：路由不能全部写死，利用addRoutes或addRoute动态添加路由规则



## ※ 路由-元信息

meta 存放面包屑、也可以加标识控制是否缓存组件

实现1：页面菜单导航根据接口数据渲染

实现2：路由不能全部写死，利用addRoutes或addRoute动态添加路由规则



## ※ 路由-相关原理

路由模式：hash、history（不能刷新 需要配合后端、abstract

路由原理：基于SPA单页面应用思想，利用BOM API实现

具体语法

```
hash 利用location对象的hash属性改变、利用window对象的onhashchange监控
history 利用history对象的pushState方法改变、利用window对象的onpopstate监控
```

SPA优缺点

```
优点：减少HTTP请求、加快访问速度、提高用户体验度、可以加过渡效果等
缺点：不利于SEO优化

追问：如何解决
回答：nuxt.js  是基于vue开发的服务端渲染框架   
```







# 10-Vue高级（VUEX单库、VUEX数据持久化、VUEX单库模块化、VUEX框架模块化）



# 11-Vue高级（UI组件库ElemenUI、IView、AntdV、Vant、Mint等、自研UI组件库）





## ※ Vue.use原理


Vue.use主要做了两件事

```
检查插件是否已经注册，注册过得不需要重复注册

没有注册的，调用插件的install方法（参数是对象，则调用对象的install方法，如果是函数，则直接当做install方法调用）, 同时将Vue作为第一个参数传入
```

源码 https://github.com/vuejs/vue/blob/dev/src/core/global-api/use.js

````
export function initUse (Vue: GlobalAPI) {
  // 接受一个plugin参数，限制为 Function | Object两种类型
  Vue.use = function (plugin: Function | Object) {
    // _installedPlugins 存储所有注册过的 plugin
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 保存注册组件的数组，不存在则创建，存在则直接返回，不允许重复注册
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // 将传入的参数转换成数组
    const args = toArray(arguments, 1)
    // 将Vue对象拼接到数组头部
    args.unshift(this)
    // 如果提供了 install 方法，则直接调用
    if (typeof plugin.install === 'function') {
      // 如果组件是对象，且提供install方法，调用install方法将参数数组传入，改变`this`指针为该组件
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 否则直接执行
      plugin.apply(null, args)
    }
    // 将plugin存储到  installedPlugins，表示y已经注册过
    installedPlugins.push(plugin)
    return this
  }
}

````


```
/**
 * Convert an Array-like object to a real Array.
 */
export function toArray (list: any, start?: number): Array<any> {
  start = start || 0
  let i = list.length - start
  const ret: Array<any> = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}
```



# 12-Vue后台项目



## 项目做了哪些优化

> ## ● 交互角度
>
> animate.css     
>
> vue-lazyload  
>
> nprogress
>
> loading
>
> preventReClick
>
> 等
>
>  
>
> ## ● 代码角度
>
> 混入
>
> 过滤器
>
> 页面组件提取封装
>
> 公共组件提取封装
>
> axios封装
>
> 全局配置文件  process.env
>
> 等等
>
> 
>
> ## ● 性能角度 
>
> 【先把nginx服务器好好品】强制缓存、协商缓存：304 浏览器默认状态码、expires 缓存（学cookie不重要但是单词重要）
>
> 【先把nginx服务器好好品】gzip压缩
>
> 路由/组件懒加载  
>
> 开发preload预加载
>
> 关闭prefetch预加载 （预加载的一种 准确说叫预提取
>
> ```
> https://blog.csdn.net/vivo_tech/article/details/109485871
> ```
>
> keep-alive组件缓存
>
> CDN优化第三方库
>
> UI框架按需加载
>
> 图片压缩
>
> 等等



































