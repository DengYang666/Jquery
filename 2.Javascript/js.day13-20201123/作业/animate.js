function animate(obj,space,funtime,callback){
   clearInterval(obj.intervalID);//把定时器的id存入对象. 对象始终只有一个同名属性,如果点击了多次,后面id会覆盖前面的id
   obj.intervalID=setInterval(function(){
        var left=obj.offsetLeft;//获取当前对象距左边的距离
        var speed=(space-left)/10;//动态计算速度
            //console.log('未取整的结果==>',speed);
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//速度要向上取整.   4.5  ==> 5  -4.5==>-4  -5
            left+=speed; //左边位移要加上速度
            ///console.log("距离左边的位移",left,"每次移动的位移:",speed);
        if(left==space){//如果位移达到了目标距离 就停止动画
            clearInterval(obj.intervalID);//清除定时器.
            callback&&callback();//如果callback参数有传入那就执行 短路就不执行.
        } 
        obj.style.left=left+"px";
    },funtime);
}