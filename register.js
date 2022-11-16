var data = {};
btn=document.getElementById("sub");
mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}$)/gi
pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
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
}

function validate() {
	if(mail.test(email))
    {
		if(pwd.test(pass))
		{
			if(pass==cpass)
			{
				return true
			}
			else
			{
				alert("Please Enter the same password for confrmation.")
				return false	
			}
		}
		else
		{
			alert("Please follow standard password format")
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
	else if(data.status=="userExists"){alert("Account with this email already exists.")}
}

btn.addEventListener("click",submitForm)