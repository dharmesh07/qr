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
$json = json_decode($_GET['postData']);
$dbhandle = mysql_connect($host, $user, $pass);
$selected = mysql_select_db($db_name);
$sql = "INSERT INTO qrcode (event_type,event_name,round,place,participant_type,teamname,qr1,qr2,qr3,qr4,qr5) VALUES ('$json->event_type', '$json->event_name','$json->round','$json->place','$json->participant_type','$json->teamname','$json->qr1','$json->qr2','$json->qr3','$json->qr4','$json->qr5')";
mysql_query($sql);

$data = array('status' => $json );
echo ($callback ? $callback . '(' : '') . json_encode($data) . ($callback ? ')' : '');

}
catch(Exception $e)
{
echo $e;
}
?>