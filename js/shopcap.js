

$(function () {
    var arr = getCookie("shopList")
    var sum = "";
    var sum1 = "";
    for (var i = 0 ;i < arr.length; i ++){
        var cur = arr[i];
        // console.log(cur.id)
        var sum3 = parseInt(cur.count)*parseInt(cur.price);

        sum += `<ul pid="${cur.id}">
                <li><input type="checkbox" class="ck" name="c"></li>
                <li><img src="${cur.src}" alt=""></li>
                <li>品名:（${cur.name}）</li>
                <li>单价:（${cur.price}）</li>
                <li><span class="updateCount" data-number="-1">-</span><span class="shu">${cur.count}</span><span class="updateCount" data-number="1">+</span></li>
                <li class="my">￥${sum3}元</li>
                <li class="delBtn" shopid = "${cur.id}">删除</li>
            </ul>`
    }
    sum1 +=`<input type="checkbox" name="q"><i>全选</i><span>共<em class="count2"> 0 </em>件商品，合计<em class="money2"> 0  </em>   元</span>`
    $("main").html(sum);
    $("#quanxuan").html(sum1)
    /*------删除商品--------*/
    $(".delBtn").click(function(){
        console.log($(this).attr("shopid"))
        var pid = $(this).attr("shopid");
        console.log(pid);
        for(var i = 0 ; i < arr.length; i++){
            if(pid == arr[i].id){
                arr.splice(i,1);
                break;
            }
        }
        setCookie("shopList",JSON.stringify(arr))
        $(this).parent().remove();
    })

    /*-----修改商品数量----*/
    function jisuan(){

        var count = 0;
        var money = 0;

        $(".ck:checked").each(function(index,item){
            //window.location.reload();
//            console.log($(this).parents("ul").find(".my").html().split("￥")[1].split("元")[0]);
            money += parseInt($(this).parents("ul").find(".shu").html());
            count += parseInt($(this).parents("ul").find(".my").html().split("￥")[1].split("元")[0]);
            $(".count2").html(money);
            $(".money2").html(count);

        })
        if(count == 0){
            $(".count2").html(0);
            $(".money2").html(0);
        }
    }
    $(".ck").click(function(){
           jisuan()
    });
    /*======全选------*/
    $("input[name=q]").click(function(){
        if($(this).prop("checked")){
            $(".ck").prop("checked",true);
            jisuan()
        }else{
            $(".ck").prop("checked",false);
            jisuan();
        }
    })

    $(".updateCount").click(function(){
        var pid = $(this).parents("ul").attr("pid");
        var sign = $(this).data("number");
        var count = $(this).parents("ul").find(".shu").html();
        window.location.reload();
        if(sign == -1 && count == 1){
            return
        }
        for(var i = 0; i < arr.length; i++){
            if(pid == arr[i].id){
                arr[i].count+=sign;
                setCookie("shopList",JSON.stringify(arr));
                $(this).parent().find(".shop-count").html(arr[i].count);
                $(this).parent().next().html(arr[i].count * arr[i].price + "元");
                jisuan();
                break;
            }
        }
    })
























});