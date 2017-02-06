<?php

if(isset($_GET['username']) && isset($_GET['password'])) {
	
require_once("../../../../config.php");
$usr = $_GET['username'];
$pass = $_GET['password'];

$con = mysqli_connect($server, $user, $password, $db);
$sql = "SELECT * FROM ".$db .".webjatko_user where username ='" . $usr . "';";

$res = mysqli_query($con, $sql);


while($data = mysqli_fetch_assoc($res))
{
$output[] = $data;
}

if($sql && $output != null) {
	$return = array("state"=>-1, "data"=>"Käyttäjä olemassa");

} else {
	$sql = "insert into ".$db .".webjatko_user(username, password) values('" . $usr . "','" . $pass . "');";
	$res = mysqli_query($con, $sql);
	while($data = mysqli_fetch_assoc($res)){
		$output[] = $data;
	}
	
	$return = array("state"=>1, "data"=>"Käyttäjä luotu");	
	}
}
echo json_encode($return);;


?>