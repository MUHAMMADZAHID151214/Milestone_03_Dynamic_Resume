function generateResume(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName")
        .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value.split(", ");
    var resumeContainer = document.getElementById("generated-resume");
    if (resumeContainer) {
        resumeContainer.innerHTML = "";
        resumeContainer.innerHTML = "\n        <div class=\"resume-container\">    \n        <div class=\"sidebar\">\n                <h2>Name</h2>\n                <p class=\"subtitle\">".concat(fullName, "</p>\n                <div class=\"contact-section\">\n                <h3>Contact</h3>\n                <p>").concat(email, "</p>\n                <p>").concat(phone, "</p>\n                </div>\n                <div class=\"skills-section\">\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                </div>\n            </div>    \n            \n<div class=\"main-content\">\n  <div class=\"work-experience-section\">\n                <h3>Work Experience</h3>\n                <div id=\"work-content\">\n                <div class=\"job\">\n                <h6>").concat(workExperience, "</h6>\n                </div>\n                </div>\n                \n         </div>\n         \n  <div class=\"education-section\">       \n                <h3>Education</h3>\n                <div id=\"education-content\">\n                  <div class=\"degree\">\n                  <h6>").concat(education, "</h6>\n                </div>\n                </div>\n                </div>\n                </div>\n        ");
    }
    else {
        console.error("Resume container not found!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    if (form) {
        form.addEventListener("submit", generateResume);
    }
    else {
        console.error("Form not found!");
    }
});
