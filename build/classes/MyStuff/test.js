1/**
 * 
 */

//document.getElementById("clicky").onclick = changeLefty;

function changeLefty(){
	document.getElementById("lefty").innerHTML = "I've changed!";
}

function randomThing(){
//	var theUrl= "https://twitter.com/hashtag/gamergate";
//
//	if (window.XMLHttpRequest)
//	{// code for IE7+, Firefox, Chrome, Opera, Safari
//	    xmlhttp=new XMLHttpRequest();
//	}
//	else
//	{// code for IE6, IE5
//	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//	}
//	xmlhttp.onreadystatechange=function()
//	{
//	    if (xmlhttp.readyState==4 && xmlhttp.status==200)
//	    {
//	        return xmlhttp.responseText;
//	    }
//	}
//	xmlhttp.open("GET", theUrl, false );
//	xmlhttp.send();
	document.getElementById("resulttext").innerHTML = "loading data...";
//	document.getElementById("resulttext").innerHTML = xmlhttp.toString();
}