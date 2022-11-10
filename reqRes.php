<?php
    $data = json_decode(file_get_contents("php://input"));
    $name  =  $data->name;
    header( "Content-type: application/json" );
    $jsonAnswer = array('name' => $name);
    echo json_encode($jsonAnswer);
?>