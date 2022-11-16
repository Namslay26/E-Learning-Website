btn=document.getElementById("login")
mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}$)/gi
var data={}

function login()
{
    email=document.getElementById("email").value
    if(!mail.test(email))
    {
        alert("please enter a valid mail ID");
    }
    pwd=document.getElementById("pwd").value
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data =JSON.parse(xhttp.responseText);
		showData();
    }};
	xhttp.open("POST", "login.php", true);
	xhttp.send(JSON.stringify({ email : email, pass : pwd}));
}

function showData() {
    console.log(data);
    if(data.status=="success")
    {
        window.alert("Login Successful!")
        window.localStorage.setItem("Email",data.email)
        window.location.href="./profile.html"
    }
    else if(data.status=="wrongPwd"){window.alert("Incorrect Password")}
    else if(data.status=="noUser"){window.alert("No account is associated with this email.")}
}
    
btn.addEventListener("click",login)