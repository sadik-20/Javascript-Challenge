// from data.js
var tableData = data;

//a refernce to the table body
var tbody = d3.select("tbody");

//loop through the data and console.log for each ufo sighted report object
data.forEach((ufoSightings) => {
console.log(ufoSightings);
//appending one table row "tr"element for each ufo sight report object
var row = tbody.append("tr");
//use 'object.entries' to console.log for each sight report value
Object.entries(ufoSightings).forEach(([key, value]) =>{
console.log(key, value);
// append a cell 'td' element to the row for each value
var cell = row.append ("td");
        
cell.text(value);


    });
   
});