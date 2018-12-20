
$(function () {

    //导航栏//
    var navlist = $("nav>ul>li");
// console.log(navlist)
    for(var i=0;i<navlist.length;i++) {
        $(navlist[i]).mouseenter(function () {
            //console.log($(this).find("i"));
            $(this).css("color", "#ff6334");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi")
        });
        $(navlist[i]).mouseleave(function () {
            //console.log($(this).find("i"));
            $(this).css("color", "black");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui")
        });
        $(navlist[2]).off("mouseleave");//第二个解绑事件
        $(navlist[3]).mouseenter(function () {
            $(this).find("ul").css("display", "block");
        })
        $(navlist[3]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[4]).mouseenter(function () {

            $(this).find("ul").css("display", "block");
        })
        $(navlist[4]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[5]).mouseenter(function () {

            $(this).find("ul").css("display", "block");
        })
        $(navlist[5]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[6]).mouseenter(function () {

            $(this).children(".htNav").css("display", "block");
        })
        $(navlist[6]).mouseleave(function () {
            $(this).children(".htNav").css("display", "none");
        })
    }

   //正则验证注册
    var phonePut = $("#phonePut").val();
    var PASS = $("#PASS").val();
    var reg = /\d{11}/;
    $("#donttaimaBN").click(function(){
        if(reg.test($("#phonePut").val())){
            $("#regT").html('动态码已发送，请查看手机')
        }else{
            $("#regT").html('风控效验异常')
        }
    });
    $(".registerBN").click(function(){
        if($("#PASS").val() == ""){
            $("#regT").html('请输入密码')
        }
        /*-----注册录入数据库-----*/
        if($("#dongtaima").val() == "1234"){
            $.ajax({
                type : "get",
                url : "../server/register.php",
                async : true,
                data : {"tel" : $('#phonePut').val(),"pwd" : $('#PASS').val()},
                success : function(msg){
                     if(msg==0){
                         alert("用户名重复")
                         Window.location.href = "http://127.0.0.1/Dianping.com/html/register.html"
                     }else if(msg==1){
                         alert("成功");
                         window.location.href = "http://127.0.0.1/Dianping.com/html/login.html"
                     }else if(msg==2){
                         alert("失败")
                         Window.location.href = "http://127.0.0.1/Dianping.com/html/register.html"
                     }
                }
            })
        }
    })








});