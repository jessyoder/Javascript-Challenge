// from data.js
var tableData = data;

// YOUR CODE HERE!

// Level 1 

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
    // console.log(input); 
    // Create Filtered dataset based on InputValue entered by user
    var filteredUFO = tableData.filter(UFOSightings => UFOSightings.datetime === input);
    // console.log(filteredUFO);
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

// -------------------------------------------------------------------------------

// Part 2

var cityButton = d3.select("#city-btn");
var cityInputField = d3.select("#cityfilter");

cityButton.on("click", function() {
    d3.event.preventDefault();
    var cityInput = cityInputField.property("value");
    console.log(cityInput);
    // Create Filtered dataset based on InputValue entered by user
    var filteredCity = tableData.filter(UFOSightings => UFOSightings.city === cityInput);
    console.log(filteredCity); 
    //Clear all previuos data from UFO table
    tbody.html(""); 
    // Append new filtered data into a table
    filteredCity.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

var stateButton = d3.select("#state-btn");
var stateInputField = d3.select("#statefilter");

stateButton.on("click", function() {
    d3.event.preventDefault();
    var stateInput = stateInputField.property("value");
    console.log(stateInput);
    // Create Filtered dataset based on InputValue entered by user
    var filteredState = tableData.filter(UFOSightings => UFOSightings.state === stateInput);
    console.log(filteredState); 
    //Clear all previuos data from UFO table
    tbody.html(""); 
    // Append new filtered data into a table
    filteredState.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

var shapeButton = d3.select("#shape-btn");
var shapeInputField = d3.select("#shapefilter");

shapeButton.on("click", function() {
    d3.event.preventDefault();
    var shapeInput = shapeInputField.property("value");
    console.log(shapeInput);
    // Create Filtered dataset based on InputValue entered by user
    var filteredShape = tableData.filter(UFOSightings => UFOSightings.shape === shapeInput);
    console.log(filteredShape); 
    //Clear all previuos data from UFO table
    tbody.html(""); 
    // Append new filtered data into a table
    filteredShape.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


var countryButton = d3.select("#country-btn");
var countryInputField = d3.select("#countryfilter");

countryButton.on("click", function() {
    d3.event.preventDefault();
    var countryInput = countryInputField.property("value");
    console.log(countryInput);
    // Create Filtered dataset based on InputValue entered by user
    var filteredCountry = tableData.filter(UFOSightings => UFOSightings.country === countryInput);
    console.log(filteredCountry); 
    //Clear all previuos data from UFO table
    tbody.html(""); 
    // Append new filtered data into a table
    filteredCountry.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
