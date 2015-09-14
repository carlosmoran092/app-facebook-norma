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

        // echo $items->nombre .',';
        // echo $items->genero . ',';
        // echo $items->email . ',';
        // echo $items->nacimiento . ',';
        // echo $items->ubicacion . ',';
        // echo $seleccion_positiva . ',';
        // echo $seleccion_negativa . ',';
        // echo '<br/>';
        $nombre=$items->nombre;
        $genero=$items->genero;
        $email=$items->email;
        $nacimiento=$items->nacimiento;
        $ubicacion=$items->ubicacion;
        $seleccion_positiva=$seleccion_positiva;
        $seleccion_negativa=$seleccion_negativa;

$sql = "INSERT INTO 'registros_usuarios' VALUES (NULL,'$nombre', '$genero', '$email','$nacimiento','$ubicacion','$seleccion_positiva','$seleccion_negativa')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

