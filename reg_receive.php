<?php
 $username = $_POST['username'];
 $email    = $_POST['email'];
 $phone    = $_POST['phone'];
 $password = $_POST['password'];

 $mysqli = new mysqli('localhost','root','123456','dashu');

 $sql = 'insert into dashu(username,email,phone,password) values("'.$username.'","'.$email.'","'.$phone.'","'.$password.'")';

 $mysqli->query($sql);


 header('location:http://localhost/section2/FBMS/register.html');
 

