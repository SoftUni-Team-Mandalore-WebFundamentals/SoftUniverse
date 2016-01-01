function getResult() {
	var result = document.forms["jedi-form"]["achievement"].value;

	if (result === "killed-jedi") {
	  document.getElementById("result-sith").style.display = "inline";
	} else if (result === "death-star" || result === "kissed-sister") {
	  document.getElementById("result-jedi").style.display = "inline";
	} else if (result === "wookie-friend") {
	  document.getElementById("result-rebel").style.display = "inline";
	} else {
	  document.getElementById("result-drunk").style.display = "inline";
	}
  }

function closeResult() {
	document.getElementById("result-jedi").style.display = "none";
	document.getElementById("result-sith").style.display = "none";
	document.getElementById("result-rebel").style.display = "none";
	document.getElementById("result-drunk").style.display = "none";
}