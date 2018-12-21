function clearErrors(){
	for (var loopCounter=0;
		loopCounter<document.forms["numberFun"].elements.length;
		loopCounter++){
			if(document.forms["numberFun"].elements[loopCounter]
			.parentElement.className.indexOf("has-")!=-1){
				
				document.forms["numberFun"].elements[loopCounter]
				.parentElement.className="form-group";
			}
		}
}

function resetForm(){
	clearErrors();
	document.forms["numberFun"]["startingBet"].value="";
	
	document.getElementById("results").style.display="none";
	document.getElementById("submitButton").innerText="Submit";
	document.forms["numberFun"]["startingBet"].focus();
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 

function game(){
	var startingBet=document.forms["numberFun"]["startingBet"].value;
	
	if (startingBet<=0){
		alert ("Error: Starting bet must be greater than 0");
		
		return true;
		resetForm();
		
	}
	
	var gameMoney=startingBet;
	var rollCount=0;
	var highAmount=gameMoney;
	var rollAtHigh=1;
	
	document.getElementById("Bet").innerText="$"+startingBet;
	while(gameMoney>0){
		rollCount++;
		if(rollDice()+rollDice()==7){
			gameMoney=gameMoney+4;
			if(gameMoney>highAmount){
				highAmount=gameMoney;
				rollAtHigh=rollCount;
			}
		}
		else {
			gameMoney=gameMoney-1;
		}
		
	}
	document.getElementById("results").style.display="block";
	document.getElementById("submitButton").innerText="Play Again";
	
	document.getElementById("totalRolls").innerText=rollCount;
	document.getElementById("highestAmount").innerText="$"+highAmount;
	document.getElementById("rollAtHigh").innerText=rollAtHigh;
	
	return false;
}
	

/*
function validateItems(){
	
	
	clearErrors();
	var startingBet=document.forms["numberFun"]["startingBet"].value;
	
	if (num1==""||isNaN(num1))
	{
		alert("startingBet must be filled in with a number.");
		document.forms["numberFun"]["startingtBet"]
		.parentElement.className="form-group has-error"
		document.forms["numberFun"]["startingBet"].focus();
		return false;
	
	}
	
	
	document.getElementById("results").style.display="block";
	document.getElementById("submitButton").innerText="Recalculate";
	document.getElementById("startingBet").innerText=startingBet;
	document.getElementById("totalRolls").innerText=rollCount;
	document.getElementById("highestAmount").innerText=highAmount;
	document.getElementById("rollAtHigh").innerText=rollAtHigh;
	
	return false;
}
*/
