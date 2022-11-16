sub=document.getElementById("submit")
mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}$)/gi
mob=/^+?[0-9]{10}/gi
var data

function submitForm() {
	email=document.getElementById("email").value;
	name=document.getElementById("name").value;
	phone=document.getElementById("phone").value;
	edu=document.getElementById("studying").value;
	dom=document.getElementById("domain").value;

	if(validate())
	{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data = JSON.parse(xhttp.responseText);
			showData();
			}};
		xhttp.open("POST", "about.php", true);
		xhttp.send(JSON.stringify({ email : email, name : name, phone : phone, edu : edu, dom : dom }));
	}
}

function validate() {
	if(mail.test(email))
    {
		if(mob.test(phone))
		{
			return true
		}
		else
		{
			alert("Please enter a valid phone number")
			return false
		}
    }
	else
	{
		alert("Please enter a valid mail ID")
		return false
	}
}

function showData() {
	console.log(data);
	if(data.status=="success")
	{
		alert("Account Created Successfully!")
	}
	else if(data.status=="userExists"){alert("We already have your information!")}
}

sub.addEventListener("click",submitForm)