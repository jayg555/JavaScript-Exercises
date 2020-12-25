//-----------If/Else-----------//

const canYouDrink = (age) =>{
	if(age < 21){
		return "Too young, drink some juice";
	}

	else if(age >= 21){
		return "You can drink";
	}

	return "No age input"
};
	//False, Need an input
	console.log(canYouDrink());

	//True
	console.log(canYouDrink(30));
	
	//True, but too young
	console.log(canYouDrink(19));

//-----------Case/Switch----------//

const findBriefCase = (value) =>{

	result = ""
	switch(value){
		case "black": 
		result = "Not my breifcase";
			break;
		
		case "yellow" :
		result = "not it"
			break;
	
		case "green" : 
		result = "Thats my briefcase!"
			break;

		
	//-----Default Statement-----//
	default :
	case " ":
	result = "I have not seen a breifcase"
	break;
	}

	return result;
	

}

	console.log(findBriefCase("black"));
	console.log(findBriefCase());
	console.log(findBriefCase("yellow"));
	console.log(findBriefCase("green"));

	//-----Multiple cases-----//

const findRideHeight = (heightInFeet) =>{
	let result = "";

	switch(heightInFeet){
		case 3 :   
		case 4 : 
		case 5 : 
			result = "Too short";	
			break;
			
		case 6 :
		result = "You can ride";
		break;
	}

	return result;
}

	console.log(findRideHeight(5));
	console.log(findRideHeight(6));

	// If number is not in the case, nothing will be returned
	console.log(findRideHeight(2));
	console.log(findRideHeight(3));

