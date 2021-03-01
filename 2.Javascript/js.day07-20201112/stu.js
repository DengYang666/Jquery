//浅拷贝
function copy(obj){
    var newobj={};//创建了一个新的空对象
    for(var i in obj){//循环对象
        // console.log('循环的i==>',i);
        //console.log('循环属性的值==>',obj[i]);
        newobj[i]=obj[i];//取出obj对象的属性 赋值给newobj对象
    }
    return newobj;
}
//深拷贝.
function deepCopy(obj){
    var newobj={};//创建一个新的空对象
    for(var i in obj){
        var prop=obj[i];//拿出obj对象属性的值
        if(prop instanceof Object){//如果属性的值还是对象,那么递归复制 复制一份
            newobj[i]=deepCopy(prop);
        }else if(prop instanceof Array){//如果属性的值还是数组,那么递归复制一份
            newobj[i]=deepCopy(prop);
        }else{
            newobj[i]=prop;//复制对象属性的值
        }
    }
    return newobj;//返回新的对象
}