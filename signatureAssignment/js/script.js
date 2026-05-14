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
// Function 4: Bio Lookup (uses text input value)
// Used on team.html
// -----------------------------------------------
function lookupBio() {
    var input = document.getElementById("bio-input");
    var result = document.getElementById("bio-result");

    if (input === null || result === null) {
        return;
    }

    var name = input.value.trim().toLowerCase();

    if (name === "griffin") {
        result.innerHTML = "<p><strong>Griffin Umstead</strong> is a co-founder of Birds of Prey Lacrosse and serves as Head of Product. He has played lacrosse for the last 18 years at the club, high school, and college level, primarily as a goalie. His experience as a player drives every product decision he makes, ensuring that Birds of Prey gear performs the way athletes actually need it to. Outside of lacrosse, Griffin is studying management.</p>";
    } else if (name === "zack") {
        result.innerHTML = "<p><strong>Zack Waslosky</strong> is a co-founder of Birds of Prey Lacrosse and serves as Head of Marketing. He brings a strategic mindset to the brand, developing the identity, messaging, and outreach that have helped Birds of Prey connect with the lacrosse community. He believes that good branding starts with genuine passion for the sport, and that passion is something Birds of Prey has in abundance.</p>";
    } else {
        result.innerHTML = "<p>No bio found for that name. Try entering <strong>Griffin</strong> or <strong>Zack</strong>.</p>";
    }
}

// -----------------------------------------------
// Function 5: News Filter (uses text input value, updates innerHTML)
// Used on news.html
// -----------------------------------------------
function filterNews() {
    var input = document.getElementById("filter-input");
    var message = document.getElementById("filter-message");

    if (input === null || message === null) {
        return;
    }

    var keyword = input.value.trim().toLowerCase();

    if (keyword === "") {
        message.innerHTML = "Please enter a keyword to search.";
        return;
    }

    var articles = document.querySelectorAll(".news-card");
    var matchCount = 0;
    var i;

    for (i = 0; i < articles.length; i++) {
        var tags = articles[i].getAttribute("data-tags");
        var text = articles[i].innerText.toLowerCase();

        if (tags.indexOf(keyword) !== -1 || text.indexOf(keyword) !== -1) {
            articles[i].style.display = "block";
            matchCount = matchCount + 1;
        } else {
            articles[i].style.display = "none";
        }
    }

    if (matchCount > 0) {
        message.innerHTML = matchCount + " article(s) found for \"" + input.value.trim() + "\".";
    } else {
        message.innerHTML = "No articles found for \"" + input.value.trim() + "\". Try a different keyword.";
    }
}

// -----------------------------------------------
// Function 6: Clear News Filter
// Used on news.html
// -----------------------------------------------
function clearFilter() {
    var input = document.getElementById("filter-input");
    var message = document.getElementById("filter-message");
    var articles = document.querySelectorAll(".news-card");
    var i;

    for (i = 0; i < articles.length; i++) {
        articles[i].style.display = "block";
    }

    if (input !== null) {
        input.value = "";
    }

    if (message !== null) {
        message.innerHTML = "Filter cleared. Showing all articles.";
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
