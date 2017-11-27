## 程序

### 第一章
1.求两个坐标点的距离
```
var points=[
    {x:1,y:1},
    {x:0,y:0}
];
points.dist=function(){
    var p1=this[0];
    var p2=this[1];
    var a=p1.x-p2.x;
    var b=p1.y-p2.y;
    return Math.sqrt(a*a+b*b);
};

//调用
points.dist();
```

2.求绝对值
```
function abs(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}
```

3.求阶乘
```
function factorial(n){
    var product=1;
    while(n>1){
        product*=n;
        n--;
    }
    return product;
}

function factorial2(n){
    var i,product=1;
    for(i=2;i<=n;i++){
        product*=i;
    }
    return product;
}
```

4.定义一个类来表示2D平面几何中的点。这个类实例化的对象拥有一个名为r()的方法，用来计算该点到原点的距离：
```
//定义一个构造函数以初始化一个新的Point对象
function Point(x,y){
    this.x=x;
    this.y=y;
}

//使用new关键字和构造函数来创建一个实例
var p = new Point(1,1);

//通过给构造函数的prototype对象赋值，来给Point对象定义方法
Point.prototype.r=function(){
    return Math.sqrt(this.x*this.x+this.y*this*y);
}

//Point的实例对象p(以及所有的Point实例对象)继承了方法r()
p.r();
```

5.如何查找和修改基本文档内容
```
function debug(msg){
    var log=document.getElementById("debuglog");

    if(!log){
        log=document.createElement("div");
        log.id="debuglog";
        log.innerHTML="<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }

    var pre=document.createElement("pre");
    var text=document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(msg);
}
```

6.隐藏元素（display或者visibility）
```
function hide(e,reflow){
    if(reflow){   //如果第二个参数是true
        e.style.display="none";
    }else{
        e.style.visibility="hidden";
    }
}
```

7.设置高亮显示
```
function highlight(e){
    if(!e.className){
        e.className="hilite";
    }else{
        e.className+=" hilite";
    }
}
```

8.jQuery实现案例5
```
function debug(msg){
    var log=$("#debuglog");
    if(log.length==0){
        log=$("<div id='debuglog'><h1>Debug Log</h1></div>");
        log.appendTo(document.body);
    }
    log.append($("<pre/>").text(msg));
}
```
