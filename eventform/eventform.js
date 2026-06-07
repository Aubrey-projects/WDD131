const form = document.querySelector("#eventForm");
const typeOfUser = document.querySelector("#typeOfUser");
const codeContainer = document.querySelector("#codeContainer");
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const userLabel = document.querySelector("#userLabel");

function updateCodeField() {
    const value = typeOfUser.value;

    // FIX text
    if (value === "student") {
        codeContainer.hidden = false;
        userLabel.innerHTML = "Student I#";
        code.required = true;

    } else if (value === "guest") {
        codeContainer.hidden = false;
        userLabel.innerHTML = "Access Code";
        code.required = true;
    } else {
        codeContainer.hidden = true;
        code.required = false;
    }
}

typeOfUser.addEventListener("change", updateCodeField);
updateCodeField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.typeOfUser.value;
    const availableDate = form.availableDate.value;
    const code = form.code.value.trim();
    if (type === "student" && isNaN(code) == true) {
        output.textContent = "Student I# must be 9 digits. Yours includes letters.";
        return;
    } else if (type === "student" && code.length < 9) {
        output.textContent = "Student I# must be 9 digits. Yours is too short.";
        return;
    } else if (type === "student" && code.length > 9) {
        output.textContent = "Student I# must be 9 digits. Yours is too long.";
        return;
    }

    if (type === "guest" && code !== "EVENT131") {
        output.textContent = "That is not a valid event code.";
        return;
    }

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date."
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${availableDate}</p>
    `;

    form.reset();
    updateCodeField();
});



