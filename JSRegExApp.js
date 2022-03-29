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

