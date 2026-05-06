// Birds of Prey Lacrosse - script.js

// -----------------------------------------------
// Function 1: Size Checker (uses text input value)
// Used on products.html
// -----------------------------------------------
function checkSize() {
    var heightInput = document.getElementById("height-input");
    var resultParagraph = document.getElementById("size-result");

    if (heightInput === null || resultParagraph === null) {
        return;
    }

    var height = parseInt(heightInput.value);

    if (isNaN(height) || height <= 0) {
        resultParagraph.innerHTML = "Please enter a valid height in inches.";
    } else if (height < 60) {
        resultParagraph.innerHTML = "Recommended size: Small (S)";
    } else if (height < 67) {
        resultParagraph.innerHTML = "Recommended size: Medium (M)";
    } else if (height < 73) {
        resultParagraph.innerHTML = "Recommended size: Large (L)";
    } else {
        resultParagraph.innerHTML = "Recommended size: Extra Large (XL)";
    }
}

// -----------------------------------------------
// Function 2: Form Submission Handler
// Used on contact.html
// -----------------------------------------------
function submitForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var formMessage = document.getElementById("form-message");

    if (name === null || email === null || message === null || formMessage === null) {
        return;
    }

    if (name.value.trim() === "" || email.value.trim() === "") {
        formMessage.innerHTML = "Please fill in your name and email address before submitting.";
        return;
    }

    formMessage.innerHTML = "Thank you, " + name.value + "! Your message has been received. We will be in touch soon.";
}

// -----------------------------------------------
// Function 3: Form Reset Handler
// Used on contact.html
// -----------------------------------------------
function resetForm() {
    var fields = ["name", "email", "message"];
    var i;

    for (i = 0; i < fields.length; i++) {
        var field = document.getElementById(fields[i]);
        if (field !== null) {
            field.value = "";
        }
    }

    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    var radios = document.querySelectorAll("input[type='radio']");
    for (i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    var formMessage = document.getElementById("form-message");
    if (formMessage !== null) {
        formMessage.innerHTML = "Form has been cleared.";
    }
}

// -----------------------------------------------
// Event: Logo click on home page highlights brand name
// -----------------------------------------------
var logoImg = document.getElementById("logo-img");
if (logoImg !== null) {
    logoImg.addEventListener("click", function () {
        var heading = document.querySelector("header h1");
        if (heading !== null) {
            heading.innerHTML = "Birds of Prey Lacrosse - Fly Higher";
        }
    });
}

// -----------------------------------------------
// Event: Highlight table rows on hover (products page)
// -----------------------------------------------
var tableRows = document.querySelectorAll("table tbody tr");
var i;
for (i = 0; i < tableRows.length; i++) {
    tableRows[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#FFD700";
        this.style.color = "#002366";
    });
    tableRows[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
}
