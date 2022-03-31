/*  Goals:
    First input box requires the user to enter five capital letters,
    six symbols, and two hyphens (-) in any order.
    Second input box requires the user to enter letters without spaces
    Third input box ould require the user to only enter email addresses on gmail
        Additional goals:
        User should be notifie of any invalid inputs by error messages displayed on the form
        Submit button on the form should never be executed until all entries are validated. */
const password = document.getElementById("password");
const username = document.getElementById("username");
const gmail = document.getElementById("gmail");
const submitButton = document.getElementById("submit-btn");

function passwordCheck(){
    let userPassword = password.value;
    let passRegex = /^(?=.*([A-Z].*){5})(?=.*([^\w\s-].*){6})(?=.*-.*-.*).{13}$/;
    const passIsCorrect = passRegex.test(userPassword);
    let passValidationText = document.getElementById("pass-validation-text");
    if (passIsCorrect) {
        passValidationText.style.visibility = "hidden";
    }
    else {
        passValidationText.style.visibility = "visible";
        throw 'Incorrect pass input';
    }
}

function usernameCheck(){
    let usernameValue = username.value;
    let usernameRegex = /(\s|\d|\W)/;
    const usernameIsIncorrect = usernameRegex.test(usernameValue);
    let usernameValidationText = document.getElementById("username-validation-text");
    if (usernameIsIncorrect) {
        usernameValidationText.style.visibility = "visible";
        throw 'Incorrect username input';
    }
    else {
        usernameValidationText.style.visibility = "hidden";
    }

}

function gmailCheck(){
    let userGmail = gmail.value;
    let gmailRegex = /@gmail.com/;
    const gmailIsCorrect = gmailRegex.test(userGmail); 
    let gmailValidationText = document.getElementById("gmail-validation-text");
    if (gmailIsCorrect) {
        gmailValidationText.style.visibility = "hidden";
    }
    else {
        gmailValidationText.style.visibility = "visible";
        throw 'Incorrect email input';
    }
}


submitButton.addEventListener('click', function(){
    passwordCheck();
    usernameCheck();
    gmailCheck();
})