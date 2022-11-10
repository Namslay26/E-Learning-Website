<?php
    $exists=false;
    $data = json_decode(file_get_contents("php://input"));
    
    include 'dbconnect.php';

    $email=$data->email;
    $password=$data->pass;
    $status;

	$sql = "Select * from register where Email='$email'";
	
	$result = mysqli_query($conn, $sql);
	
	$num = mysqli_num_rows($result);
	
	if($num) {
		if($exists==false) {
	
            $row=mysqli_fetch_array($result);
			if($password==$row['Password']) {
				$status = "success";
                header( "Content-type: application/json" );
                $jsonAnswer = array('status' => $status,'email' => $email);
                echo json_encode($jsonAnswer);
			}
            else
            {
                $status="wrongPwd";
                header( "Content-type: application/json" );
                $jsonAnswer = array('status' => $status,'email' => $email);
                echo json_encode($jsonAnswer);
            }	
		}
	}
    else
    {
        $status="noUser";
        $jsonAnswer = array('status' => $status,'email' => $email);
        echo json_encode($jsonAnswer);
    }
?>