<?php
$servername = "localhost";
$username = "waltgc5_moran";
$password = "rock1992";
$dbname = "waltgc5_test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
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

$sql = "INSERT INTO registros_usuarios  VALUES (NULL,'$nombre','$email','$genero','$nacimiento','$ubicacion','$seleccion_positiva','$seleccion_negativa')";


if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

