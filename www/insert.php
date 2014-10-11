<?php
$server = "mysqltechteam.krk.org.in";
$username = "techteam15";
$password = "jaianddharmesh";
$database = "techteam";
 
$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);
$name = mysql_real_escape_string($_POST["name"]);
$qrcode = mysql_real_escape_string($_POST["qrcode"]);
 
$sql = "INSERT INTO qrcode (name, qrcode) ";
$sql .= "VALUES ('$name', '$qrcode')";
 
if (!mysql_query($sql, $con)) {
    die('Error: ' . mysql_error());
} else {
    echo "Comment added";
}
mysql_close($con);
echo('Added Successfully');
?>