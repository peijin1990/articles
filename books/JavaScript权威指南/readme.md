### JavaScript权威指南

[权威指南--函数](function/readme.md)

> 第一部分（2-12）：涵盖了语言本身的特性以及少量的内置API
> 第二部分：讲解了JavaScript如何在Web浏览器中工作，并涵盖基于浏览器的API——这部分也称作“客户端JavaScript"
> 第三部分：核心API的参考手册
> 第四部分：客户端JavaScript参考手册

#### 第1章 JavaScript概述

- 语法源自Java
- 一等函数（first-class function）源自Scheme
- 基于原型（prototype-based）源自Self

#### 第2章 词法结构

1.javascript区分大小写，HTML不区分大小写
> 在html中，onclick属性可以写成onClick，但在javascript代码（或者XHTML文档）中，必须使用小写的onclick
2.对于无法显示或输入的unicode字符，可以使用6个ASCⅡ码代表任意16位unicode内码。
> 例如，字符é的unicode转义写法为\u00E9，如下两个javascript字符串是完全一样的
> "café"==="caf\u00e9" // =>true

#### 第3章 类型、值和变量

javaScript数据类型分为原始类型和对象类型
- 原始类型：数字，字符串，布尔值，null，undefined
- 每个构造
- 数组（Array）类，函数（Function）类，正则（RegExp）类，日期（Date）类，错误（Error）类
- javascript对象