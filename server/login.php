<?php

if(isset($_GET['username']) && isset($_GET['password'])) {
	
require_once("../../../../config.php");
$usr = $_GET['username'];
$pass = $_GET['password'];

$con = mysqli_connect($server, $user, $password, $db);

$sql = "SELECT * FROM ".$db .".webjatko_user where username ='" . $usr . "' && password ='" . $pass . "';";


$res = mysqli_query($con, $sql);


while($data = mysqli_fetch_assoc($res))
{
$output[] = $data;
}

if($sql && $output != null) {
$return = array("state"=>1, "data"=>$output);

} else {
$return = array("state"=>-1, "data"=>$output);

}
echo json_encode($return);
}
?>