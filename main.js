	// mouse over
	function mouseOver(){
		submit.style.background = "#323747";
		submit.style.color = "#a5a9aa";
	}

	// mouse out
	function mouseOut(){
		submit.style.background = "#a5a9aa";
		submit.style.color = "#323747";
	}

	// onchange
	document.getElementById("n").onchange = function() {changeToCapital()}
	function changeToCapital(){
		var fullname = document.getElementById("n");
		fullname.value = fullname.value.toUpperCase();
	}