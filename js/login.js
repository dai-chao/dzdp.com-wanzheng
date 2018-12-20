

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









    /*------------登录选项------------*/

    $("#loginList2").click(function () {
        $("#FORM2").css("display","block");
        $("#FORM1").css("display","none");
        $(this).css("border-bottom","3px solid #ff6342");
        $("#loginList1").css("border-bottom","3px solid #999999");
        $(this).css("color","black");
        $("#loginList1").css("color"," #999999");
    });
    $("#loginList1").click(function () {
        $("#FORM2").css("display","none");
        $("#FORM1").css("display","block");
        $(this).css("border-bottom","3px solid #ff6342");
        $("#loginList2").css("border-bottom","3px solid #999999");
        $(this).css("color","black");
        $("#loginList2").css("color"," #999999");
    })

 //   登录方式选择
    $("#PCcon").click(function () {
        $("#loginR").css("display","none");
        $("#phoneLogin").css("display","block")
    })
    $("#erwei").click(function () {
        $("#loginR").css("display","block");
        $("#phoneLogin").css("display","none")
    })

//登录正则
    var TELreg = /^1[34578]\d{9}$/;
    $(".loginBN").click(function () {
        if (TELreg.test($(".TEL").val())) {
            $("#hint").html("")
        } else {
            $("#hint").html("请输入正确手机号！")
        }
        if ($(".TEL").val() == "" ) {
            $("#hint").html("手机号不能为空")
        }
        if ($(".donttaima").val() == "") {
            $("#hint").html("验证码不能为空")
        }
        if(TELreg.test($(".TEL").val()) && $(".donttaima").val() == "1234"){
            window.location.href = "Dzdp.html"
            // $(".touxiang").src("../image/touxiang.jpg")
        }
    });


       /*------动态码*/
    $(".huoqu").click(function () {
        if( !TELreg.test($(".TEL").val())){
            $("#hint").html("风控效验异常！")
        }
        else if (TELreg.test($(".TEL").val()) && $(".donttaima").val() == ""){
            $("#hint").html("动态码已发送，请查看手机")
        }

    })

    /*-----------FORM2连接数据库登录--*/
    $(".loginBN2").click(function(){
        var tel = $("#phone2").val();
        var pwd = $("#DM2").val();
        console.log(tel,pwd);
        if(tel == "" || pwd == ""){
            return
        }
        $.ajax({
            type : "get",
            url : "../server/login.php",
            async : true,
            data : {"tel" : $('#phone2').val(),"pwd" : $('#DM2').val()},
            success : function(msg){
                if(msg == 1){
                    window.location.href="../html/Dzdp.html";
                }else{
                    //alert("失败")
                    if(confirm("密码错误，是否去注册？")){
                        window.location.href = "http://127.0.0.1/Dianping.com/html/register.html"
                    }else{
                        window.location.href = "http://127.0.0.1/Dianping.com/html/login.html"
                    }
                }
            }
        })
    });












    })











