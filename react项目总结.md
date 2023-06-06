## react组件

##函数组件：

// 定义组件
function 组件名(大驼峰)  ()  {

return jsx

}
//渲染数据
 ReactDOM.render(<组件名 />, document.querySelector("#app"));



##类组件class：

class 组件名 extends React.Component
{
​             state={};

​             render() {        // render函数里面return jsx

​                       return jsx

​            }
}
//渲染数据
 ReactDOM.render(<组件名 />, document.querySelector("#app"));

-------------------------------------------------------------------------------------------------------------------

##组件属性(props)：

ReactDOM.render(<组件名 属性名1="属性值1" 属性名2="属性值2" />, document.querySelector("#app"));

###函数组件:

直接在函数中定义 形参props。
jsx中通过{ props.属性名 }调用。

###类组件：

不用写形参props
jsx中通过{this.props.属性名}调用

-----------------------------------------------------------------------------------

###给组件设置默认属性和属性值(defaultProps)

语法:

写在function 和 class同级

```
组件名.defaultProps = {
		键：属性名
		值：属性值
		a: false,
		b: 2,
}
```


<组件名 a="1" />
<组件名 a={1} ></组件名>

脚下留心：JSX中只要写了{} 就必须去掉引号

###给组件加验证规则(propTypes)

```
 //还可以写验证规则
  组件名.propTypes = {
    //键：要验证的属性名
    //值：验证规则
    c: React.PropTypes.number, //报错 c为字符串类型
    d: React.PropTypes.number.isRequired, //d 为必须传
  };
```



##在类组件中定义方法：

写在render(){} 同级


在函数组件中:
定义方法：
写在return 同级


如：onClick="clickFun"

在clickFun方法写箭头函数

----------------------------------------------------------------------------------------

##关于事件调用函数问题：

函数组件：onClick={ 函数名 }
类组件：onClick={ this.函数名 }
留心：
1-调用函数时，不能加小括号
2-定义函数时，写箭头函数

----------------------------------------------------------------------------------
##关于函数传参问题：

事件传参问题：

```
1 外面套一个箭头函数然后再调用。
onClick={()=>this.函数名(参数)}

2 bind
onClick={this.函数名.bind(this,参数)}
```

##关于组件状态(state):

class组件获取状态：

```
{this.state.键}
```

class组件更新状态：

```
this.setState({
state中的键:this.state.键+1/this.state.键+data(传递的参数)/.....
})

```

一般在函数中需要两者结合一起用

```
    deleteFn(index) {
      this.state.todos.splice(index, 1);

      this.setState({
        todos: this.state.todos,
      });
    }
```

#*判断、循环、组件、组件样式b、ref标记、组件通信、context、children属性b

##列表&key

### map用来遍历数据语法

```
let updArr = arr.map((item,index) => { 
     //遍历arr数组，将里面的值挨个赋值给item
     return 数据        // return数据就push到updArr中（留心：不写return则push undefined
})
```

##表单（受控）input/select/textarea

```
vue中通过v-model双向绑定，只要数据更改同步到模型中，需要时再获取。

受控组件：
表单数据由react控制
相当于VUE中的 v-model双向绑定
双向绑定:
	M->V          也就是state中的数据在jsx中显示。
	value={this.state.value}
	V->M          通过定义函数,然后例如通过 点击事件 更新(setState) state 从而jsx中发生变化。
	onChange={this.函数名}

// 重点以后定义函数统一用箭头函数。
函数名=(e)=>{
	//更新state
	this.setState({
	state中的键:e.target.value 
	})
}
---------------------------------------------------------------------------------------------
步骤一：
 //定义仓库
   state = {
     uname: "张博闻",
     desc: "身高180",
     gj: "",
   };
   
步骤二：
//定义方法  以后定义方法统统用箭头函数省的麻烦
handleUpdDesc = (e) => {
  this.setState({
    desc: e.target.value,
  });
};

步骤三：
render(){
	return <textarea
  		value={this.state.desc}         //仅仅实现了M-->V
 		onChange={this.handleUpdDesc}   //实现V-->M双向绑定
 		cols="30"
 		rows="10"
		></textarea>
}

注：关于<select></select>标签,  value={this.state.键} onChange={this.函数名} 是加在select标签上的
```

##ref标签

```
<标签名  ref="标识"></标签名>

this.refs.标识 => 通过该语法是获取的JS标签对象


ref好处：减少DOM查找，提升性能
ref语法：1-给标签增加ref属性，2-通过this.refs.标识获取  
切记需要DOM数据已经渲染：componentDidMount
```

##组件样式className

```
1-
link或者import给组件加样式
步骤一：先导入外部写好的样式
步骤二：添加类名用 className 例如<button className='a'></button>
2-
写行内样式
直接用style的对象语法
<标签名 style={ {css属性名:属性值，....，css属性名n:属性值n} }></标签名>
```

##组件通信

###父传子  (父定义state，子通过this.props.键进行获取)

```
父在调用子组件上传递数据
子通过this.props.键来获取数据（留心：键就是调用子组件的属性名

      //1.定义子组件
      class Son extends React.Component {
        render() {
        //子组件中的this Son {props: {…}, context: {…}, refs: {…}, updater: {…}, 																		_reactInternalInstance: p, …}
          console.log("子组件中的this", this); 

          return (
            <fieldset>
              <legend>子组件</legend>
              {this.props.a}
              {this.props.b}
              {this.props.c}
            </fieldset>
          );
        }
      }

      //给子设置属性验证规则
      Son.propTypes = {
        a: React.PropTypes.string.isRequired,
        b: React.PropTypes.string.isRequired,
        c: React.PropTypes.number.isRequired,
      };

      //定义父组件  父中定义state 传递给子子用props接受
      class Father extends React.Component {
        state = {
          msg: "hello@qf",
        };
        render() {
          return (
            <fieldset>
              <legend>父组件</legend>
              <Son a="1" b={this.state.msg} c={1} /> //父中调用子组件
            </fieldset>
          );
        }
      }

      //2.渲染数据 渲染父组件
      ReactDOM.render(<Father />, document.querySelector("#app"));
      
      
总结：父传子

定义子组件
子里面用 this.props.属性名 接收
子也可以写自己的验证规则
组件名.propTypes={   }


定义父组件
父组件中定义自己的state={ msg:'操作成功'}
父中调用子组件 
父给子传递数据
<Son a='1' b={this.state.msg} c={1} />
```

###子传父  (子定义state,父定义方法通过属性传递给子)

```
父定义普通方法传递形参 接受数据。
父通过给子传递属性的方式把 方法 传递给子组件。
子组件中再通过this.props.父传递过来的方法名(this.state.键)把数据传递给父。
父通过相同的方法再接受数据，就可打印子的数据(子中的state中的数据)。


子调用普通方法传递数据

1. 父定义方法
2. 方法传递给子
3. 子挂载完毕、事件触发更新数据

class Son extends React.Component
{
state={msg:'hello我是子数据'}
render(){
   return(
    {/*子组件中以属性的方式进行接收并把state中的数据以形参的方式传递给父，父通过data参数接受*/}
   <button onClick={ () => this.props.getSonMsg(this.state.msg) }></button>
   )   
}
}

class Father extends React.Component
{
state={
   msg: "hello@qf",
   num: 666,
}


//父定义方法，获取子中的数据
 getSonMsg = (data) => {
  console.log("父打印结果", data);  //data为 hello我是子数据
  };
  render(){
         return (
            <fieldset>
              <legend>父组件</legend>
              <Son
                getSonMsg={this.getSonMsg} // 父以属性的方式把方法传递给子
              />
            </fieldset>
          );
  }
}
```

##children属性(获取双标签里面的内容)

```
调用组件：<组件名  a="" b="" >内容</组件名>   
获取组件属性：this.props.属性名 这里可以写a或者b
获取组件内容：this.props.children就可以获取双标签里面的内容（）,写在要获取组件内容的定义组件中

注意：此时ReactDOM.render(<组件名 >纯文本或HTML标签</组件名>,document.queryselect('#app'))要写双标签
HTML标签也可解析
```

#***react生命周期***

```
componentWillMount()              首次render渲染前触发，后续不触发,属性状态更新也不触发  弃用1

render()                          首次以及后续更新都会触发

componentDidMount()               首次render()后触发，可以发送异步请求，返回setState后组件会重新渲染
							   初始化echarts、swiper等
							   
componentWillUpdate()             所在组件属性/状态更新前触发        弃用2

componentDidUpdate()              所在组件属性/状态更新后  监控父传递的数据、数据改变更新DOM等

componentWillUnmount()            在此处完成组件的卸载和数据的销毁
							    clear你在组建中所有的setTimeout,setInterval
							   
shouldComponentUpdate()            return false可以阻止组件的更新

componentWillReceiveProps()        仅属性(props)改变触发

shouldComponentUpdate()            属性&状态改变都触发   性能优化阻止组件无效渲染  返回bool

//返回bool目的，是否阻止当前组件渲染
//true-正常渲染
//false-阻止渲染


componentDidCatch()               子组件有问题捕获显示提示页面


总结：mount结尾     首次渲染触发（属性状态更新不触发）
	 updata结尾    更新属性&状态
     unmount结尾   当前组件卸载


注：关于  shouldComponentUpdate() 使用中出现的问题及解决方案
1 num++                       render触发没毛病 
2 msg没变                     render触发有瑕疵
3 shouldComponentUpdate()     判断msg解决、但是num出问题

解决
继承PureComponent
同时把 shouldComponentUpdate(){ return false } 注释掉
```
## redux使用步骤

```
// 1-引入库
<script src="https://cdn.bootcdn.net/ajax/libs/redux/2.0.0/redux.min.js"></script>
// 2、创建仓库（生活中-有仓库管理员帮我们Action存取动作、-计算机-管理员就是函数 reducer
  let defaultState = {     //初始化数据
    num: 666,
    a: 1,
  };
  const store = Redux.createStore((state = defaultState, action) => {
    let { type, payload } = action; //action ={type:动作, payload:参数}

    switch (type) {
      case "INCRMENT_NUM":
        state.num++;        // TODO：这样写其实有瑕疵，先不说
        break;
      case "DECRMENT_NUM":
        state.num--;        // TODO：这样写其实有瑕疵，先不说
        break;
      default:
        break;
    }
    return state;
  });
  
// 3-获取数据
  console.log(store);
  //   console.log(store.getState());
  document.querySelector("h1").innerText = store.getState().num;  
 
//4、更新仓库数据/触发动作
 store.dispatch(必须是对象这个对象会自动交给仓库管理员第二个形参)
 
 store.dispatch( {type: 'ADD/DEL', payload: 参数任意类型} )
 
 
 如：
   //  更新仓库数据
  document.querySelector("button").onclick = function () { //绑定点击事件
    //   store.dispatch(action)
    store.dispatch({
      type: "INCRMENT_NUM",  //通过type来更新仓库数据
    });
  };
 
 
//5 监控数据变化
 store.subscribe( () => {
    数据变化操作  store.getState()
})

如：
  store.subscribe(() => {
    console.log("数据变化啦♪(^∇^*)");
    document.querySelector("h1").innerText = store.getState().num;
  });
 
 总结：----------------------------------------------------------------------------------
 1-引入库
 <script src="https://cdn.bootcdn.net/ajax/libs/redux/2.0.0/redux.min.js"></script>
 
 2-创建仓库
 const store = Redux.createStore(管理员/函数)    //函数有两个形参 state对象类型仓库数据
 										    //action 对象类型{type,payload}
 
 3-获取数据
 store.getState().键
 
 4-更新仓库
 store.dispatch( { type:要触发的动作 , payload:也可传递参数} )  //里面是对象类型

 5-监控数据变化
 store.subscribe(()=>{   数据变化操作 store.getState().键   }) //里面是函数类型
```

##redux模块化后使用步骤

```
1-引入库
<script src="http://unpkg.com/redux"></script>

2-定义所需模块
---------------------login模块-------------------------------------------------------
  let initData = { a: 1 }; 
  let loginReducer = (state = initData, action) => {       //定义login的Reducer
    let { type, payload } = action;                        //将action 进行解构
    switch (type) {
      case "LOGIN/INCRMENT_A":                             //case:'模块名/INCRMENT_A'
        state.a += payload;                                //case中对应的方法所要执行的操作
        break;

      default:
        break;
    }
    return state;                                          
  };
---------------------------------------orders模块-----------------------------------------------
    let initData2 = { a: 2 };
  	let ordersReducer = (state = initData2, action) => {    //定义orders的Reducer
    let { type, payload } = action;
    switch (type) {
      case "ORDERS/INCRMENT_B":                             //case '模块名/INCRMENT_B'
        state.a += payload;
        break;

      default:
        break;
    }
    return state;                                            //这一步很关键
  };
------------------------------将两个reducer合并到同一个仓库reducer中-------------------------
3- 将两个reducer合并到同一个仓库Reducer中

  let store = Redux.createStore(
    //两个仓库合并用到了新的方法
    Redux.combineReducers({                               //单词重要  combineReducers
      login: loginReducer,                                //合并规则  模块名: 定义的变量名                  
      orders: ordersReducer,
    })
  );


4-获取数据
store.getState().模块名.键
如：document.querySelector(".box1 h1 span").innerText = store.getState().login.a;

5-更新数据
  document.querySelector(".box1 button").onclick = () => {
    store.dispatch({
      type: "LOGIN/INCRMENT_A",                           //case中定义的方法名
      payload: 2,                                         //传递参数
    });
  };

6-监控数据变化:
store.subscribe(()=>{
    document.querySelector(".box1 h1 span").innerText =
      store.getState().login.a;  
}) 



脚下留心：
使用combineReduces 合并模块以后，
获取state中的数据 store.getState().模块名.键  一定一定要加模块名.
```

##React项目创建

```
npx create-react-app 项目名

react项目创建成功以后

首先入口文件为：src/index.js

需要导入
import React from "react";
import ReactDOM from "react-dom";
babel的话webpack前端自动化工具自动生成

里面可以导入封装的组件:
import App from "./App";

组件渲染:
ReactDOM.render(
  <React.StrictMode> //react 的严格模式
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

##框架中如何使用react-redux

```
react-redux通过：context解决层层传

【react-redux通过：高阶组件将store里面的数据注入props中】

先写好静态布局，以及reducer的模块化，利用combineReducers定义好仓库
接下来利用react-redux解决层层传的问题

步骤：
首先需要先下载好模块：yarn add react-redux 

1-在src/index.js中 导入模块以及导入已经合并好的仓库store

import {Provider} from 'react-redux'
import store from './store'

用：<Provider>
     <App />
    </Provider>把标签包起来并传递数据store给carts

//渲染
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

2-在pages/carts/index.js中用connect取数据

导入模块：
import {connect} from 'react-redux'

//函数1
const mapStateToProps = (state) => {
  return {
    carts: state.carts.carts,    //会注入到当前组件的props上
                                 //通过this.props.carts.map然后就可以map遍历了
  };
};


import {postCartsIncrmentAction,postCartsDecrmentAction} from './store/actionCreator'
//函数2 主要用来更新数据以及发送异步请求等
const mapDispatchToProps = (dispatch) => {    //这里面写更新数据。
  return {
  
    incrment: (index) => {                    // 对象里面定义incrment 加方法。
      //   dispatch({});
      dispatch(postCartsIncrmentAction(index));
    },
    
    decrment: (index) => {                    // 对象里面定义decrment 减方法。
      //   dispatch({});
      dispatch(postCartsDecrmentAction(index));
    },
    
  };
};

导出并定义两个函数：
export default connect(mapStateToProps,mapDispatchToProps)(组件名)

```

##redux--immutable

```
明确：redux-immutable是基于immutable封装让你在redux中使用immutable
需求：将之前写的购物车手动深拷贝改为immutable深拷贝提升性能
使用方法：
步骤一：下载
yarn add immutable redux-immutable
步骤二：
// import {createStore, combineReducers} from 'redux' 改为
import {createStore} from 'redux'
import { combineReducers } from 'redux-immutable';

步骤三：在pages/carts/index.js中

```

##React-router路由

```
在react中路由使用流程:

1. 通过CRA方式创建项目  npx create-react-app 项目名
2. 安装路由            yarn add react-router-dom(最好不要用这个因为最新版本删除了Redirect和Switch等)
   可以用：yarn add react-router-dom@4.2.2
                      
3. 导入成员  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
4. 通过Link（a标签）声明跳转
5. 通过Route定义路径(path)&组件(component)
```

## 路线匹配Switch和精确匹配exact

```
使用方法：
步骤一：
*从react-router-dom中导入Switch
import {
    // 路由模式【必须】包着内容
    // es6 导入 通过as设置别名
    // BrowserRouter history
    // HashRouter    hash
    // BrowserRouter as Router,  // history路由模式
    HashRouter as Router,        // hash路由模式
    Route,   // 定义路径&对应组件
    Link,    // 声明式导航 在vue中通过该router-link
    Switch
  } from "react-router-dom";
  
  步骤二：
  *通过Switch将Route包起来，只匹配1个 
   <Switch>
     <Route path="/" exact component={Dy} />
     <Route path="/yy" component={Yy} />
     <Route path="/th" component={Th} />
     <Route path="/my">
         <My />
     </Route>
 </Switch>
 
 步骤三：
 *给 根组件 加 exact 属性从而达到精确匹配
 <Route path="/" exact component={Dy} exact />
 
```

##嵌套路由

```
#父组件
	路由模式Router
		Switch
			Route  path="/admin"  component 
			...
		/Switch
	/Router

#子组件
	
    Switch
        Route  path="/admin"  component 
        Route  path="/admin/a"  component 
        Route  path="/admin/b"  component 
        ...
    /Switch
```

##编程式导航以及路由参数获取

```
编程式导航：    this.props.history.push（路径）
获取参数，语法：this.props.match
```

##编程式导航

```
params传参（地址栏显示、刷新不丢失

定义组件路由：得通过冒号明确参数名 <Route path='/路径/:参数名' component={组件名}></Route>

编程时导航-方法1：this.props.history.push('/路径/'+'参数')  
编程时导航-方法2：this.props.history.push({pathname:'/路径/'+'参数'})

获取参数：this.props.match.params.参数名
```

```
query传参（地址不显示、刷新丢失

定义组件路由：无需配置 <Route path='/路径' component={组件名}></Route>

编程时导航：this.props.history.push({pathname:'/路径', query:{参数名:值,...}})

获取参数：this.props.location.query.参数名
```

##返回上级页面

```
this.props.history.go(-1/2数字)
```

#dva使用

##dva目录结构

![695669fd6ffc4278a8b621eb0b82b9c](D:\react项目总结图片\695669fd6ffc4278a8b621eb0b82b9c.png)

##创建dva脚手架

```
步骤1：安装脚手架dva-cli
npm i dva-cli -g
步骤2：验证是否安装成功
dva -v
```

##创建dva项目

```
步骤1：通过脚手架工具生成dva框架代码

dva new 项目名

步骤2：启动测试
cd dvashop
yarn start
或者
npm start
```

##创建login路由

```
步骤1：定义路由  src/router.js文件

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


步骤二：创建组件 src/routes目录下创建

import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>this is Login</h1>
            </div>
        )
    }
}

export default LoginPage
```

##Link声明式导航

![ecb6be9b07d4961b5dd49fbd38d8b91](D:\react项目总结图片\ecb6be9b07d4961b5dd49fbd38d8b91.png)

##编程式导航

![3cbda49dffd6d556264438c2151249c](D:\react项目总结图片\3cbda49dffd6d556264438c2151249c.png)

##dva切换路由模式

![1588920473780](D:\react项目总结图片\1588920473780.png)

实现

>步骤1：安装
>
>```
>yarn add history(有问题)
>
>用 npm i history -S
>```
>
>步骤2：修改入口文件 src/index.js
>
>```
>import {createBrowserHistory as createHistory} from 'history';
>const app = dva({
>  history: createHistory(),
>});
>```
>
>![0ac9ce3ca4fd9c9a75b93dafa1fbebc](D:\react项目总结图片\0ac9ce3ca4fd9c9a75b93dafa1fbebc.png)

##DVA模型reducers

### 定义reducers

需求：定义购物车路由，它的模型里面num:666

实现

>a.定义路由，创建组件
>
>![1588921176007](D:\react项目总结图片\1588921176007.png)
>
>![1588921187011](D:\react项目总结图片\1588921187011.png)
>
>b.定义模型
>
>![1588921285189](D:\react项目总结图片\1588921285189.png)
>
>c.激活模型
>
>![1588921476075](D:\react项目总结图片\1588921476075.png)

###使用reducers

直接使用connect高阶组件

原理：react-redux被dva封装  从这里面导出connect

代码

```
import React, { Component } from 'react'
import { connect } from 'dva';   // connect其实就是dva封装了react-redux里面的

class CartsPage extends Component {
    render() {
        return (
            <div>
                <h1>this is Carts</h1>

                <h1>购物车（ {this.props.num} ）</h1>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    console.log('在carts组件中打印状态树数据', state)
    return {
        num: state.carts.num
    }
}

// export default CartsPage
export default connect(mapStateToProps)(CartsPage)
```

###更新reducers

步骤1：修改模型在model/carts.js中

```
export default {
    
  // 同咱们之前VUE学习的模块化!!!
  // 一定要留心因为dispatch触发就是根据它
  // 命名空间
  namespace: 'carts',

  // 状态数据
  state: {
      num: 666
  },

  // action更新state
  reducers: {
    // 函数(state, action) {}  
    
    // 深拷贝
    setNum(state, action) {
      // 深拷贝
      let _state = JSON.parse(JSON.stringify(state))
      // 更新（默认的值+传递过来的值
      _state.num += action.payload
      // 返回
      return _state
    }
  },
}
```

步骤2：触发模型方法(在CartsPages.js页面组件中)

```
import React, { Component } from 'react'
import { connect } from 'dva';   // connect其实就是dva封装了react-redux里面的

class CartsPage extends Component {
    render() {
        return (
            <div>
                <h1>this is Carts</h1>

                <h1>购物车（ {this.props.num} ）</h1>

                <button onClick={()=>{
                    this.props.dispatch({
                        // 命名空间/reducers名字
                        type: 'carts/setNum',
                        payload: 1
                    })
                }}>更新+1</button>
//------------------------点击触发调用dispatch-------------------------------------------------
                <button onClick={()=>{
                    this.props.dispatch({
                        【// 命名空间/reducers名字】
                        type: 'carts/setNum',
                        payload: 2
                    })
                }}>更新+2</button>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    console.log('在carts组件中打印状态树数据', state)
    return {
        num: state.carts.num
    }
}

// export default CartsPage
export default connect(mapStateToProps)(CartsPage)
```

##DVA模型effects(异步请求)

###明确概念

>手册：<https://dvajs.com/knowledgemap/#effect>
>
>effects  异步处理
>
>put 用户触发action  （可以简单为咱们vuex中actions触发mutations  目的更新数据
>
>call  用于调用异步函数

###练习

effects    就是异步请求  拿到数据之后

通过 reducers来更新



1 触发effects   通过console.log输出就行

2 触发effects  更新num  （暂时不用异步请求

3 触发effects  异步请求（这是咱们最终想完成的需求





练习

接口<http://rap2.taobao.org:38080/app/mock/228183/api/v1/lb>   GET

>![1588924017870](D:\react项目总结图片\1588924017870.png)

![1588924055824](D:\react项目总结图片\1588924055824.png)

![1588924073570](D:\react项目总结图片\1588924073570.png)

![1588924087215](D:\react项目总结图片\1588924087215.png)

#Umi使用

##umi简介

cra  官方应用/项目框架

>```
>可扩展性很强、开发相对繁琐（因为路由、状态等都得自己安装模块&配置   已验证
>```

dva 1-数据流/状态解决方案，2-阿里应用框架（react-router、fetch

>```
>优先：数据流方便使用
>框架：路由依赖不方便
>```

umi 中文名乌米  阿里应用框架

>目的：加快项目开发，很多实战要用的功能都给你封装起来 直接用（举例路由封装就类似咱们移动项目
>
>亮点：路由、性能、插件生态、全局loading、公共父layout等等

##umi脚手架安装

步骤1：安装

```
cnpm i -g  umi@2.12.9
```

步骤2：验证

```
umi -v
```

##umi生成框架代码

步骤1：自己创建一个目录

步骤2：进入这个目录敲击如下命令







#cra方式中使用ant Design

#项目开发(初始化CV)

```
步骤1：创建react项目   npx create-react-app 项目名

步骤2：安装UI框架      yarn add antd@3.26.19

步骤3:使用组件
  3.1-在需要的页面中导入组件： 
      import { button } from 'antd'
  3.2-复制组件return中注意只能有一个根
      比如：
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>

步骤4：配置样式使用（ 样式按需加载antd ）

1-安装模块：
yarn add react-app-rewired customize-cra

2-更改配置文件package.json中的scripts  将里面的scripts改为 app-rewired
    "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test",
    +   "test": "react-app-rewired test",
    }

3-然后在项目根目录(src同级)创建一个 config-overrides.js 用于修改默认配置，里面写：
     module.exports = function override(config, env) {
       // do stuff with the webpack config...
       return config;
     };
     
4-使用babel-plugin-import
   4.1-安装模块：
      yarn add babel-plugin-import
   4.2-修改配置文件 config-overrides.js ：
      加入： const { override, fixBabelImports } = require('customize-cra');

      注释掉：//- module.exports = function override(config, env) {
             //-   // do stuff with the webpack config...
             //-   return config;
             //- };
      
      加入：module.exports = override(
             fixBabelImports('import', {
             libraryName: 'antd',
             libraryDirectory: 'es',
             style: 'css',
           }),
         );

 5-重新启动项目 yarn start 查看效果
   样式成功按需加载


优化：解决首屏加载过慢的问题
UI框架按需加载：利用babel-plugin-import
```

###写样式

```
<link rel="stylesheet" href="路径及文件名.css">							样式冲突会
<标签名 style={ {css属性名:属性值，....，css属性名n:属性值n} }></标签名>	   行内样式不会冲突
```

###解决 全局样式冲突问题

```
三种解决方案

Inline styling    行内样式
CSS Modules	      配置自动化打包工具是实现（下一周移动项目
styled components（推荐）可以支持 sass less语法
```

###styled Components的使用

```
步骤一：
安装模块

yarn add styled-components

步骤二：
项目中使用   在src目录下 新建 styled.js文件并将下述代码复制进去 【定义组件】

import styled from 'styled-components'

语法：
export const 组件名 = styled.标签名`
	CSS支持sass、less语法
`;

步骤三：
在需要的页面组件中：

1-导入styled.js文件：  import { 组件名 } from './styled'

2-在return中 写  <组件名>内容</组件名>  使用样式
```

###配置（国际化）

```
发现：分页组件内置显示英文
解决：通过国际化配置
实现：修改index.js（注：修改app.js也行）


实现步骤:

1-在index.js文件中 将原来的
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  修改为：
  
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  
2-在index.js中导入zhCN和ConfigProvider模块

import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

3-重新启动项目 yarn start
  yarn start

```

###安装：项目样式管理模块 styled-components

```
步骤1：安装yarn add styled-components

步骤2：将src目录，改为src2
```

步骤3：分别创建
src\static\reset.js文件,输入下述代码

```
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size:100%;
    font: inherit;
    vertical-align: baseline;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`;
```

src\index.js 加载App.js

```
// 导入库
import React from 'react';
import {render} from 'react-dom';

// 导入组件
import App from './App';

// 渲染
render(<App />, document.getElementById('root'));
```

src\App.js（别忘了国际化）

```
// 导入库
import React, { Component } from 'react'

// 导入样式
import { GlobalStyle } from './static/reset';

// 导入UI组件
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';


// 定义组件
class App extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <GlobalStyle />
                hello，webopenfather
            </ConfigProvider>
        )
    }
}

export default App

```

最后：运行测试

#项目开发(路由)

###安装

```
yarn add react-router-dom
```

###确定目录结构

明确：因为react灵活性 所以不同公司架构会有区别，但本质上大同小异

架构：（无需操作理解就行）

```
src
	api   		 接口目录
	components   公共组件（或common   头部、弹框、后台导航、移动tabbar等）
	pages  		 组件目录
		orders   订单目录
			components（相关组件   订单有很多页面  它里面的公共组件）
			store     （仓库 -  实战中确实也有很多方案）
			index.js   (默认组件)
			style.js  （默认样式 import styled from 'styled-components';）
		....
		users  用户目录
		goods  商品目录
		login  登录目录
	router 路由
	static 静态文件
	store  全局状态（实战：1-所欲的reducer都在store目录下，2-在各自的目录中 推荐）
	utils  扩展库（日期格式化、状态过滤） index.js 说白了这里面封装方法，其他页面导入下import
	

情况1：就你一个人  就按照我这个架构来
情况2：老大-老项目 你就没机会选择 只能遵循贵使用   可能是之前联系的，也可能是咱们现在这个方案，或其他
情况3：老大-新项目 普遍老大就将之前的老项目复制一份 那你删除旧路由&组件 直接开发，让你重新创建
```

###路由开发

需求：登录、404路由、显示后台

代码 

步骤1：创建router\index.js输入下述代码（直接拷贝，看的懂会用就行）

```
// 导入库
import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// 导入组件
import Login from '../pages/login/index';
import Admin from '../pages/admin/index';
import Err404 from '../components/err/404';
import Err500 from '../components/err/500';

class ReactRouter extends Component
{
    render()
    {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin">
                        <Switch>
                        {/* 
                        备注：后期这里有很多很多路由
                        举例：订单路由、商品路由等
                        */}
                        <Route path="/admin" exact component={Admin}></Route>
                        </Switch>
                    </Route>
                    <Route path="/404" component={Err404}></Route>
                    <Route path="/500" component={Err500}></Route>
                    <Redirect to="/404" /> 
                </Switch> 
            </Router>
        )
    } 
}

export default ReactRouter;
```

步骤2：创建下述代码所需组件

pages/login/index.js
pages/admin/index.js
components/err/404.js
components/err/500.js

```
import React, { Component } from 'react'

 class 名称推荐同文件名 extends Component {
    render() {
        return (
            <div>
                this is 名称 index
            </div>
        )
    }
}

export default 组件名
```

步骤3：将router/index.js和项目关联起来（App.js）

```
// 导入库
import React, { Component } from 'react'

// 导入样式
import { GlobalStyle } from './static/reset';

// 导入UI组件
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// 导入路由
import Router from './router/index'

// 定义组件
class App extends Component 
{
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <GlobalStyle />
                {/* hello，webopenfather */}
                <Router />
            </ConfigProvider>
        )
    }
}

export default App
```

最终：启动测试

#项目开发（store)

```
步骤1：安装模块

yarn add redux react-redux redux-devtools-extension  redux-thunk  immutable redux-immutable
```

```
步骤2:定义仓库CV
```

a 复制仓库文件

![1587538969624](D:\react项目总结图片\1587538969624.png)

b 在index.js入口文件激活

```
// 导入库
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

// 导入组件
import App from './App';

// 导入状态
import store from './store/index'
![1587539009334](D:\react项目总结图片\1587539009334.png)
// 渲染
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

```
步骤3：准备后期使用仓库
```

![1587539009334](D:\react项目总结图片\1587539009334.png)

#项目开发（api）

```
直接复制之前的即可
```

#后台静态首页

##定义后台路由

后台欢迎页 admin

订单管理 orders

商品管理  goods

![1587543212784](D:\react项目总结图片\1587543212784.png)

![1587543237118](D:\react项目总结图片\1587543237118.png)

![1587543268903](D:\react项目总结图片\1587543268903.png)

##封装后台首页组件

>步骤1：去选择喜欢的后台首页组件
>
>![1587543924386](D:\react项目总结图片\1587543924386.png)

步骤2：创建src/component/frame/index.js 组件  粘贴上面的代码

步骤3：挖坑后期匹配的路由填坑

![1587543997961](D:\react项目总结图片\1587543997961.png)

步骤4：修改路由文件填坑

![1587544031992](D:\react项目总结图片\1587544031992.png)

![1587544031992](D:\react项目总结图片\1587544053707.png)

最终会匹配到路由对应的组件数据，刚好再Frame双标签中，因此会默认到this.props.children属性中

##头部优化

步骤1：制作logo 通过 <http://www.uugai.com/> 网址

步骤2：将图片放到项目static/img目录汇总

步骤3：修改components\frame\index.js 导入图片

![1587544902251](D:\react项目总结图片\1587544902251.png)

![1587544946028](D:\react项目总结图片\1587544946028.png)

![1587544973004](D:\react项目总结图片\1587544973004.png)

![1587545002149](D:\react项目总结图片\1587545002149.png)

##左侧导航优化

名字改对

图标

加Link标签

```
// 导入模块
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// 导入样式
import imgLogo from '../../static/img/logo.png'
import {
    FrameDiv
} from './style'

// 导入组件
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Frame extends Component 
{
    render() {
        return (
            <FrameDiv>
            <Layout>
            <Header className="header" style={{padding: '0px'}}>
                {/* <div className="logo" /> */}

                <img src={imgLogo} alt="logo" height="64" />

                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >

                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        后台首页
                        </span>
                    }
                    >
                    </SubMenu>


                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <span className="iconfont icon-shangpin"></span>
                        商品管理
                        </span>
                    }
                    >
                        <Menu.Item key="1"><Link to="/admin/goods">商品列表</Link></Menu.Item>
                        <Menu.Item key="2">商品添加</Menu.Item>
                    </SubMenu>

                     

                    <SubMenu
                    key="sub3"
                    title={ 
                        <span>
                        <span className="iconfont icon-order_icon"></span>
                        订单管理
                        </span>
                    }
                    >
                        <Menu.Item key="5"><Link to="/admin/orders">订单列表</Link></Menu.Item>
                        <Menu.Item key="6">订单添加</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    }}
                >
                    {/* 
                    Content
                    这块替换成后期每个路由对应的数据
                    children属性：相当于vue中的插槽
                    作用：将双标签中的内容放到props的children属性中
                    */}
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
            </Layout>
            </FrameDiv>
        )
    }
}

export default Frame
```





