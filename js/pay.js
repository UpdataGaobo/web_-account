/**
*
* 功能：
**/
var li1 = document.getElementsByTagName("li")[2],
    li2 = document.getElementsByTagName("li")[3];
var btn = document.getElementsByClassName("button")[0];
function show(){
    var a = li1.getElementsByTagName("a")[0];
    a.textContent = sessionStorage.getItem('span');
    var b = li2.getElementsByTagName("b")[0];
    b.textContent = sessionStorage.getItem('num')+'￥';
}
show();