<?php
require('connect.php');
if (isset($_POST['login']) && $_POST['login']=="Login"){
	
$query = mysql_query("Select * from login where uname='".$uname."' and pwd='".$pwd."' ");
}
else
{
	echo "Error";
	header('Location:about.html');
}


?>