<?
header('Access-Control-Allow-Origin: *');
$host="mysqltechteam.krk.org.in";
$user="techteam15";
$pass="jaianddharmesh";
$db_name="techteam";

try
{
$callback = isset($_GET['callback']) ? preg_replace('/[^a-z0-9$_]/si', '', $_GET['callback']) : false;
header('Content-Type: ' . ($callback ? 'application/javascript' : 'application/json') . ';charset=UTF-8');

$dbhandle = mysql_connect($host, $user, $pass);
$selected = mysql_select_db($db_name);
$sql = "INSERT INTO qrcode (name, qrcode) VALUES ('dharmesh', '1234')";
$execute=mysql_query($sql);

$data = array('some_key' => 'some_value');
echo ($callback ? $callback . '(' : '') . json_encode($data) . ($callback ? ')' : '');

}
catch(Exception $e)
{
echo $e;
}
?>
