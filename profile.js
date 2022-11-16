var data={}
var email;

function userDisplay()
{  
    email=window.localStorage.getItem("Email")
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(xhttp.responseText);
		showData();
    }};
	xhttp.open("POST", "profile.php", true);
	xhttp.send(JSON.stringify({ email : email}));
}

function showData() 
{
    console.log(data);
    
    var uinfo = document.getElementsByClassName("info")
    var reg = document.getElementsByClassName("registered")
    var comp = document.getElementsByClassName("completed")

    uinfo.item(0).innerHTML=data.name;
    uinfo.item(1).innerHTML=email;
    uinfo.item(2).innerHTML=data.phone;
    uinfo.item(3).innerHTML=data.clg;
    uinfo.item(4).innerHTML=data.deg;
    
    course_reg=data.reg.split(",")
    course_comp=data.comp.split(",")

    for(var i=0;i<3;i++)
    {
        reg.item(i).innerHTML=course_reg[i]
        comp.item(i).innerHTML=course_comp[i]
    }
}
