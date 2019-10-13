const fs = require("fs"); //importing fs module to access files


fs.writeFileSync('./salary.txt", "David,Male,200000');


fs.readFile('./employee.txt', function(err, data) {

	if(err){
		console.log("Error while reading file.");
		return;
	}
	else {
		console.log("Data is: \n", data.toString());
	}
});


