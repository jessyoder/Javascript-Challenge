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
