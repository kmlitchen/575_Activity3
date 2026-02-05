// GEOG575 Activity 3 - Katie Litchen 05Feb2026

// added the new debugged fxs to the initialization fx copied from lesson example 3.4 code
//initialize function called when the script loads
function initialize(){
    cities(),
	addColumns(),
	addEvents();
};

// copied lesson example 3.4 cities fx to populate initial table
//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]
    //create the table element
    var table = document.createElement("table");
    //create a header row
    var headerRow = document.createElement("tr");
    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
    document.querySelector("#mydiv").appendChild(table); //bonus debug: mydiv variable capitilization
}
document.addEventListener('DOMContentLoaded',initialize)

// beginning of debugged code:

// debugged fx to add the city size column to the table:
function addColumns(table){
	// probably redundant, but og code redefined the cities and populations - used variable in new fx
	var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]
    
	//loop through each table row, for each
    document.querySelectorAll("tr").forEach(function(headerRow, i){
    	if (i == 0){
			// if 1st row, add the new header to the end of the row
    		headerRow.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			// otherwise, for all subsequent rows: create new variable -> city size 
    		var citySize;
			// then, set it to nominal category based on conditional pop value from city pop variable
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			// then, add it to the end of the row
			headerRow.insertAdjacentHTML ("beforeend",citySize);
    	};
    });
};

//debugged fx to add events:
function addEvents(){
	//debugged event fx to change color of the table each time user mouses-over the element:
	document.querySelector("table").addEventListener("mouseover", function(){
		// not sure if this was how the assignment "meant" to fix this fx, but...
		// updated variable name, set as an empty array for RGB color elements
		var misccolor = [];
			// loop through empty array + add random whole # up to 255 to end (3x)
			for (var i=0; i<3; i++){
			var misc = Math.round(Math.random() * 255);
			misccolor.push(misc);
			};
		// set the color of the table to the rgb value from color array // idk if there was an easier way to do that?
		document.querySelector("table").style.color = `rgb(${misccolor[0]}, ${misccolor[1]}, ${misccolor[2]})`;
	});
	// fx for pop-up alert text:
	function clickme(){
		alert('Hey, you clicked me!');
	};
	// calls the alert fx upon clicking the table
	document.querySelector("table").addEventListener("click", clickme)
};