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
