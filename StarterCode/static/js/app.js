// from data.js
var tableData = data;

//a refernce to the table body
var tbody = d3.select("tbody");

//loop through the data and console.log for earch ufo sighted report object
data.forEach((ufoSightings) => {
    console.log(ufoSightings);
    var row = tbody.append("tr");
   
}