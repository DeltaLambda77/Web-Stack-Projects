const json = document.getElementById("json");
const csv = document.getElementById("csv");
const quotesCheckbox = document.getElementById("quotes");
const labelsCheckbox = document.getElementById("quotes");
const jsonConverter = document.getElementById("jsonconverter");
const downloadCSV = document.getElementById("downloadcsv");

function JSONconvert() {
    let csv = '';
    let userJSON = json.value;
    let parsedJSON = JSON.parse(userJSON);
    let keys = Object.keys(parsedJSON);
    let values = Object.values(parsedJSON);
    console.log(parsedJSON);
    for (let i = 0; i < keys.length; i++) {
        csv = csv + `"` + keys[i] + `",`
        console.log(csv);
    }
}

jsonConverter.addEventListener("click", function() {
    JSONconvert()
});

/* '{"result":true, "count":42}' */