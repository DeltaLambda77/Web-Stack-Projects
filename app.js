const conversionButton = document.querySelector(".btn");
const textbox = document.querySelector("#textbox");
let cents = 0;


function intCheck() {
    let dollars = textbox.value;
    for (let i = 0; i < dollars.length; i++) {
        if (dollars[i] >= 0 && dollars[i] <= 9) {
            cents = cents * 10;
            cents += parseInt(dollars[i]);
        }
        else if (dollars[i] === "$") {
            if (i > 0) {
                alert("Invalid Input. Try Again.");
                throw "Invalid Input. Try Again.";
            }
        }
        else if (dollars[i] === ".") {
            if (dollars[i + 3] !== undefined) {
                alert("Invalid Input. Try Again.");
                throw "Invalid Input. Try Again.";
            }
        }
        else {
            alert("Invalid Input. Try Again.");
            throw "Invalid Input. Try Again.";
        }
    }
    return cents;
}

let quarterCount = 0;
let dimeCount = 0;
let nickelCount = 0;
let pennyCount = 0;

function conversion() {
    let centsValue = cents;
    while (centsValue > 0) {
        if (centsValue >= 25) {
            centsValue = centsValue - 25;
            quarterCount++;
        }
        else if (centsValue < 25 && centsValue > 10) {
            centsValue = centsValue - 10;
            dimeCount++;
        }
        else if (centsValue < 10 && centsValue > 5) {
            centsValue = centsValue - 5;
            nickelCount++;
        }
        else {
            centsValue = centsValue - 1;
            pennyCount++;
        }
    }
    return quarterCount;
    return dimeCount;
    return nickelCount;
    return pennyCount;
}

conversionButton.addEventListener("click", function() {
    intCheck()
    conversion()
    alert("You have a converted total of: " + cents + " cents. Or " + quarterCount + " Quarter(s), " + dimeCount + " Dime(s), " + nickelCount + " Nickel(s) and " + pennyCount + " Pennie(s).");
    cents = 0;
    quarterCount = 0;
    dimeCount = 0;
    nickelCount = 0;
    pennyCount = 0;
})