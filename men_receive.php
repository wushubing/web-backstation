<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$mysqlname = "dashu"; 
$json = '';
$data = array();
class People 
{
public $ID;
public $name;
public $sex;
public $age;
public $adr;
public $level;
public $type;
public $more;
public $pic;
}

$conn = mysqli_connect($servername, $username, $password, $mysqlname);

$sql = "SELECT * FROM member";
$result = $conn->query($sql);

if($result){
//echo "查询成功";
while ($row = mysqli_fetch_array($result,MYSQL_ASSOC))
{
$people = new People();
$people->id = $row["id"];
$people->name = $row["name"];
$people->sex = $row["sex"];
$people->age = $row["age"];
$people->adr = $row["adr"];
$people->level = $row["level"];
$people->type = $row["type"];
$people->more = $row["more"];
$people->pic = $row["pic"];
$data[]=$people;
}
$json = json_encode($data);//把数据转换为JSON数据.
echo "{".'"people"'.":".$json."}";
}else{
echo "查询失败";
}
