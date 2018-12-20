<?php
header("content-type:text/html;charset=utf-8");
$tel = $_GET["tel"];
$pwd = $_GET["pwd"];
mysql_connect("127.0.0.1","root","root");
mysql_select_db("dzdp");
mysql_query("set names utf8");
$spl = "select * from `user` where tel='$tel'";
$res = mysql_query($spl);
$arr=mysql_fetch_assoc($res);
if($arr){
   if($pwd==$arr["pwd"]){
        echo 1;
   }else{
        echo 2;
    }
}else{
    echo 0;
}
