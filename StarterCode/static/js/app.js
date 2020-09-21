// from data.js
var tableData = data;

// YOUR CODE HERE!
 

// Select HTML Element to create a list
var tbody = d3.select("tbody");

// Update each cell with UFO Sightings' key/value pairs
tableData.forEach((UFOSightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//  Use a date form that will listen for events and search through 
// the `date/time` column to find rows that match user input.

// Select HTML Elements that hold filter button and input field
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

button.on("click", function() {
    d3.event.preventDefault();
    var input = inputField.property("value");
    // console.log(input); // Check to see if it's working
    // Create Filtered dataset based on InputValue entered by user
    var filteredUFO = tableData.filter(UFOSightings => UFOSightings.datetime === input);
    // console.log(filteredUFO); // Check to see if it's working
    //Clear all previuos data from UFO table
    tbody.html(""); 
    // Append new filtered data into a table
    filteredUFO.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// -----------------------------------------------------------------------

// select city buttons
var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");
// select state buttons
var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");
// select country buttons
var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");
// select shape buttons
var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");

citysubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'City Filter Button'.");
    // select the "input element" and get the raw html node
    // var cityinputField = d3.select("#cityname");
    // get the value property of the "input" element 
    var cityinputElement = cityinputField.property("value");
    // print value in console
    console.log(cityinputElement);
    // use the "field input" to filter the data by "date" only
    var cityinputTypeArray = data.filter(two => two.city === cityinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(cityinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    cityinputTypeArray.forEach((selects) => {
        // for each "element" create a row
        var Crow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selects).forEach(([key,value]) => {
            var Ccell = Crow.append("td");
            // adds the "value" to each row in the table
            Ccell.text(value);
        });
    });      
});


statesubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'State Filter Button'.");
    // select the "input element" and get the raw html node
    
    // get the value property of the "input" element 
    var stateinputElement = stateinputField.property("value");
    // print value in console
    console.log(stateinputElement);
    // use the "field input" to filter the data by "state" only
    var stateinputTypeArray = data.filter(three => three.state === stateinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(stateinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    stateinputTypeArray.forEach((selectss) => {
        // for each "element" create a row
        var Srow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectss).forEach(([key,value]) => {
            var Scell = Srow.append("td");
            // adds the "value" to each row in the table
            Scell.text(value);
        });
    });      
});


countrysubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'Country Filter Button'.");
    // select the "input element" and get the raw html node
    
    // get the value property of the "input" element 
    var countryinputElement = countryinputField.property("value");
    // print value in console
    console.log(countryinputElement);
    // use the "field input" to filter the data by "country" only
    var countryinputTypeArray = data.filter(four => four.country === countryinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(countryinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    countryinputTypeArray.forEach((selectsc) => {
        // for each "element" create a row
        var Corow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectsc).forEach(([key,value]) => {
            var Cocell = Corow.append("td");
            // adds the "value" to each row in the table
            Cocell.text(value);
        });
    });      
});



shapesubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'Shape Filter Button'.");
    // select the "input element" and get the raw html node
    
    // get the value property of the "input" element 
    var shapeinputElement = shapeinputField.property("value");
    // print value in console
    console.log(shapeinputElement);
    // use the "field input" to filter the data by "shape" only
    var shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(shapeinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    shapeinputTypeArray.forEach((selectsh) => {
        // for each "element" create a row
        var Shrow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectsh).forEach(([key,value]) => {
            var Shcell = Shrow.append("td");
            // adds the "value" to each row in the table
            Shcell.text(value);
        });
    });      
});
