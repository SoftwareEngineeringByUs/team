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

/*轮播图*/
var slider_count=4;
$(".slider_p_div").hide();
$("#slider_p0").show();
$(".hi_btn").hide();
$("#hi_btn0").show();
$(".img_hover").animate({bottom:'10px'});
var slider_i=1;
var m_over=true;

function slider(){
    if(m_over){
        if(slider_i<0){slider_i=slider_count;}
        //p
        $(".slider_p_div").hide();
        $("#slider_p"+slider_i).show();
        //p end
        //hi_btn
        $(".hi_btn").hide();
        $("#hi_btn"+slider_i).show();
        //hi_btn end
        //btn
        $(".btnbox img").stop(true,true);
        $(".btnbox img").removeClass("img_hover");
        $(".btnbox img").animate({bottom:'0px'},200);
        $("#btn_img"+slider_i).addClass("img_hover");
        $("#btn_img"+slider_i).animate({bottom:'10px'},200);
        //btn end
        $(".imgbox").stop();
        $(".imgbox").animate({left:'-750'*slider_i+'px'});
        if(slider_i<slider_count){
            slider_i++; 
        }else{
            slider_i=0;
        }
    }
}

$(".lbtn").click(function(){
    m_over=true;
    if(slider_i==0){slider_i=slider_count-1}else{slider_i=slider_i-2;}
    slider();
    m_over=false;
});

$(".rbtn").click(function(){
    m_over=true;
    slider();
    m_over=false;
});

function btn_m_over(btn_i){
    if(slider_i-1!=btn_i){
        m_over=true;
        slider_i=btn_i;
        slider();
        m_over=false;
    }
}

zx_timer=setInterval("slider();",5000); 
$(".slider").mouseover(function(){
    m_over=false;
});
$(".slider").mouseout(function(){
    m_over=true;
});
/*轮播图end*/