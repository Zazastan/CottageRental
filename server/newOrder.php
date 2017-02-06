<?php

if(isset($_GET['userId']) && isset($_GET['cottageId'])&& isset($_GET['startDate'])&& isset($_GET['endDate'])) {
	
require_once("../../../../config.php");
$userId = $_GET['userId'];
$cottageId = $_GET['cottageId'];
$startDate = $_GET['startDate'];
$endDate = $_GET['endDate'];

$con = mysqli_connect($server, $user, $password, $db);
$sql = "insert into ".$db .".webjatko_orders(userId, cottageId,startDate,endDate) values(" . $userId . "," . $cottageId . ",'" . $startDate ."','" . $endDate ."');";

//echo $sql;
$res = mysqli_query($con, $sql);


while($data = mysqli_fetch_assoc($res))
{
$output[] = $data;
}
//echo $output;


echo "OK";
}

?>