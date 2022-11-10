<?php
    $exists=false;
    $data = json_decode(file_get_contents("php://input"));
    
    include 'dbconnect.php';

    $email=$data->email;

	$sql1 = "Select * from register where Email='$email'";
    $sql2 = "Select * from userInfo where Email='$email'";
	
	$result1 = mysqli_query($conn, $sql1);
    $result2 = mysqli_query($conn, $sql2);
	
	$num = mysqli_num_rows($result1);
	
	if($num) {
		if($exists==false) {
            $row1 = mysqli_fetch_array($result1);
            $row2 = mysqli_fetch_array($result2);

            $name=$row1['UserName'];
            $phone=$row1['Phone'];
            $clg=$row1['CollegeName'];
            $deg=$row1['DegreeName'];
            $reg=$row2['coursesRegistered'];
            $comp=$row2['CoursesCompleted'];

            header( "Content-type: application/json" );
            $jsonAnswer = array('name' => $name,'phone' => $phone,'clg' => $clg,'deg' => $deg,"reg" => $reg,'comp' => $comp);
            echo json_encode($jsonAnswer);
		}	
	}
	
// if($num>0)
// {
//     $status="userExists";
// 	$exists="Username not available";
//     header( "Content-type: application/json" );
//     $jsonAnswer = array('status' => $status,'email' => $email,'name' => $name,'phone' => $phone,'clg' => $clg,'deg' => $deg);
//     echo json_encode($jsonAnswer);
// }   
?>