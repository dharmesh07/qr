<?
header('Content-Type: "application/json"');
$host="localhost";
$user="root";
$pass="";
$db_name="test_live";

try
{
$dbhandle = mysql_connect($host, $user, $pass);
$selected = mysql_select_db($db_name);
$postdata = $_POST['postData'] ;
$reult = json_decode($postdata);
var_dump($result);
$sql = "INSERT INTO qrcode (name, qrcode) VALUES ('$event_type', '1234')";
$execute=mysql_query($sql);
return json_encode(array("status"=>true));
}
catch(Exception $e)
{
	echo $e;
}
?>