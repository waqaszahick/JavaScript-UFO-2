// from data.js
var tableData = data;

// YOUR CODE HERE!

//Create table
var table = document.createElement('table');
table.setAttribute('id','ufo-table');
table.setAttribute('class','table table-striped');

//Create table head
var thead = document.createElement('thead');

//Create table head row
var tr = document.createElement('tr');

//Create table body
var tbody = document.createElement('tbody');

//Create table head list
var heads = ['Date/Time','City','State','Country','Shape','Duration','Comments'];

//Append table heads
heads.forEach(element => {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(element));
    tr.appendChild(th);
});

//Append table rows
function appendData(list){
    list.forEach(elements =>{
        var row = document.createElement('tr');
        for (var key in elements) { 
            var cell = document.createElement('td');
            var a = elements[key];
            cell.appendChild(document.createTextNode(a));
            row.appendChild(cell);
        } 
        tbody.appendChild(row);  
    });
}
thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);
var tablearea = document.getElementById('table-area');
tablearea.appendChild(table);

appendData(tableData);


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateTime = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var country = d3.select("#country");
    var shape = d3.select("#shape");
    var duration = d3.select("#duration");

    // Get the value property of the input element
    var dateTimeValue = dateTime.property("value");
    var cityValue = city.property("value");
    var stateValue = state.property("value");
    var countryValue = country.property("value");
    var shapeValue = shape.property("value");
    var durationValue = duration.property("value");

    if(dateTimeValue.trim() !== '' || cityValue.trim() !== '' || stateValue.trim() !== '' || countryValue.trim() !== '' || shapeValue.trim() !== '' || durationValue.trim() !== ''){
    tbody.innerHTML = "";
    
    table.removeChild(tbody);

    // var filteredData = tableData.filter(element => element.datetime === inputValue);
    var filteredData = tableData.filter(function (element) {
        // the current value is an object, so you can check on its properties
        return element.datetime === dateTimeValue || element.city === cityValue || element.state === stateValue || element.country === countryValue || element.shape === shapeValue || element.duration === durationValue;
      });
    appendData(filteredData);

    table.appendChild(tbody);
    }
}