# 大屏可视化

## 技术栈

```
vue 中如何写大屏即智能大屏适配

1-下载模块:

cnpm install amfe-flexible -S

2-安装插件 cssrem(此插件会自动将px转换成rem为单位)
```

> 【注】
>
> （1）amfe-flexible模块是根据1920宽度的设计稿来的，也就是说默认1rem=192px
>
> （2）cssrem里面的拓展设置中的根元素字体font-size要设置为192px
>
> （3）此时才可以保证和设计稿1：1还原，比如此时设计稿某元素的宽度为80px,则我们可以直接在vue文件中写80px然后自动转换成rem并且随着屏幕宽度不同也让会自动适配

### Echarts-介绍

常见的数据可视化

- D3.js  目前web端评价最高的javascript可视化工具库(入手难)
- Echarts.js 百度云出品的一个开源Javascript 数据可视化库
- Heightcharts.js 国外的前端数据可视化库，非商用免费，许多国外大公司使用
- AntV 蚂蚁金服新一代数据可视化解决方案 等等
- Heighcharts和Echarts就像是office和wps的关系

>是一个js插件
>
>性能好可流畅运行PC与移动设备
>
>兼容主流浏览器
>
>提供很多常用图标，且可定制

###Echarts使用五部曲

步骤一:

```
下载插件,或用CDN引入echarts
```

步骤二：准备一个具有大小的DOM容器

```
<div id="main" style="width:600px;height:400px;"></div>
```

步骤三：初始化echarts实例化对象

```
let myChart = echarts.init(document.getElementById('main'))
```

步骤四：指定配置项和数据(option)

```
let option = {}
```

步骤五：将配置项设置给echarts实例对象

```
myChart.setOption(option)
```

步骤六：Echarts图标自适应屏幕宽度

```
window.addEventListener('resize',()=>{
  mychart.resize()
})
```

### Echarts-基础配置

>需要了解的主要配置：series  xAxis  yAxis  grid  tooltip  title  legend  color

- series
  - 系列列表，每个系列通过type 决定自己图表的类型
- xAxis：直角坐标系 grid 中的x轴
  - boundaryGap：坐标轴两边留白策略 true ,这时刻度线只是作为分割线，

标签和数据点都会在两个刻度之间的带(band)中间。

- yAxis：直角坐标系 grid 中的y轴
- grid：直角坐标系内绘制网格
- title：标题组件
- toolbox：工具箱组件 可以另存为图片等功能
- tooltip：提示框组件
- legend：图例组件
- color：是一个数组，可以调整折线或者柱状图的颜色
- stack：数据堆叠，同个类目轴上系列配置相同stack值后，后一个系列的值会在前一个系列的值上相加。

###柱状图图表（两大步骤）

- 官网找到类似的图例，适当分析，并且引入到HTML页面中
- 根据需求定制图表

1.引入到html页面中

2.根据需求定制图表

- 修改图表柱形颜色 #2f89cf
- 修改图标大小top 为 10px  bottom 为 4%   grid决定我们柱状图的大小

```
color:['#2f89cf'], //数组中一个值修改相同颜色，数组中多个值修改不同颜色
grid:{
left:'3%',
top:'10%',
right:'0%',
bottom:'4%',
containLabel:true  //是否显示图表标签
}
```

- X轴相关设置 xAxis
  - 文本颜色设置为 rgba(255,255,255,.6)  字体大小为 12px
  - X轴线的样式  不显示

```
//设置x轴标签文字样式
//x轴文字颜色和大小 (y轴同样如此)
	axisLabel:{
	color:'rgba(255,255,255,.6)'
	font-size:'12px'
}

//x轴样式不显示
axisLine:{
show:false
//如果想要单独设置线条样式
//lineStyle:{
//  color:'rgba(255,255,255,.1)'
//  width:1,
//  type:'solid'
	}
}
```

- y轴相关配置
  - 文本颜色设置为 rgba(255,255,255,.1)  字体放大小为12px 
  - Y轴线条样式 更改为 1像素 的rgba(255,255,255,.1)边框
  - 分割线的颜色修饰为 1像素  的rgba(255,255,255,.1) 

```
//y轴文字标签样式

axisLabel:{
color:'rgba(255,255,255,.6)'
fontSize:'12'
}

//y轴线条样式
axisLine:{
    //y轴线条不显示
    //show:false,
    
	lineStyle:{
	color:'rgba(255,255,255,.1)'
	//width:1，
	//type:'solid'
	}
}

//y轴分割线样式
splitLine:{
	lineStyle:{
        color:'rgba(255,255,255,.1)',
	}
}
```

- 修改柱形为圆角以及柱子宽度   series 里面设置

```
series:{
    name:'图例说明',  
    type:'bar',
    //修改柱子宽度
    barWidth:'35%',
    data:[10,52,200,124.390,330,220],
    itemStyle:{
      //修改柱子圆角
      barBorderRedius:5
    }
}

【注】
其中series里面的name属性，当series里面有name属性时，legend里面的data属性可以不
```

- 修改提示框组件的触发方式   以及触发后显示的样式

```
tooltip:{
  //触发方式
  trigger:'axis',
  axisPointer:{
   //坐标轴指示器，坐标轴触发有效
   type:'shadow' //默认为直线，可选为'line/shadow' 
  } 
}
```

- 让图表跟随屏幕自动的去适应

```
window.addEventListener('resize',function(){
    myChart.resize();
})

```



###柱状图2定制

需求1：修改图形大小 grid

```
//图表位置
grid:{
	top:'10%',
	left:'25%',
	bottom:'10%'
}
```

需求2：不显示x轴

```
xAxis：{
show:false
}
```

需求3：y轴相关配置

- 不显示y轴线和相关刻度

```
//不显示y轴线条
axisLine:{
show:false
},

//不显示刻度
axisTick:{
show:false
}
```

- y轴文字(刻度标签)颜色设置为白色

```
axisLabel:{
	color:'#fff'
}
```

需求4：修改第一组柱子相关样式（条状）

```
series:{
	name:'条'
	//柱子之间的距离
	barCategoryGap:50,
	//柱子的宽度
	barWidth:10,
	//柱子设为圆角
	itemStyle:{
		barBorderRadius:20
	}
}
```

- 设置第一组柱子内百分比显示数据

```
//图形上的文本标签
label:{
  normal:{
	show:true,
	//图形内显示
	position:'inside',
	//文字的显示格式  百分比显示
	formatter:'{c}%'  
	}    
}
```

- 设置第一组柱子不同颜色

```
//声明颜色数组
var myColor = ['#1089E7','#F57474','#56D0E3','#F8B448','#8B78F6']
//给itemStyle里面的color属性设置 一个返回值函数
itemStyle：{
  normal:{
	barBorderRadius:20,
	//其中params代表的是每个柱子对象
	color:function(params){ 
	return myColor[params.dataIndex];
		}
	}      
}
```

- 需求5：修改第二组柱子的相关配置（框状）

```
name:'框',
type:'bar',
barCategoryGap:50,
barWidth:15,
itemStyle:{
   color:'none',
   borderColor:'#00c1de',
   borderWidth:3,
   barBorderRadius:15 
},
```

- 需求6：给y轴添加第二组数据

```
yAxis:[
	{
		type:'category'
		data:['印尼','美国','印度','中国','世界人口(万)'],
		//不显示y轴的线
		axisLine:{
			show:false
		},
		//不显示刻度
		axisTick:{
       	show:false   
		},
		//把刻度标签的文字颜色设置为白色
		axisLabel:{
        	color:'#fff'
		}
	},
	{
      show:true,
      data:[702,350,610,793,664],
       //不显示y轴的线
      axisLine:{
         show:false  
		},
		//不显示刻度
		axisTick:{
			show:false
		},
		//刻度标签 可以设置字体，以及字体大小，字体颜色等
		axisLabel:{
          textStyle:{
			fontSize:12,
			color:'#fff'
			} 
		} 
	}
]
```

- 需求7：设置两组柱子层叠以及更换数据

```
//给series 第一个对象里面的 添加
yAxisIndex:0,  (因为本例中柱形图是横着的,所以用的yAxisIndex,如果是竖着的柱形图则用xAxisIndex即可)
//给series 第二个对象里面的 添加
yAxisIndex:1,  (因为本例中柱形图是横着的,所以用的yAxisIndex,如果是竖着的柱形图则用xAxisIndex即可)

总结：以上就相当于定位中的z-index,提高层级，如上设置相当于第二个柱子会压住第一个柱子。

//series第一个对象里面的data 
data:[70,34,60,78,69],
//series 第二个对象里面的data
data:[100,100,100,100,100],
//y轴更换第一个对象更换data数据
data:['HTML5','CSS3','javascript','VUE','NODE'],
//y轴更换i二哥对象更换data数据
data:[702,350,610,793,664]
```

【注】：yAxis里面有一个inverse属性，可以实现刻度标签的翻转，boolen类型。

默认是：false,需要时改为true即可。

###折线图1 人员变化模块制作

- 官网找到类似的实例，适当分析，并且引入到HTML页面中
- 根据需求定制图表

需求1：修改折线图大小，显示边框设置颜色：#012f4a，并且显示刻度标签。

```
//设置网格样式
grid:{
   top:'20%' ,
   left:'3%',
   right:'4%',
   bottom:'3%',
   show:true, //显示网格线最外层边框
   borderColor:'#012f4a', //设置边框颜色
   containLabel:true //包含刻度文字在内
}
```

- 需求2：修改 图例组件 中的文字颜色#4c9bfb，距离右侧right为10%

```
//图例组件
legend:{
    textStyle:{ // 文字样式
        color:'#4c9bfd'//图例文字颜色
    }，
    right:'10%' //距离右边10%
}
```

- 需求3：x轴相关配置
  - 刻度去除
  - x轴刻度标签字体颜色：#4c9bfd
  - 提出x轴坐标轴线颜色（将来使用Y轴分割线）
  - 轴两端是不需要内间距boundaryGap

```
xAxis:{
    type:'category',
    data:['周一','周二']，
    axisTick:{
        show:false   //去除刻度线
    }，
    axisLabel:{
		color:'#4c9bfd' //文本颜色
	}，
	axisLine:{
        show:false    //去除坐标轴轴线
	}，
	boundaryGap:false  //去除内间距 
}
```

- 需求4：y轴的定制

  - 刻度去除
  - 字体颜色：#4c9bfd
  - 分割线颜色：#012f4a

  ```
  yAxis:{
    type:'value',
    axisTick:{
        show:false       //去除刻度
    }，
    axisLabel:{
  	  color:'#4c9bfd'  //文字颜色（刻度标签颜色）
    }，
    splitLine:{
        lineStyle:{
        	color:'#012f4a'  //分割线颜色
  	}
    }
  }
  ```

  - 需求5：两条线形图定制
    - 颜色分别为：#00f2f1   #ed3f35
    - 把折线图修饰为圆滑 series 数据中添加 smooth 为 true

  ```
  color：['#00f2f1','#ed3f35'],

  series:[{
      name:'新增粉丝'，
      data:['820','932','901','934','1290','1320'],
      type:'line',
      smooth:true  // 折线修饰为圆滑
      },{
      name:'新增游客'，
      data:['100','331','200','123','233','543'，400],
      type:'line',
      smooth:true  // 折线修饰为圆滑
  }]
  ```

  - 需求6：配置数据

  ```
  // X轴的文字
  xAxis:{
  	type:'category',
  	data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  }
  ```

  ```
  series:[{
      name:'新增粉丝'，
      data:['24','40','101','134','90','230','210','230','120','230','210','120'],
      type:'line',
      smooth:true  // 折线修饰为圆滑
      },{
      name:'新增游客'，
      data:['40','64','191','324',''290,330','310','213','180','200','180','79'],
      type:'line',
      smooth:true  // 折线修饰为圆滑
  }]
  ```

  需求7：新增需求  点击 2020年  2021年  数据发生变化 

  以下是后台送过来数据（ajax请求过来的）

  ```
  let yaerData = [
      {
          year:'2020', //年份
          data:[  //两个数组是因为有两条线
              [24,40,101,134,90,230,210,230,120,230,210,120],
              [40,64,191,324,290,330,310,213,180,200,180,79]
          ]
      },
      {
          year:'2021',  //年份
          data:[  //两个数组是因为有两条线
              [123,175,112,197,121,67,98,21,43,64,76,38],
              [143,64,191,324,290,330,310,213,180,200,180,79]
          ]
      }
  ]

  ```

  - tab栏切换事件
  - 点击2020按钮  需要把 series 第一个对象里面的data  换成  2020年对象里面的data[0]
  - 点击2020按钮  需要把  series 第二个对象里面的data  换成  2020年对象里面的data[1]
  - 2021 按钮同样道理

###折线图2   播放量模块制作

- 官网找到类似实例，适当分析，并且引入到HTML页面 中
- 根据需求定制图表

需求1：更换  图例组件   文字颜色 rgba(255,255,255,.5) 文字大小为12

```
legend:{
    top:'0%',
    textStyle:{
		color:'rgba(255,255,255,.5)',
		fontSize:'12'
	}
}

```

需求2：修改图表大小

```
grid:{
    left:'10',
    top:'30',
    right:'10',
    bottom:'10',
    containLabel:true
}
```

需求3：修改x轴相关配置

- 修改文本颜色为 rgba(255,255,255,.6) 文字大小为 12
- x轴线的颜色为  rgba(255,255,255,.2)

```
// 文本颜色为 rgba(255,255,255,.6) 文字大小为 12
axisLabel:{
	textStyle:{
        color:'rgba(255,255,255,.6)',
        fontSize:12
	}
},
// x轴轴线的颜色为  rgba(255,255,255,.2)
axisLine:{
    lineStyle:{
        color:'rgba(255,255,255,.2)'
    }
}
```

需求4：修改y轴相关配置

```
axisTick:{   // 不显示刻度标签
	show:false
},
axisLine:{  
	lineStyle:{  // 修改轴线的颜色
		color:'rgba(255,255,255,.1)'
	}
},
axisLabel:{
	textStyle:{   //修改文本标签的颜色和字体大小
		color:'rgba(255,255,255,.6)',
		fontSize:12
	}
}，
splitLine:{
    lineStyle:{    //修改分割线的颜色
        color:'rgba(255,255,255,.1)'
    }
}
```

需求5：修改两个模块配置(注意在series 里面定制)

```
smooth:true,   //线条变光滑
lineStyle:{    //在series中通过lineStyle专门修改线的样式
    color:'#0184d5',
    width: 2
},

//填充区域
areaStyle:{
    //渐变色，只需要复制即可代码固定
    color:new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
        {
            offset:0,
            color:'rgba(1,132,213,.4)' //渐变色的起始颜色
        },{
            offset:0.8,
            color:'rgba(1,132,213,0.1)' //渐变色的结束颜色
        }
    ],
    false
    ),
    shadowColor:'rgba(0,0,0,0.1)'  // 添加阴影颜色
},
symbol:'circle',   // 设置拐点  小圆点
symbolSize: 5,    // 拐点大小
itemStyle:{      // 设置拐点颜色以及边框
    color:'#0184d5',
    borderColor:'rgba(211,220,107,.1)',
    borderWidth: 12
},
showSymbol:false  // 开不显示拐点，鼠标经过显示
```

需求6：更换数据

###饼形图 年龄分布模块制作

- 官网找到类似实例，适当分析，并且引入到HTML页面 中
- 根据需求定制图表

定制图标需求1：

- 修改  图例组件  在底部并且居中显示
- 每个小图标的宽度和高度修改为 10px
- 文字大小为12 颜色 rgba(255,255,255,.5)

```
legend:{
	bottom:'0%'    //距离底部为10%
	itemWidth:10,  //小图标的宽度
	itemHeight:10, //小图标的高度
	textStyle:{    //修改图例组件的文字样式
		color:'rgba(255,255,255,.5)',
		fontSize:'12'
	}
}
```

定制需求2：

- 修改水平居中 垂直居中
- 修改内圆半径 为 ['40%'，'60%']   带有直角坐标系的比如折线图柱状图 是grid修改图形大小，而我们的饼形图 通过 radius 修改

```
series:[
    {
        name:'年龄分布'，
        type:'pie',
        center:['50%','50%'],  //修改饼形图在容器中的位置水平居中 垂直居中
        radius:['40%','60%'], // 修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的，用来修改饼图大小
        label:{show:false},  // 不显示图形上的文字
        labelLine:{show:false}  // 链接文字和图形的线是否显示    
    }
]
```

需求定制3：更换数据

```
//legend 中的data 可省略
data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
//series中的数据
data:[
    {value:1,name:'0岁以下'},
    {value:4,name:'20-29岁'},
    {value:2,name:'30-39岁'},
    {value:2,name:'40-49岁'},
    {value:1,name:'50岁以上'}
],
```

需求定制4：更换颜色

```
color:[
    '#065aab',
    '#066eab',
    '#0682ab',
    '#0696ab',
    '#06a0ab',
]
```

```
//让图标跟随屏幕自动的去适应
window.addEventListener('resize',function(){
    myChart.resize();
})
```

###饼形图2 地区分布模块制作（南丁格尔玫瑰图）

- 官网找到类似实例，适当分析，并且引入到HTML页面 中
- 根据需求定制图表

第二步：按照需求定制

- 需求1：颜色设置

```
color:['#006cff','#60cda0','#cd8884','#ff9f7f','#0096ff','#9fe6b8','#32c5e9','#1d9dff'],
```

- 需求2：修改饼形图大小（series对象）

```
redius:['10%','70%'],
```

- 需求3：把饼形图的显示模式改为 半径模式

```
roseType:'radius',
```

- 需求4：数据使用更换（series对象 里面 data对象）

```
{value:20,name:'云南'},
{value:26,name:'北京'},
{value:24,name:'山东'},
{value:25,name:'河北'},
{value:20,name:'江苏'},
{value:25,name:'浙江'},
{value:30,name:'四川'},
{value:42,name:'湖北'},
```

- 需求5：字体略小写 10px (series对象里面设置)

  饼图图形上的文本标签可以控制饼形图的文字的一些样式。 label对象设置

```
series:[
    {
        name:'半径模式',
        type:'pie',
        radius:[30,110],
        center:['50%','50%'],
        roseType:'radius',
        label:{
            fontSize:10  // 文本标签控制饼形图文字的相关样式，注意它是一个对象
        }
    }
]
```

- 需求6：防止缩放的时候，引导线过长。引导线略短些（series对象里面的 labelLine 对象设置）
  - 链接图表 6px
  - 链接文字 8px

```
label:{
	fontSize:10
},
labelLine:{
    length:6, //链接扇形图线长
    length2:8  //链接文字线长
}
```

需求7：浏览器缩放的时候，图表自动适配

```
//监听浏览器缩放，图标对象调用缩放resize函数
window.addEventListener('resize',function(){
	myChart.resize();
})
```

###Echarts-社区介绍

>社区就是一些，活跃的一些echarts使用者，交流和贡献定制好的图表的地方

哪里找：

```
打开echarts官网---->找到【资源】--->点击【更多资源】--->点击Gallery就可以找到
https://www.makeapie.com/explore.html
```

##中国地图模拟飞行模块

###Echarts-map使用（扩展）

参考社区的例子：https://gallery.echartsjs.com/editor.html?c=x0-ExSkZDM（模拟飞机航线）

实现步骤：

- 第一步需要下载china.js提供中国地图的js文件
- 第二因为里面代码比较多，我们建一个新的js文件myMap.js引入
- 使用社区提供的配置即可

需要修改：

- 去掉图例组件和标题组件
- 去掉背景颜色
- 修改地图省份背景 #142957
- 地图放大通过 zoom  设置为1.2即可

```
geo:{
    map:'china',
    zoom:1.2,     // 地图放大通过 zoom  设置为1.2即可
    label:{
        emphasis:{
            show:false
        }
    },
    roam:false,
    itemStyle:{
        normal:{
            areaColor:'#142957',  // 修改地图省份背景 #142957
            borderColor:'0692a4'
        },
        emphasis:{
            areaColor:'#0b1c2d'
        }
    }
}
```

- 约束缩放（因为是大屏所以不能缩的太小，太小就看不到了）

```
//约束屏幕尺寸
@media screen and (max-width: 1024px) {   //本案例是吧屏幕分成了24等份，
  html {
    font-size: 42px !important;   //故当屏幕为1024宽时 1rem=42px 
  }
}
@media screen and (min-width: 1920) {   //故当屏幕为1920宽时 1rem=80px
  html {
    font-size: 80px !important;
  }
}
```











