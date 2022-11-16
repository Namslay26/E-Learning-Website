mod=document.getElementsByClassName("mod")
var email
var stat=true
function courseComplete(){
    for(i=0;i<7;i++)
    {
        if(!mod.item(i).checked)
        {
            stat=false
            break
        }
    }
    if(stat==true)
    {
        email=window.localStorage.getItem("Email")
        var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		    data = JSON.parse(xhttp.responseText);
		    showData();
        }};
	    xhttp.open("POST", "coursevideo.php", true);
	    xhttp.send(JSON.stringify({ email : email, name:"Introduction to Cyber Security" }));
        function showData() {
            console.log(data);
            if(data.status=="success")
            {
                alert("Congratulations! You have completed this course!")
            }
            else if(data.status=="fail"){alert("You have already completed the course once")}
        }
    }
}


