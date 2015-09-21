$host="tiendanorma.c6yhynbnhp56.us-west-2.rds.amazonaws.com";
$port=3306;
$socket="";
$user="normastore";
$password="";
$dbname="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();
