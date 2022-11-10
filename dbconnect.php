<?php
    $conn=mysqli_connect("localhost","root","","stcs");
    if(!$conn)
    {
        die("Connection Unsucessful. Error:".mysqli_error($conn));
    }
?>