var day = document.getElementById('day1');
var date = document.getElementById("day1").getElementsByClassName("date")[0];

day.addEventListener('mouseenter', function(){
	var newbutton = document.createElement("div");
	var btntext = document.createTextNode("NEW");
	newbutton.appendChild(btntext);
	newbutton.className="button_new";
	var att = document.createAttribute("onclick");
	att.value = "newunit()"
	newbutton.setAttributeNode(att);
	date.appendChild(newbutton);
});

day.addEventListener('mouseleave', function() {
	date.removeChild(date.lastChild);
});

function newunit() {
	console.log("pressed");

	var newdiv = document.createElement("div");
	newdiv.setAttribute("class", "unit");
	newdiv.innerHTML = document.getElementById("newunit").innerHTML;
	document.getElementById("day1").appendChild(newdiv);
}

