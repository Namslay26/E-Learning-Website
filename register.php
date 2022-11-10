<?php
    $exists=false;
    $data = json_decode(file_get_contents("php://input"));
    
    include 'dbconnect.php';

    $email=$data->email;
    $name=$data->name;
    $password=$data->pass;
    $phone=$data->phone;
    $clg=$data->clg;
    $deg=$data->deg;
    $status;

	$sql = "Select * from register where Email='$email'";
	
	$result = mysqli_query($conn, $sql);
	
	$num = mysqli_num_rows($result);
	
	if($num == 0) {
		if($exists==false) {
	

			$sql = "INSERT INTO `register` ( `UserName`,
				`Password`, `Email`, `Phone`, `CollegeName`, `DegreeName`) VALUES ('$name',
				'$password', '$email', '$phone', '$clg', '$deg')";
	
			$result = mysqli_query($conn, $sql);

			if ($result) {
				$status = "success";
                header( "Content-type: application/json" );
                $jsonAnswer = array('status' => $status,'email' => $email,'name' => $name,'phone' => $phone,'clg' => $clg,'deg' => $deg);
                echo json_encode($jsonAnswer);
			}
		}	
	}
	
if($num>0)
{
    $status="userExists";
	$exists="Username not available";
    header( "Content-type: application/json" );
    $jsonAnswer = array('status' => $status,'email' => $email,'name' => $name,'phone' => $phone,'clg' => $clg,'deg' => $deg);
    echo json_encode($jsonAnswer);
}   
?>