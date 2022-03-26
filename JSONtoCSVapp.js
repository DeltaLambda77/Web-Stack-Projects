const json = document.getElementById("json");
const csv = document.getElementById("csv");
const quotesCheckbox = document.getElementById("quotes");
const labelsCheckbox = document.getElementById("quotes");
const jsonConverter = document.getElementById("jsonconverter");
const downloadCSV = document.getElementById("downloadcsv");

var keys = '';
var values = '';

function JSONconvert() {
    let userJSON = json.value;
    var parsedJSON = JSON.parse(userJSON);
    keys = Object.keys(parsedJSON);
    values = Object.values(parsedJSON);
    console.log(parsedJSON);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
    }
    for (i = 0; i < values.length; i++) {
        console.log(values[i]);
    }

}

jsonConverter.addEventListener("click", function() {
    JSONconvert()
});

/* '{"result":true, "count":42}' */