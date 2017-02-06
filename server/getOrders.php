<?php

require_once("../../../../config.php");


$con = mysqli_connect($server, $user, $password, $db);

$sql = "SELECT * FROM ".$db .".webjatko_orders;";


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

?>