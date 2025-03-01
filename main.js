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

	document.getElementById("ticketForm").addEventListener("submit", function(event) {
	           event.preventDefault(); // Prevent form from refreshing the page
	           let seatPrice = parseInt(document.getElementById("seatType").value);
	           let budgetPrice = parseInt(document.getElementById("budgetType").value);
	           let total = seatPrice + budgetPrice;
	           alert("Your total ticket price is: ₱" + total);
	       });

	       // Button Hover Effects
	       function mouseOver(){
	           submit.style.background = "#323747";
	           submit.style.color = "#a5a9aa";
	       }

	       function mouseOut(){
	           submit.style.background = "#a5a9aa";
	           submit.style.color = "#323747";
	       }

	       document.getElementById("submit").onmouseover = mouseOver;
	       document.getElementById("submit").onmouseout = mouseOut;

	       function showTicket() {
	           document.getElementById("ticketContainer").style.display = "block";
	       }

	       function printTicket() {
	           alert("Printing!");
	       }

	       function refreshPage() {
	           location.reload();
	       }