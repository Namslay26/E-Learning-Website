btn=document.getElementById("enr")
var email
var data

function enroll()
{
    email=window.localStorage.getItem("Email")
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(xhttp.responseText);
		showData();
    }};
	xhttp.open("POST", "course_info.php", true);
	xhttp.send(JSON.stringify({ email : email, name:"Javascript Beginner Course" }));
}

function showData() {
	console.log(data);
	if(data.status=="success")
	{
		alert("Course Enrolled Successfully!")
	}
	else if(data.status=="fail"){alert("You have already enrolled for the course")}
}

btn.addEventListener("click",enroll)