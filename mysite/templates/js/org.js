window.onload = function() {
    var tabDiv = document.getElementsByClassName("tab")[0];
    delegateEvent(tabDiv,"a","click",tabSwich);
    delegateEvent(tabDiv,"a","mouseover",tabSwich);
    login();
}


var oldID = "dis_1";
function tabSwich() {
    var re = /^tab_(\w+)$/;
    var re_old = /^dis_(\w+)$/;
    if(re_old.test(oldID))
        old_tab = "tab_"+RegExp.$1;  //原来tab的id
    if(re.test(this.id))
       newID = "dis_"+RegExp.$1     //取得展示区的id
    document.getElementById(oldID).style.display = "none";    //清除原来活动对象
    document.getElementById(old_tab).className = "";
    document.getElementById(newID).style.display = "block";   //给当前活动对象设置样式
    document.getElementById(this.id).className = "on";
    oldID = newID;
}

function login() {
    var login_btn = document.getElementById("loginbox");
    EventUtil.addHandler(login_btn,"click",function(){
        var login_form = document.getElementById("login-form");
        if(login_form.style.display == "none" || login_form.style.display == ""){
            login_form.style.display = "block";
            login_btn.style.backgroundColor = "#e6e6e6";
        }
        else
            login_form.style.display = "none";
    });
}
//事件代理
function delegateEvent(element, tag, eventName, listener) {
    EventUtil.addHandler(element,eventName,function(event){
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()){
            listener.apply(target,event);
        }
    });
}