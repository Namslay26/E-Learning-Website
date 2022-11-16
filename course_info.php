<?php
    $exists=false;
    $data = json_decode(file_get_contents("php://input"));
    
    include 'dbconnect.php';

    $email=$data->email;
    $course=$data->name;
    
	$sql1 = "Select * from userInfo where Email='$email'";
	
	$result1 = mysqli_query($conn, $sql1);
    $row1=mysqli_fetch_array($result1);

    $str=$row1['coursesRegistered'];

	if(!str_contains($str,$course)) {
		if($exists==false) {
            
            $str.=",$course";
            $sql2="update userInfo set coursesRegistered='$str' where email='$email'";
            mysqli_query($conn,$sql2);
            $status="success";

            header( "Content-type: application/json" );
            $jsonAnswer = array('status' => $status,'email' => $email,'courses' => $str);
            echo json_encode($jsonAnswer);
		}	
	}
	else{
        $status="fail";
        header( "Content-type: application/json" );
        $jsonAnswer = array('status' => $status,'email' => $email,'courses' => $str);
        echo json_encode($jsonAnswer);
    }
?>