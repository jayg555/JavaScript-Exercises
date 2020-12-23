

//----------Passing arguments----------// 
const learnFunctions = (param1, param2) =>{

	console.log(param1, param2);
	
	//Reversed
	console.log(param2, param1);
	};
	learnFunctions("Sup", "Dude");
	
	//-----------Scope----------//
	
	//Global
		//Can be used in all functions
	let globalVar = "Outside the function scope";
	
	const logGlobalVariable = () =>{
		console.log(globalVar);
	}
	logGlobalVariable();
	
	//Local
		//Variable is only visible within the function
	const logLocalVar = () =>{
	
		var localVar = "Inside the scope of the function";
		console.log(localVar);
	}
	logLocalVar();
	
	//ReferenceError: localVar is not defined
		//console.log(localVar);
	
	//Global VS. Local variables in functions
	
	let myGlobalVarible = 50
	
	const logBothVariables = () =>{
		let myLocalVariable = 20
		let myGlobalVarible = 10
		
		// 30 since myGlobalVariable is visible locally
		console.log(myLocalVariable + myGlobalVarible)
	}
	logBothVariables();
	
	//myGlobalVariable is 50 outside the function scope
	console.log(myGlobalVarible); 
	
	//----------Return----------//
	
	let mySkills = "an awesome Coder";
	
	const addMyTitle = (someVar) =>{
		return "James is " + someVar
	}
	
		console.log(addMyTitle(mySkills));
		console.log(addMyTitle("Awesome"));
	
	//Undefined
	const returnMyValue = (aVar) =>{
		result = aVar + aVar;
	}
	
		//Since no return statement is initialized
		// returnMyValue(10) = undefined
		console.log(returnMyValue(10));
	
	//Values assigned to variable
	
		const addToMyTitle = (aVar) =>{
			return "James the " + aVar;
		}
	
	coolDude = addToMyTitle("cool guy");
	
	// James the Cool guy
	console.log(coolDude);