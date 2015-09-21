<?php
require 'detect.php';

$servername = "localhost";
$username = "albacorp_test";
$password = "oL38HSZ^WRs4";
$dbname = "albacorp_app_facebook";

$conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

        $items = json_decode($_POST['registro']);
        $seleccion_positiva = implode(",", $items->positivas);
        $seleccion_negativa = implode(",", $items->negativas);
        $nombre=$items->nombre;
        $genero=$items->genero;
        $email=$items->email;
        $nacimiento=$items->nacimiento;
        $ubicacion=$items->ubicacion;
        $seleccion_positiva=$seleccion_positiva;
        $seleccion_negativa=$seleccion_negativa;
        date_default_timezone_set('America/Bogota');
        $fecha_registro = date("Y-m-d H:i:s");
        
        $direccion_ip=$_SERVER['REMOTE_ADDR'];
        $navegador1= $_SERVER["HTTP_USER_AGENT"];




$sql = "INSERT INTO registros_usuarios  VALUES (NULL,'$nombre','$email','$genero','$nacimiento','$ubicacion','$seleccion_positiva','$seleccion_negativa','$fecha_registro','$direccion_ip','$navegador1')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo registro creado";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
?>

