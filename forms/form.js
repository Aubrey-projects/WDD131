// Grab the form element from the DOM, print it out
const fsyForm = document.getElementById("fsyForm");
console.log(fsyForm);

// Create an event listener on the form
// calls a function when "submit"
fsyForm.addEventListener("submit", event => {
    event.preventDefault(); // prevents the URL from having the submitted data
    console.log(event);

    const firstName = fsyForm.firstName.value; // firstName is from the HTML
    const lastName = fsyForm.lastName.value;
    const email = fsyForm.email.value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    const campuses = fsyForm.campus;
    console.log(campuses[0].checked);
});