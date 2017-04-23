<?php
$pic    = $_POST['pic'];
$name   = $_POST['name'];
$sex    = $_POST['sex'];
$age    = $_POST['age'];
$ID     = $_POST['ID'];
$adr    = $_POST['adr'];
$level  = $_POST['level'];
$type   = $_POST['type'];
$more   = $_POST['more'];


 $mysqli = new mysqli('localhost','root','123456','dashu');

 $sql = 'insert into member(pic,name,sex,age,ID,adr,level,type,more,reg_time) values("'.$pic.'","'.$name.'","'.$sex.'","'.$age.'","'.$ID.'","'.$adr.'","'.$level.'","'.$type.'","'.$more.'",'.time().')';

 $mysqli->query($sql);

 header('location:http://localhost/section2/FBMS/会员管理.html');