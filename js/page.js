$(function () {
    //导航栏//
    var navlist = $("nav>ul>li");
// console.log(navlist)
    for(var i=0;i<navlist.length;i++){
        $(navlist[i]).mouseenter(function(){
            //console.log($(this).find("i"));
            $(this).css("color","#ff6334");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi")
        });
        $(navlist[i]).mouseleave(function(){
            //console.log($(this).find("i"));
            $(this).css("color","black");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui")
        });
        $(navlist[2]).off("mouseleave");//第二个解绑事件
        $(navlist[3]).mouseenter(function () {
            $(this).find("ul").css("display","block");
        })
        $(navlist[3]).mouseleave(function () {
            $(this).find("ul").css("display","none");
        })
        $(navlist[4]).mouseenter(function () {

            $(this).find("ul").css("display","block");
        })
        $(navlist[4]).mouseleave(function () {
            $(this).find("ul").css("display","none");
        })
        $(navlist[5]).mouseenter(function () {

            $(this).find("ul").css("display","block");
        })
        $(navlist[5]).mouseleave(function () {
            $(this).find("ul").css("display","none");
        })
        $(navlist[6]).mouseenter(function () {

            $(this).children(".htNav").css("display","block");
        })
        $(navlist[6]).mouseleave(function () {
            $(this).children(".htNav").css("display","none");
        })

        ////////////////二维码显示隐藏
        $("#off").click(function () {
            $("#phdp").remove();
        })
    }

 //详情页//
    function addres(str){
        var reg = /([^?=&]+)=([^?=&]+)/g;
        var obj = {};

        str.replace(reg,function(){
            //console.log(arguments)

            obj[arguments[1]] = arguments[2];
        })
        return obj
    }

    var url = window.location.href;
    //console.log(url);
   var obj = addres(url);
   //console.log(obj)
    var pid = obj.id;
    //console.log(pid)
    $.ajax({
        type : "get",
        url : "../mock/page.json",
        cache : true,
        acync : true,
        success : function (res) {
            var arr = res.class;
            var str = "";
            for (var i = 0; i < arr.length; i ++){
                var cur = arr[i];
                if(cur.id == pid){
                    str += `<div id="data">
            <ul id="weizhi">
                <li>${cur.p1}  ></li>
                <li>${cur.p2}  ></li>
                <li>${cur.p3}  ></li>
                <li>${cur.dizhi}  ></li>
                <li>${cur.storeName}</li>
            </ul>
            <div class="clear"></div>
            <div id="dataL">
                <span>${cur.storeName}</span><i id="L1">手机买单  积分抵现</i>
                <div class="clear"></div>
                <img src="../image/1111111111.png" alt="" id="L2">
                <ul id="L3">
                    <li>${cur.dianping}  条评论</li>
                    <li>人均 ：${cur.jiage}元</li>
                    <li>口味：${cur.p4}</li>
                    <li>环境： ${cur.p5}</li>
                    <li>服务：${cur.p6}</li>
                </ul>
                <div class="clear"></div>
                <h5 id="L4"> 地址：${cur.dz}  </h5>
                <h5 id="L6">电话：${cur.tel}</h5>
                <ul id="L7">
                    <li>特色：</li>
                    <li>团</li>
                    <li>订</li>
                    <li>外</li>
                    <li>活</li>
                </ul>
                <div class="clear"></div>
                <a href="javascript:;" id="L8">更多信息 》</a>
                <div class="clear"></div>
                <a href="javascript:;" id="L9">加入购物车</a>
            </div>
            <div id="dataR">
                <img src="${cur.src}" alt="" id="r1">
                <ul id="r2">
                    <li class="t1"><</li>
                    <li class="li_img"><img src="../img/${cur.t1}.jpg" alt="" ></li>
                    <li class="li_img"><img src="../img/${cur.t2}.jpg" alt="" ></li>
                    <li class="li_img"><img src="../img/${cur.t3}.jpg" alt="" ></li>
                    <li class="li_img"><img src="../img/${cur.t4}.jpg" alt="" ></li>
                    <li class="t1">></li>
                </ul>
            </div>
        </div>`
                }
                $("#data_wrap").html(str);
            }
            var list = ($(".li_img"));
            for (var i = 0; i < list.length; i ++){
                $(list[i]).mouseover(function () {
                     $("#r1").attr("src",$(this).children().attr("src"));
                })
            }
        }
    });













































});