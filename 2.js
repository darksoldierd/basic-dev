let result=0.0;
let str=``;
let str1=``;
let str3=``;
let str2=[`/`,`x`,`%`,`+`,`-`];
let c=``,k=0;
document.getElementById("num-9").onclick=function(){
    str+=9;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-8").onclick=function(){
    str+=8;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-7").onclick=function(){
    str+=7;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-6").onclick=function(){
    str+=6;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-5").onclick=function(){
    str+=5;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-4").onclick=function(){
    str+=4;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-3").onclick=function(){
    str+=3;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-2").onclick=function(){
    str+=2;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num-1").onclick=function(){
    str+=1;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("num").onclick=function(){
    str+=0;
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("clr").onclick=function(){
    str1=str.substring(0, str.length-1);
    str=``;
    str+=str1;
    str1=``;
    result=0;
    if(str.length>=1)
    document.getElementById("my-in/out").textContent=`${str}`;
    else
    document.getElementById("my-in/out").textContent=`${result}`;        
 }
document.getElementById("cls").onclick=function(){
    str=``;
    result=0;
    document.getElementById("my-in/out").textContent=`${result}`;
}
document.getElementById("op5").onclick=function(){
    c=str.substring(str.length-1);
    for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
     str+=`%`;
    
    document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("op4").onclick=function(){
    c=str.substring(str.length-1);
    for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
     str+=`/`;
     document.getElementById("my-in/out").textContent=`${str}`;
}
 document.getElementById("op3").onclick=function(){
     c=str.substring(str.length-1);
     for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
     str+=`x`;
     document.getElementById("my-in/out").textContent=`${str}`;
 }
document.getElementById("op2").onclick=function(){
     c=str.substring(str.length-1);
    for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
     str+=`-`;
     document.getElementById("my-in/out").textContent=`${str}`;
}
document.getElementById("op1").onclick=function(){
    c=str.substring(str.length-1);
    for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
     str+=`+`;
     document.getElementById("my-in/out").textContent=`${str}`;
}

document.getElementById("op.").onclick=function(){
    c=str.substring(str.length-1);
    for(let i=0;i<5;i++)
     if(c==str2[i]){
        str1=str.substring(0,str.length-1);
        str=``;
        str+=str1;
        str1=``;
        break;
       }
       str+=`.`;
       document.getElementById("my-in/out").textContent=`${str}`;
}

document.getElementById("result").onclick = function () {
    if (str.trim().length === 0) {
        result = 0;
        document.getElementById("my-in/out").textContent = `${result}`;
        return;
    }
    try {
        let expr = str.replace(/x/g, '*');
        expr = expr.replace(/\)\%/g, ')*0.01');
        expr = expr.replace(/(\d+(\.\d+)?)%/g, '($1*0.01)');
        if (!/^[0-9+\-*/().\s]*$/.test(expr)) {
            document.getElementById("my-in/out").textContent = "Error";
            return;
        }
        let opens = (expr.match(/\(/g) || []).length;
        let closes = (expr.match(/\)/g) || []).length;
        if (opens !== closes) {
            document.getElementById("my-in/out").textContent = "Error";
            return;
        }
        let evaluated = Function('"use strict"; return (' + expr + ')')();
        if (typeof evaluated === 'number' && isFinite(evaluated)) {
            result = evaluated;
            str = '' + result;
            document.getElementById("my-in/out").textContent = `${result}`;
        } else {
            document.getElementById("my-in/out").textContent = "Error";
        }
    } catch (e) {
        document.getElementById("my-in/out").textContent = "Error";
    }
};

// document.getElementById("result").onclick=function(){
//      for(let j=0;j<str.length;j++){
//         c=str.charAt(j);
//         for(let i=0;i<5;i++)
//          if(c===str2[i]){
//            str1=str.substring(0,j);
//            str3=str.substring(j+1);
//            k=i;
//            break;
//           }
//         }
// document.getElementById("my-in/out").textContent=`${str2[k]}`;
// if(k===0)
//     result=Number(str1)/Number(str3);
// if(k===1)
//     result=Number(str1)*Number(str3);
// if(k===2)
//     result=(Number(str1)*Number(str3))*0.01;
// if(k===3)
//     result=Number(str1)+Number(str3);
// if(k===4)
//     result=Number(str1)-Number(str3);

//     str="";
//     str+=result;
//     document.getElementById("my-in/out").textContent=`${result}`;
// }