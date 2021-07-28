// This solution file has several commented out debugging alert statements
// These are useful when build the code step by step to see what is happenning with the variables


// global array for members list
var membersArray = [];
// global variable for furthest distance
var furthest;

//This person class/function has a simple constructor method and is used like a record structure
//The showall() function is used for debugging
function person(forename, surname, distance){
    this.forename = forename;
    this.surname = surname;
    this.distance = distance;
    this.showall = function(){
        return this.forename + ',' + this.surname + ',' + this.distance.toString();
    }
}

function readFile(input) {
	// Action handler for file chooser UI element
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
		// detailed actions in readMembers function
        readMembers(reader.result);
    reader.close;
    }
}

function readMembers(contents){
	//1. Read members’ data from file into array of records (OUT: members(forename,surname,distance))
	//   Stores data in the global variable membersArray
    //alert(contents);
    //split string into lines
    var contentsArray = contents.split('\n');
    //alert(contentsArray);
    //for each line
    for (item of contentsArray){
        //alert(item);
        var f,s,d;
        [f,s,d]=item.split(",");
        //store forname, surname, distance in an instance of person and store in membersArray
        var tempPerson = new person(f,s,parseFloat(d));
        membersArray.push(tempPerson);
    }
    //alert(membersArray);
}

function findFurthest(membersArray){
    //Set furthest to distance stored for first member in members() array
    var furthest = membersArray[0].distance;
    var counter;
    //Start fixed loop from second member to end of array
    for (counter=1; counter<membersArray.length; counter++){
        //If distance the current member walked is greater than furthest Then
        if (membersArray[counter].distance > furthest){
            //Set furthest to current distance
            furthest = membersArray[counter].distance;
        }
    }
    return furthest;
}

function displayFurthest(furthest){
    alert('The furthest distance walked was ' + furthest + ' miles');
}

function generateDownloadLink(){
	//4. Write club prize winners to file (IN: members(forename,surname,distance), furthest)
    alert('Setting up the link to write to file');
    var results = '';
    results += 'The prize winning members are:\r\n';
	//alert(membersArray);
    for (member of membersArray){
        //If the distance the member walked is greater than 0.7*furthest
        if (member.distance > 0.7 * furthest){
            //Write the forename and surname to the results.txt file
            results += member.forename + ' ' + member.surname + '\r\n';
        }
	}
	alert('This data will be written to file:\n' + results);
	var data = new Blob([results], {type: 'text/plain'});
    var url = window.URL.createObjectURL(data);
    document.getElementById('download_link').href = url;
}

function Go(){
    alert('Here is the list of members read from file:');
    for (member of membersArray){
        alert(member.showall());
    }
    //2. Find the furthest distance walked (IN: members(forename,surname,distance) 
    furthest = findFurthest(membersArray);
    //3. Display the furthest distance walked(IN: furthest)
    displayFurthest(furthest);
}




