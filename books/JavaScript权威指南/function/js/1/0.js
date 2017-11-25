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