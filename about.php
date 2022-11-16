<?php
    $exists=false;
    $data = json_decode(file_get_contents("php://input"));
    include 'dbconnect.php';
    
    $email=$data->email;
    $name=$data->name;
    $phone=$data->phone;
    $edu=$data->edu;
    $dom=$data->dom;
    $status;

	$sql = "Select * from contact where Email='$email'";	
	$result = mysqli_query($conn, $sql);
	$num = mysqli_num_rows($result);
	
	if($num == 0) {
		if($exists==false) {
	

			$sql = "INSERT INTO `contact` ( `Name`, `Email`, `Phone`, 
            `Education`, `DomainInterest`) VALUES ('$name',
			'$email', '$phone', '$edu', '$dom')";
	
			$result = mysqli_query($conn, $sql);

			if ($result) {
				$status = "success";
                header( "Content-type: application/json" );
                $jsonAnswer = array('status' => $status,'email' => $email,'name' => $name,'phone' => $phone,'edu' => $edu,'dom' => $dom);
                echo json_encode($jsonAnswer);
			}
		}	
	}
	
if($num>0)
{
    $status="userExists";
	$exists="Username not available";
    header( "Content-type: application/json" );
    $jsonAnswer = array('status' => $status,'email' => $email,'name' => $name,'phone' => $phone,'edu' => $edu,'dom' => $dom);
    echo json_encode($jsonAnswer);
}   
?>