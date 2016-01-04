function getResult() {
	
	var isDrunk = 0;
	var isSith = 0;
	var isRebel = 0;
	var isFarmer = 0;
	var isJedi = 0;
	
	var result1 = document.forms["jedi-form"]["achievement"].value;
	
	var result2 = document.forms["jedi-form"]["gain-power"].value;
	
	var result3 = document.forms["jedi-form"]["childhood"].value;
	
	var result4 = document.forms["jedi-form"]["hobbies"].value;
	
	var result5 = document.forms["jedi-form"]["choose-nickname"].value;
	
	switch (result1) {
	case "0": isDrunk ++; break;
	case "1": isSith ++; break;
	case "2": isRebel ++;  break;
	case "3": isFarmer ++; break;
	case "4": isJedi ++; break;
	}
	
	switch (result2) {
	case "0": isDrunk ++; break;
	case "1": isSith ++; break;
	case "2": isRebel ++; break;
	case "3": isFarmer ++; break;
	case "4": isJedi ++; break;
	}
	
	switch (result3) {
	case "0": isDrunk ++; break;
	case "1": isSith ++; break;
	case "2": isRebel ++; break;
	case "3": isFarmer ++; break;
	case "4": isJedi ++; break;
	}
	
	switch (result4) {
	case "0": isDrunk ++; break;
	case "1": isSith ++; break;
	case "2": isRebel ++;  break;
	case "3": isFarmer ++; break;
	case "4": isJedi ++;
	}
	
	switch (result5) {
	case "0": isDrunk ++; break;
	case "1": isSith ++; break;
	case "2": isRebel ++; break;
	case "3": isFarmer ++; break;
	case "4": isJedi ++; break;
	}
	
	if (isDrunk > 2) {
		document.getElementById("result-drunk").style.display = "block";
	}
	else if	(isSith > 2) {
		document.getElementById("result-sith").style.display = "block";
		}
	else if	(isFarmer > 2) {
		document.getElementById("result-luke").style.display = "block";
		}
	else if	(isRebel > 2) {
		document.getElementById("result-rebel").style.display = "block";
		}
	else if	(isJedi > 2)
        {
		document.getElementById("result-jedi").style.display = "block";
		}
	else {
		//you are obviously drunk
		document.getElementById("result-drunk").style.display = "inline";
		
	}
	
	//var finalRes = parseInt(result) + parseInt(result2) + parseInt(result3) + parseInt(result4)  + parseInt(result5);
	
//	if (finalRes <= 4) {
//	  document.getElementById("result-drunk").style.display = "inline";
//	} else if (finalRes > 4 && finalRes <= 7) {
//	  document.getElementById("result-sith").style.display = "inline";
//	}  else if (finalRes > 7 && finalRes <= 10) {
//		  document.getElementById("result-rebel").style.display = "inline";
//	} else if (finalRes > 10 && finalRes <= 13) {
//	  document.getElementById("result-luke").style.display = "inline";
//	} else {
//	  document.getElementById("result-jedi").style.display = "inline";
//	}
  }

function closeResult() {
	document.getElementById("result-jedi").style.display = "none";
	document.getElementById("result-sith").style.display = "none";
	document.getElementById("result-rebel").style.display = "none";
	document.getElementById("result-luke").style.display = "none";
	document.getElementById("result-drunk").style.display = "none";
}