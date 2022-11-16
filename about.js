sub=document.getElementById("submit")
var data

function submitForm() {
	email=document.getElementById("email").value;
	name=document.getElementById("name").value;
	phone=document.getElementById("phone").value;
	edu=document.getElementById("studying").value;
	dom=document.getElementById("domain").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(xhttp.responseText);
		showData();
		}};
	xhttp.open("POST", "about.php", true);
	xhttp.send(JSON.stringify({ email : email, name : name, phone : phone, edu : edu, dom : dom }));
}


function showData() {
	console.log(data);
	if(data.status=="success")
	{
		alert("Yay we got your info! You'll be hearing from us in no time.")
	}
	else if(data.status=="userExists"){alert("We already have your information! Please patiently await a response")}
}

sub.addEventListener("click",submitForm)