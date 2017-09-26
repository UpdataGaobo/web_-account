/**
*
* 功能：输出当前需要转账的用户信息
*/
//获取div容器
var div = document.getElementsByTagName("div")[0];
//获取id容器
var span = div.getElementsByTagName("span")[0];
//获取图片容器
var img = div.getElementsByTagName("img")[0];
//获取输入框
var aside = document.getElementsByTagName("aside")[2];

window.onload = function(){
    //调用获取信息函数
    gain(); 
    //调用密码方法
    pass();
}
//调用计数函数
//countnumber();
////调用文本框焦点
//onfocr();

function gain(){
    span.textContent = sessionStorage.getItem("span");
    img.src = sessionStorage.getItem("img");
}

//function countnumber(){
//    //获取数字按钮
//    var btn = document.getElementsByClassName("btn")[0],
//        btn_num = btn.getElementsByTagName("button");
//    for(var i = 1; i<=btn_num.length - 1; i++){
//        var num = aside.getElementsByClassName("num")[0];
//        btn_num[i].onclick = function(){
//            if(typeof(Number(this.value)) === 'number'){
//                num.value += Number(this.value);
//            }
//            else{
//                num.value -= Number(this.value); 
//            }
//            //                        console.log(typeof(Number(this.value)));
//        }
//    }
//    //    var num = aside.getElementsByClassName("num")[0];
//    //    var xiaoshudian=document.getElementById("a");
//    //    xiaoshudian.onclick=function(){
//    //        my();    
//    //    }
//    //    function my(){
//    //        num.value += xiaoshudian.innerHTML;
//    //    }
//}

//function onfocr(){
//    //    var num = aside.getElementsByClassName("num")[0];
//    var close = document.getElementsByClassName("clole")[0],
//        btn = document.getElementsByClassName("btn")[0],
//        section = document.getElementsByTagName("section")[0];
//    num.onfocus = function(){    
//        btn.style.bottom = "0px";
//        section.style.top = "-72px";
//    } 
//    close.onclick = function(){
//        btn.style.bottom = "-235px";
//        section.style.top = "65px";
//    }
//}

function pass(){
    var getback = document.getElementsByTagName("a")[1];
    var paypass = document.getElementsByClassName("paypass")[0];
    var btn = document.getElementsByClassName("btn")[0];
    var section = document.getElementsByTagName("section")[0],
        but_pay = section.getElementsByTagName("button")[0];
    var face_c = document.getElementsByClassName("face_center")[0],
        span1 = face_c.getElementsByTagName("span")[0],
        span2 = face_c.getElementsByTagName("span")[1];
    var num = aside.getElementsByClassName("num")[0];
    var btn = document.getElementsByClassName("btn")[0],
        btn_num = btn.getElementsByTagName("button"); 
    var face_b = document.getElementsByClassName("face_bottom")[0],
        span_n = face_b.getElementsByTagName("span");
    //定义数组
    var payPass = [];
    //定义计数器
    var a = 0;
    //点击事件转账
    but_pay.onclick = function(){
        if(num.value == ""){
            alert("输入框不能为空");
        }else{
            paypass.style.display = "block";
            btn.style.bottom = "0px";
            btn.style.zIndex = "10";
            span1.textContent = sessionStorage.getItem('span');
            span2.textContent = num.value + "￥";
        }
    }
    //点击事件退出
    getback.onclick = function(){
        paypass.style.display = "none";
        btn.style.bottom = "-235px";
        btn.style.zIndex = "";
    }
    //输入密码框
    for(var i = 1; i <= btn_num.length - 3; i++){ 
        btn_num[i].onclick = function(){
            payPass.push(this.value);
            span_n[payPass.length - 1].innerHTML = "●";
            if(payPass.length == 6){
                if(payPass.join("") == "123456"){
                    sessionStorage.setItem("span",span.textContent);
                    sessionStorage.setItem("num",num.value);
                    location.href = '../html/trans.html';
                }else{
                    payPass = [];
                    for(var i = 0;i < span_n.length; i++){
                        span_n[i].innerHTML="";
                    }
                    alert("密码错误");
                }
            } 
        }
    }
    //添加0的方法
    btn_num[11].onclick = function(){
        if(a < 6){
            span_n[a].textContent = Number(btn_num[11].value);
            a++;
        }else{
            alert("没有0");
        }
    }
    //删除方法
    btn_num[12].onclick = function(){
        payPass.pop();
        span_n[payPass.length].innerHTML="";
    }
}