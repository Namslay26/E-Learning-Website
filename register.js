var data = {};
btn=document.getElementById("sub");
function submitForm() {
	email=document.getElementById("email").value;
	name=document.getElementById("name").value;
	pass=document.getElementById("pass").value;
	cpass=document.getElementById("cpass").value;
	phone=document.getElementById("phone").value;
	clg=document.getElementById("clg").value;
	deg=document.getElementById("deg").value;

	if(validate())
	{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data = JSON.parse(xhttp.responseText);
			showData();
			}};
		xhttp.open("POST", "register.php", true);
		xhttp.send(JSON.stringify({ email : email, name : name, pass : pass, phone : phone, clg : clg, deg : deg }));
	}
	else{alert("Please Enter the same password for confrmation.")}
}

function validate() {
	if(pass==cpass){return true}
	else{return false}
}

function showData() {
	console.log(data);
	if(data.status=="success")
	{
		alert("Account Created Successfully!")
	}
	else if(data.status=="userExists"){alert("Account with this email already exists.")}
}

btn.addEventListener("click",submitForm)