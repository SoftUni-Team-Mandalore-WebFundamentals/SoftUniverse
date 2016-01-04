function getResult() {
	var result = document.forms["jedi-form"]["achievement"].value;
	
	var result2 = document.forms["jedi-form"]["gain-power"].value;
	
	var result3 = document.forms["jedi-form"]["childhood"].value;
	
	var result4 = document.forms["jedi-form"]["hobbies"].value;
	
	var result5 = document.forms["jedi-form"]["choose-nickname"].value;
	
	var finalRes = parseInt(result) + parseInt(result2) + parseInt(result3) + parseInt(result4)  + parseInt(result5);
	
	if (finalRes <= 4) {
	  document.getElementById("result-drunk").style.display = "inline";
	} else if (finalRes > 4 && finalRes <= 7) {
	  document.getElementById("result-sith").style.display = "inline";
	}  else if (finalRes > 7 && finalRes <= 10) {
		  document.getElementById("result-rebel").style.display = "inline";
	} else if (finalRes > 10 && finalRes <= 13) {
	  document.getElementById("result-luke").style.display = "inline";
	} else {
	  document.getElementById("result-jedi").style.display = "inline";
	}
  }

function closeResult() {
	document.getElementById("result-jedi").style.display = "none";
	document.getElementById("result-sith").style.display = "none";
	document.getElementById("result-rebel").style.display = "none";
	document.getElementById("result-luke").style.display = "none";
	document.getElementById("result-drunk").style.display = "none";
}