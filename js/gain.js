/**
*
* 功能：获取用户信息
*/
window.onload = function(){
    var ul = document.getElementsByTagName("ul")[0],
        li = ul.getElementsByTagName("li");
    for(var i = 0;i<=li.length;i++){
        li[i].onclick = function(){  
            //获取用户名称
            var span =this.getElementsByTagName("span")[0].textContent;
            //获取用户头像
            var img = this.getElementsByTagName("img")[0].src;
            //将获取到的图片和文字进行存储
            storageInfo(span,img,"./html/pay.html");
        }
    }
}
//存储方法
function storageInfo(name,head,siteurl){
    sessionStorage.setItem("span",name);
    sessionStorage.setItem("img",head);
    location.href = siteurl;
}