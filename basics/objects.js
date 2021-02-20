//----------Defining objects-----------//

	//key : value pairs
let myDog = {
"name" : "Drax",
"breed": "Pitbull",
"legs" : 4,
"age" : 42,
}

let myCar = {
	model: "Lexus",
	make : "CT200h",
	year : 2015,
}

let myActivities = {
	saturdays : "run",
	sundays : "drive around",
	mondays : "study",
	teusdays : "job hunt",
	wednesdays : "read",
	thursdays : "code",
	fridays : "party" 
}

 //-----Accessing properties-----//

 //Dot notation
 const logMyVehicleInfo = () =>{
	 console.log(myCar.model);
	 console.log(myCar.make);
	 console.log(myCar.year);
 }

 logMyVehicleInfo();

 //Bracket notation
 const logMyDog = () =>{
	 console.log(myDog["name"]);
	 console.log(myDog["breed"]);
	 console.log(myDog["legs"]);
	 console.log(myDog["age"]);
	 
 }
 logMyDog();

 //-----Properties as variables-----// 
 let myPassenger = myDog["name"]
 let myRide = myCar.model


const whoRidesWithMe = (aPassenger) =>{
	 let driver = "James";

	return driver + " and " + aPassenger;
}

let whatIdoOnWeekends = whoRidesWithMe(myPassenger)

console.log(whatIdoOnWeekends + " likes to " + myActivities.sundays + " on weekends");


//------Updating object properties------//
const changeMyWeekdayActivity = () =>{
	myActivities.fridays = "Play video games";

	console.log(myActivities.fridays);
}
changeMyWeekdayActivity();

//-----Adding and deleting properties-----//
myDog.activity = "bark"
console.log(myDog);

delete myDog.age;
console.log(myDog);


//-----Methods-----//

//hasOwnProperty
//returns boolean value

//True
console.log(myDog.hasOwnProperty("breed"));

//False
// Play vides games is a value for fridays, not a property
console.log(myActivities.hasOwnProperty("Play video games"));

//-----Complex objects-----//

let myMusic = [{
	"artist": "Petit Biscuit",
	"title": "Waterfall",
	"release_year": 2017,
	"formats": [ 
	  "CD",
	  "Stream",
	  "Vynil"
	],
	"gold": false
  },{
		"artist": "Big Wild",
		"title": "Superdream",
		"release_year": 2019,
		"formats": [ 
		  "Stream",
		  "Cd",
		  "LP"
		],
		"gold": true
	  }
  ]

//-----Accessing nested objects and arrays-----//
var myStorage = {
	"car": {
	  "inside": {
		"glove box": "maps",
		"passenger seat": "crumbs"
	   },
	  "outside": {
		"trunk": "jack"
	  }
	}
  };

 let gloveBoxContents = myStorage.car.inside["glove box"];
 console.log(gloveBoxContents);

//Arrays
let myCurrentFavoriteFormat = myMusic[1].formats[0];
console.log(myCurrentFavoriteFormat);