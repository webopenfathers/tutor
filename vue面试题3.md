# ■ 符号说明

💘 课题

🌟 常见重要

🌛 需要有印象的

🆕 v3新特性  



# 01-基本语法

## 💘 课题      

01-Vue基础（基本语法：简介、模板语法、列表渲染、条件渲染、事件处理）

## 高阶函数

>2个条件：是一个函数、形参还是函数  
>
>如：arr.map/filter.../forEach

## 高阶组件

>高阶组件（3个条件：是一个函数，形参是组件、必须返回新组件
>
>好处：减少代码冗余、便于后期维护 等等
>
>举例：网站公共底部    1 插槽、 2 高阶组件
>
>实战：react-redux  connect

## 深浅拷贝

>浅拷贝：传地址（复杂类型 数组 对象）
>
>深拷贝：传值
>
>深拷贝方法：（一维）
>
>  //  let obj2 = { ...obj1 };                            展开运算符
>
>  //  let obj2 = Object.assign({}, obj1);   
>
>  //  let obj2 = JSON.parse(JSON.stringify(obj1));
>
>  //  let obj2 = _.cloneDeep(obj1);             loadsh模块
>
>浅拷贝方法：（一维）
>
> //  浅拷贝
>
> //  let obj2 = obj1;
>
>深拷贝方法（多维）
>
>//   immutable
>
>//   let obj2 = JSON.parse(JSON.stringify(obj1));
>
>//   自己递归
>
>//    loadsh模块
>
>//    let obj2 = _.cloneDeep(obj1);
>
>浅拷贝：减少内存占用，但是容易相对出问题
>
>深拷贝：解决浅拷贝问题，但是增加内存的占用
>
>解决：使用Facebook的immutable技术实现深拷贝
>
>  //语法：let mapObj/listObj=fromJS(对象类型)
>
>  //作用：将JS对象类型转换为immutable库的 map/list 数据对象
>
>  //留心：map只修饰对象,list修饰数组
>
>  //周边语法：
>
>  //获取数据：map/list数据对象.getIn([键或索引....])
>
>  //替换数据：map/list数据对象.setIn([键或索引....],值)
>
>  //更新数据：map/list数据对象.updateIn([键或索引....],val=>val+1)
>
>  //脚下留心：除了获取返回的是你想要的数据，替换或更新都会返回一个操作后的新对象

## find()和findindex()区别

```
find()函数用来查找目标元素，找到就返回该元素，找不到返回undefined。

findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。类似于indexof

数组和字符串都有indexOf()方法
但是find()和findIndex()方法只有数组才有
```

## key的作用

```
key的作用是为了更高效的更新虚拟DOM，
Key可以标识组件的唯一性,
为了更好地区别各个组件，保持数据的唯一，
不绑定会导致所有列表DOM重新渲染
```

## vuex

```
vuex是vue的状态管理工具，主要用来解决组件通信问题
属性有：
1.state(存储数据)
2.getters(过滤数据)
3.mutations(更新数据)
4.actions(异步请求)
```

## 数据持久化

```
插件：vuex-persist
```

## 如何判断是数组

```
1.通过instanceof判断                                  
let a = [];
a instanceof Array; //true

let b = {};
b instanceof Array; //false

2.通过constructor判断
let a = [1,3,4];
a.constructor === Array;//true

3.通过Object.prototype.toString.call()判断
let a = [1,2,3]
Object.prototype.toString.call(a) === '[object Array]';//true

4.通过Array.isArray()判断
let a = [1,2,3]
Array.isArray(a);//true
```

##如何判断是对象以及函数

```
1.通过instanceof判断  
let a = {}
a instanceof Object  //true


2.通过constructor判断
let a={}
a.constructor===Object  //true


3.通过Object.prototype.toString.call()判断
let a = {}
Object.prototype.toString.call(a) === '[object Object]';//true

```





## 节流防抖

```
1-防抖：（用户触发事件过于频繁，取消上一次操作，只要最后一个）
let t = null
//事件外面
inp.oninput=function(){
    if(t){
        clearTimeout(t)
    }
    //延时定时器  定时器外面
    t=setTimeout(()=>{
       console.log(this.value)
    },500)
  }
  
2-节流： （控制高频事件执行次数一段时间内只执行一次） 

let t
//事件外面
inp.oninput=function(){
    if(t) return
    //延时定时器  定时器外面
    t=setTimeout(()=>{
    //请求接口
       console.log(this.value)
    },500)
    t=null
  } 
```

## 事件循环

```
不断检测任务队列里面有没有异步代码，计时器到点后就插到任务队列面，有一个任务就执行，有两个任务顺序执行	

同步代码：运行栈中执行
异步代码：任务队列中执行
异步代码分为：宏任务和微任务
宏任务：计时器，ajax，读取文件
微任务：promise的then方法


js是单线程
执行顺序
1-同步代码
2-process.nextTick
3-微任务
4-宏任务
5-setImmediate
```

## nextTick

```
nextTick 
是在下次 DOM 更新循环结束之后执⾏延迟回调，在修改数据之后使⽤nextTick，则可以在回调中获取更新后的 DOM
```

##首屏加载过慢

```
1-前端公共的CDN服务。
2-路由懒加载 component: () => import('@/views/resetPassword/ResetPassword')。
3-图片懒加载。
4-UI框架按需加载
```

 ## call/apply/bind区别

```
    call/apply/bind  自定义对象（都可以改变this指向）

    调用：函数名()
    然后：call/apply也可以调用函数 
    区别：相同点-调用函数改变this指向，不同点-传递实参的方式
    语法：函数名.call(this要指向的对象, 参数1, ..., 参数n)
    语法：函数名.apply(this要指向的对象, [参数1, ..., 参数n])

    语法：var 新函数 = 函数名.bind(this要指向的对象，参数1,...,参数n)
    作用：改变this指向，并传递参数 
    留心：不同的在于这哥们不会立马触发 而需要继续调用返回的新函数

```

## 闭包相关

概念：两个函数嵌套,内部函数使用外部函数的值(变量)，且该变量不会销毁

作用1：隐藏变量，避免全局污染

作用2：可以读取函数内部的变量

缺点1：导致变量不会被垃圾回收机制回收，造成内存消耗

缺点2：不恰当的使用闭包可能会造成内存泄漏的问题

解决：变量调用完毕以后，赋值为null

场景：

计时器
循环绑定事件特效
闭包实现单例模式
节流防抖、

函数中的定时器JQ库、

匿名函数自调用插件
等等

## 继承

```
1-概念：当定义多个类，有相同的属性或者方法时，可以通过继承，减少代码冗余
2-ES6 extends(css预处理：extend)
ES5 原型继承
ES5 构造函数继承，组合继承
3-注意


   子继承父就拥有父的属性和方法
   子和父的属性或者方法重名则覆盖，但是constructor特殊不能覆盖
   解决1：子不写
   解决2：子通过super()关键词调用父的constructor避免覆盖
```

## websocket使用步骤

```
1-引入socket.io库
https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js
2-实例化对象
const socket = io('websocket地址')

3-发送数据到频道
// 推送数据到频道(前端发送======>后端接收)
socket.emit('频道', 数据)


或者监控后端发送数据
socket.on(频道, data => {
    console.log(data)
})
```

## Echarts使用步骤

```
1-引入echarts
http://unpkg.com/echarts
2-准备一个具有大小的DOM
<div style="width:500px;height:300px;"></div>
3-基于DOM初始化echarts
const mychart = echarts.init(具有大小的DOM)
4-指定图表配置
let option = {
		x轴数据
    xAxis: {
        type: 'category',
        data: ['a', 'b', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    	y轴数据
    yAxis: {
        type: 'value'
    },
       曲线或者柱状图
    series: [{
        data: [900, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

5-渲染图表
mychart.setOption(option)

6-图标自适应

[注]每次发送异步请求以后，必须重新实例化，图表才会更新
```

## AJAX使用方法

```
    // 1. 创建ajax对象
    const xhr = new XMLHttpRequest
    // 2. 监听状态
    xhr.onreadystatechange = ()=>{
      //判断是否返回
      if(xhr.readystate==4){
        //判断状态码
        if（xhr.status==200）{
			//获取数据 后端返回的json 转为对象
			let res=JSON.parse(xhr.responseText)
		}else{
            console.log(res.status)
		}   
      } 
    }
    
    // 3. 通过open设置请求地址、请求参数
    xhr.open('post', './api.json')
    
    // 注：POST请求必须设置请求编码，不然后端无法解析获取数据 (切记切记别乱放 注意位置)
    xhr.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );

    // 4. 发送请求  键1=值1&....&键n=值n
    xhr.send('name=随便写&pwd=123456')
})
```

## 数组去重

```
>>es6 set去重
>>双层for循环
首次遍历数组
第二次遍历数组，判度连个值是否相等,相等删除后者
>>indexOf去重
定义一个空数组
利用indexOf查找定义的数组中是否有原数组中的值，找不到(==-1),则push到新数组中
>>includes  返回布尔  找到就返回true 找不到就返回false
>>filter
```

## for in和for of区别

```
for in 既可以【遍历数组】，又可以【遍历对象】。
            for in 遍历对象时 返回的是 【键】
            for in 遍历数组时 返回的是 【索引】
for of 既可以能遍历【数组】又可以遍历【字符串】。
			for of 遍历数组返回数组里面的 【值】
```

## forEach/map/filter区别

```
后来：
map、		     修改数组数据，返回一个【修改过】的数组!!!!     数组长度不变 
filter、		     过滤数组数据，返回一个【新】数组/手表        数组长度可能会变，取决于return 的值
find、			 找值  找到就返回该元素，找不到返回undefined。  
findIndex         找下标  找不到返回-1  类似indexOf
等
```

## vue中watch和created哪个先执行

```
“如果watch 加了 immediate: true, 就是watch先执行,否则就是created 先执行”
```

## vue中，如何监听一个对象？拿到的旧值和新值一样如何解决

```
开启深度监听deep:true。


解决办法，配合computed深度复制,例如监听DeviceList
data() {
    return {
      DeviceList:[],
    };
 },
computed:{
    NewDeviceList(){
    	// 新的赋值  深拷贝
          return JSON.parse(JSON.stringify(this.DeviceList));
    }
 },
watch:{
    NewDeviceList:{
      handler(newV,oldV){
      	// 此时的 新老数据是不同的 
      },
      deep: true
    }
  },
```



## object.defineproperty哪里会用到这个方法

```
Object.defineProperty()方法会直接在一个对象上定义一个新属性，或修改一个对象的现有属性，并返回对象


// Object.defineProperty                                            //阔以用于给对象添加更新属性
let obj = {}
// 该方法中包含以下参数：需要添加属性的对象，你需要加的属性，配置项
Object.defineProperty(obj, 'name', {
// getter函数
get() {
// get函数中，一定要return当前这个新添加进去的属性作为返回值
console.log('你当前获取到的值是', name)                            // 相当于获取：obj.name
return name
},

```

## vue2和vue3的区别

![微信图片_20211023090739](C:\Users\zbw\Desktop\微信图片_20211023090739.png)





## 🆕 先学vue3基本语法

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
// 现在：Vue.createApp({data,methods...}).mount('#root')

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



## 🌟 说出vue常用的指令

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

 

## 🌟  MVVM、MVC面试题

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





## 🌟  说一下v-show、v-if的区别

相同点：都可以用户判断控制元素隐藏显示

不同点：1-v-if语法更强、2-v-if控制DOM、v-show控制CSS

如何选：高频切换例如二维码、登录弹框、提示框、删除提示框、tab选项卡，推荐使用v-show 来减少DOM频繁删除创建所产生的额外性能开销



高逼格

```
v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
```





## 🆕 判断循环v-if、v-for优先级

- 手册

```
https://cn.vuejs.org/v2/guide/list.html#v-for-%E4%B8%8E-v-if-%E4%B8%80%E5%90%8C%E4%BD%BF%E7%94%A8
https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8 
```

- 在 vue 2.x 中，在一个元素上同时使用 `v-if` 和 `v-for` 时， `v-for` 会优先作用。
- 在 vue 3.x 中， `v-if` 总是优先于 `v-for` 生效。


- vue2

```
<div id="root">
    <h1>vue2 v-for>v-if</h1>
    
    <div v-if="state">
    	<p v-for="item in todos">{{item.title}}</p>
    </div>
    
    <p v-for="item in todos" v-if="state">{{item.title}}</p>
    
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
const vm = new Vue({
    el: "#root",
    data: {
        todos: [
        		state: false,
        		
            {id:1, title:'a'},
            {id:2, title:'b'},
            {id:3, title:'c'},
        ]
    }
})
</script>
```

- vue3  优化

```
<div id="root">
    <h1>vue3 v-if > v-for</h1>
    
    
    <div v-if="state">
    	<p v-for="item in todos">{{item.title}}</p>
    </div>
    
    <p v-for="item in todos" v-if="state">{{item.title}}</p>
    
    <!-- 多学一招 -->
    <template v-if="state">
    	<p v-for="item in todos">{{item.title}}</p>
    </template>
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







# 02-特殊语法

## 💘 课题      

02-Vue基础（特殊语法：表单输入绑定、购物车案例）



无，都在第三天

 



# 03-语法原理

## 💘 课题

03-Vue高级（语法原理：v-model语法原理、响应式原理、Vue源码分析、自定义Vue库）



##  🌟 说一下v-model原理

v-model其实是个语法糖底层是基于【:value】和【@input】 封装

说明：v-model其实是value属性、input事件的语法糖，底层通过Object.defineProperty来实现

作用：实现表单双向绑定、实现组件使用v-model组件通信

```
<input type="text" :value="msg" @input="msg = $event.target.value">
```

  

##  🌟 VUE2响应式原理（中级）

Vue2在初始化数据时，会使用Object.defineProperty语法对data中的所有属性进行数据劫持，如果属性发生变化就会通知进行更新操作



##  🌟 VUE2响应式原理（高级）

````
底层通过Object.defineProperty对data中的所有属性进行数据劫持，然后通过发布订阅通知视图更新。

或者

vue在初始化数据时，会使用Object.defineProperty重新定义data中所有属性，当页面使用对应属性时，首先会进行依赖收集（watcher，如果属性发生变化就会通知相关依赖进行更新操作（发布订阅。
并且底层针对于对象、数组做了特殊处理，对象类型多次递归，数组类型重写数组方法
````



##  🌟 VUE2响应式数据无法劫持原因、和解决方案

```
自己解决：递归全搞定
VUE解决：
1-对象用递归
2-数组用重写
3-增加额外api 
this.$forceUpdate()   
this.$set(this.data数据, 要劫持得数组索引或对象键, 默认值)
```



##  🌟 $forceUpdate 原理



##  🌟 $set 原理

```
当你发现你给对象加了一个属性，在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set（）这个方法了，

this.$set()：
向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，
```





##  🆕 响应式原理

为啥VUE3要选择proxy和reflect

```
- Object.defineProperty 拦截的是对象的属性，会改变原对象。 proxy是拦截整个对象，通过 new 生成一个新对象，不会改变原对象。
- proxy 语法更强，拦截方式除了上面的 get 和 set ，还有 11 种，以前就6个
- proxy 特性更强，可以监听未定义的，针对于N层则get时判断递归添加proxy拦截即可
```

不用reflect可以吗

```
- 简单场景可以，复杂场景不行
- 举例：https://blog.csdn.net/qq_34629352/article/details/114210386  存在BUG
- 其次：用了更方便推荐结合用 例如 has、deleteProperty、defineProperty友好提示等
```





# 04-花式思想

## 💘 课件

04-Vue基础（花式思想：Class与Style绑定、计算属性、侦听器、过滤器、自定义指令、ref属性、混入）



##  🌛 Class与Style绑定工作有用过吗

```
:class="item.icon"
:style="{ width: item.payload ? item.payload.width : '100%' }"
:style="{ width: item.width || '70px' }"

1-后台管理系统菜单   v-bidn:style="{width: 模型数据}"
2-主题色切换        
3-tab选项卡
4-其他

案例1：https://vant-contrib.gitee.io/vant/#/zh-CN/tab
源码1：https://unpkg.com/browse/vant@1.0.0/packages/tab/index.vue
案例3：https://element.eleme.io/#/zh-CN/component/tabs 
源码3：https://unpkg.com/browse/element-ui@2.15.5/packages/tabs/src/tab-bar.vue
案例3：https://element.eleme.io/#/zh-CN/component/button
源码3：https://unpkg.com/browse/element-ui@2.15.5/packages/button/src/button.vue
```





##  🌟 计算属性和侦听器区别、使用场景

计算属性：计算属性有缓存、并且是响应式依赖缓存，调用不加小括号

侦听器：侦听器无缓存，侦听模型数据变化，不能调用



计算属性：

```
利用vuex辅助函数，结合计算属性去显示数据 项目中大量使用
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
美团Admin项目中监控路由变化显示对应面包屑
等等
```



> - 相同点
>
> 1. 语法角度（ a 从思想上都是普通方法升级版  b 都可以写函数或对象
> 2. 研发角度：计算属性-减少冗余、缓存提升性能、侦听器-减少DOM操作  符合VUE响应式思想
>
> - 不同点
>
> 1. 从语法角度：调用时，计算属性调用不加小括号，侦听器不能调用
> 2. 从功能角度：计算属性有缓存、响应式依赖，侦听器没有缓存常用于搜索、监控数据变化、代替事件等



##  🌟 watch监控失效场景&解决方案

针对于对象类型的数据，需要加deep属性深度监听/侦听





##  🌟 watch两大属性应用场景

- deep是什么哪里用

> a-美团Admin项目中：监控路由变化，通过meta路由元信息重置面包屑🍞
>
> ```
> // watch: {
> //   // 针对于复杂类型的深度监听（注：深度监听场景）
> //   // params(newData) {
> //   //   console.log(newData);
> //   // },
> //   params: {
> //     deep: true,
> //     handler(newData) { // 也可以直接用日期组件的change事件
> //       console.log(newData);
> //  	   this.params.start_time = newData.date[0];
> //   		 this.params.end_time = newData.date[1];
> //     },
> //   },
> // },
> ```
>
> b-美团Admin项目中：给角色分配权限 重置树🌲型控件
>
> ```
> editAuth.vue 
> // 获取所有权限  当前行数据变化获取最新的权限数据
> watch: {
>   row: {
>     deep: true,
>     handler() {
>       getAuthsApi().then((res) => {
>       	this.authsData = res.data;
>       });
>     },
>   },
> },
> ```
>

- immediate是什么哪里用

> a-美团Admin项目中：meat路由元信息【首次】重置面包屑🍞
>
> ```
> watch: { // 监控路由变化同步面包屑
>   // $route(newData) {
>   //   // console.log(newData);
>   //   this.name1 = newData.meta.name1;
>   //   this.name2 = newData.meta.name2;
>   // },
>   $route: {
>     handler(newData) {
>       this.name1 = newData.meta.name1;
>       this.name2 = newData.meta.name2;
>     },
>   	immediate: true,
>   },
> },
>   
> ```
>
> b-美团Admin项目中：基于elementui二次封装的form编辑默认显示数据要监控row变化
>
> ````
> watch: { // qf-form封装的表单组件中，编辑传递的row当前行数据变化同步更改
>    // row(newData) {
>    //   console.log("watch", newData);
>    // },
>    row: {
>      handler(newData) {
>         if (!newData) return;
>         this.formData = newData;
>     },
>     immediate: true,
>   },
> },
> ````



##  🌟 谈谈你对过滤器的理解有没有用过

作用：项目用来过滤数据，便于维护

语法：Vue.filter()

场景：订单状态、商品状态、性别、支付状态、发货状态。





##  🌟  谈谈你对混入的理解有没有用过

作用：复用组件里面的逻辑层，减少冗余便于维护

语法：Vue.mixin({data,methods....})

场景：美团Admin项目中确认删除、接口操作后的提示重定向、jump重定向封装等等

场景：跳转封装this.$router.push 也是为了避免重复点击报错；也可以通过重置路由模块原型








# 05-组件编程

## 💘 课件

05-Vue基础（组件编程：组件、动态组件、组件通信传值、slot插槽）







## 🌟 为啥data要写函数里面返回对象

一个组件被复用多次，也就会创建多个实例，本质上都是基于同一个构造函数，如果data直接是对象，因为对象是引用类型，所以会影响到所有实例。
因此：为了保证组件不同的实例之间data不冲突，data必须是一个函数

```
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



## 🌛谈谈你对单向数据流的理解

单向数据流指在组件化思想开发的项目中，数据由根或者父组件传递给子组件，禁止🈲子组件中直接更改，而是由父更改后重新传递给子数据使用

```
// 在vue中 只能父数据传递给子 父修改后会自动同步到子
// 不允许子修改父  
// 生活中：你妈给你多少钱 就用多少，不允许你直接去拿 否则长大了完犊子
// 代码中：父给你就用，你自己直接改 容易后期搞懵逼谁串改了数据
```





## 🌟 如何实现组件通信？

常用：状态管理工具 vuex  （今天不学）
常用：父传子 props、子传父$emit、兄弟 eventBus
常用：slot插槽
概率：通过组件实例  ref获取、$parent获取、$root获取、$children获取
概率：v-model
了解：利用provide、inject





##  🌟 事件.native作用

概念：直接在组件上绑定原生事件

举例：使用elemenui、vantui封装的  弹框、input等组件，需要使用官方原生事件



## 🌟 在组件上写原生事件失效解决方案

> 方法1：通过自定义事件重写原生事件
>
> 方法2：加.native修饰符



## 🌟 在组件上使用v-model原理

笔试可能需要手写

```
<组件名 v-model="data中的键"></组件名>
<组件名 :value="data中的键" @input="data => data中的键 = data"></组件名>
```



## 🌛 修饰符.sync原理


```
<组件名 v-bind:属性名.sync="data中的键"></组件名>
<组件名 v-bind:属性名="data中的键"  @update:必须一样的属性名="data => data中的键 = data"></组件名>
```







# 1



# 1



# 1



# 1



# 1



# 1



# 1



# 1



# 0N-项目周边

##  🌟 【接口】谈谈你对HTTP理解

```
超文本传输协议、规定客户端和服务端如何通信，

他是是请求行，响应行，请求头，响应头，请求体，响应体组成，
之前我做项目的回收 请求行你们主要查看请求地址、请求状态、请求方式、请求体头里面主要放cookie、token、content-type等，请求体主要看参数有没有传递给后端、响应体后端返回的数据进行项目调试。
```

##  🌟 【接口】谈谈你对状态码的理解

```
2xx  200成功 201成功并创建新资源
3xx  301永久重定向 302临时重定向 304浏览器缓存
4xx  400参数有误 401密码错误 403无权访问 404文件不存在 405请求方式有误
5xx  500服务器错误
```

##  🌟 【接口】post、get区别

```
安全角度   post对象安全 get地址栏 后期可以通过历史记录查看登陆密码
数据角度   get地址栏 不同浏览器地址栏长度限制   post后端规定 2M 8M
```

##  🌟 【接口】xhr、fetch区别

```
xhr、fetch

相同点：1-都可以发送异步请求、2-都是ECMA定义的
不同点：前者异步回调地狱，后者promise
```

##  🌟 【接口】fetch、axios区别

```
相同点：1 都可以发送异步请求，2 都是promise
不同点：1 fetch官方、axios社区，2 axios更强并发、拦截器等
```

##  🌟 【接口】axios之前有没有封装过！！！！

````
- 封装axios导出request实例对象（timeout、baseURL、.env、headers content-type、

- 请求拦截器（token、CancelToken、Loading

- 响应拦截器-成功
（关闭Loading、 接口权限、TOKEN过期(res.meta.state==400  router.push('/login'))、res.data.data过滤 

- 响应拦截器-失败（关闭Loading、timeout处理 、404、canceled、邮件报警捕捉前端异常
````

##  🌟 【接口】axios原理

基于xmlhttprequest构造函数、和node中的http模块封装实现，动态判断浏览器环境、还是服务端环境

去选择对应语法返回promise对象

 



##  🌟 框架-组件封装

利用组件通信插槽封装表格、分页、轮播图、面包屑、导航菜单、loading、弹框等

利用命名视图封装头、底部、轮播图、登陆等











##  🌟 说一下插槽

作用：组件封装，父给子传超文本数据

场景：弹框组件添加编辑弹出表单、头组件、底部组件等



##  🌟 组件-生命周期

created				异步请求

mounted			异步请求，操作DOM

updated				监控数据变化进一步操作DOM  聊天回底部、订单图表等

destroyed			清除非vue资源、定时器登陆验证码等



activated			缓存后created不触发，添加页数据后跳转到列表页获取最新数据

deactivated			缓存后destroyed不触发，用它来清除非vue资源



errorCapture               捕捉子组件错误 发送异步请求





##  🌟 浏览器运行机制

```
主进程：前进后退、下载、开tab
渲染进程（浏览器内核
	GUI  	HTML构建 DOM树、CSS规则、结合、渲染。 后续的回流重绘等
	JS引擎  负责JS解析处理  V8引擎   和GUI互斥
	事件/定时器/异步请求线程
GPU进程：负责3D渲染
第三次插件
```





##  🌟 回流重绘

回流：重新布局（width、top、margin、display:none

重绘：重新绘制样式不影响布局（color、background、visibility



```
1、相同点：display和visibility都有讲元素隐藏的意思
2、不同点：display是元素隐藏，隐藏的元素不占文档流
```



##  🌟 说一下虚拟DOM

说明：就是用JS对象来描述真实的DOM结构，从而提升网页整体性能

目的：减少回流和重绘提升性能



##  🌟 说一下Diff算法

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












##  🌟 Event Loop事件循环***

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







##  🌟 nextTick原理

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

##  🌟 框架-框架配置

别名

跨域（最终上线还得后端或运维处理

等 







# 09-Vue高级（路由、重定向、模式、参数、动态路由匹配、编程式导航、嵌套路由、导航守卫、动态路由规则addRoutes）





##  🌟 路由-参数

参数种类：query、params

传参方式

```
query、url
params、name  url写冒号
params、name  url不写冒号
```





##  🌟 路由-动态路由匹配

问题：同一个组件仅仅修改参数created不触发

详情：改路由参数获取最新的 ，就得使用动态路由匹配语法

语法：watch 、组件导航守卫





##  🌟 路由-谈谈你对编程式导航的理解

作用：就是利用js跳转网页(beforeRouteUpdate)

场景：登陆、添加、删除等



##  🌟 路由-导航守卫登陆鉴权

作用；没登陆不可以访问会员中心、后台首页

语法：router.beforeEach    判断h5  next





##  🌟 路由-权限控制或菜单权限

作用：不同角色，权限菜单看到的不一样

实现1：页面菜单导航根据接口数据渲染

实现2：路由不能全部写死，利用addRoutes或addRoute动态添加路由规则



##  🌟 路由-元信息

meta 存放面包屑、也可以加标识控制是否缓存组件

实现1：页面菜单导航根据接口数据渲染

实现2：路由不能全部写死，利用addRoutes或addRoute动态添加路由规则



##  🌟 路由-相关原理

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





##  🌟 Vue.use原理


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
> animate.css     vue过渡 
>
> vue-lazyload    路由懒加载
>
> nprogress         顶部加载进度条
>
> loading              全局的loading
>
> preventReClick   阻止重复点击
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



































