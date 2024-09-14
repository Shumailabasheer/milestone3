var _a, _b, _c;
var form = document.getElementById("resumeForm");
var resumePreview = document.getElementById("resumeContent");
var educationList = [];
var workExperienceList = [];
var skillsList = [];
// Add Education
(_a = document.getElementById("addEducation")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var gradYear = document.getElementById("gradYear").value;
    if (degree && institution && gradYear) {
        var educationItem = "".concat(degree, " from ").concat(institution, " (").concat(gradYear, ")");
        educationList.push(educationItem);
        renderResume();
    }
});
// Add Work Experience
(_b = document.getElementById("addExperience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;
    var years = document.getElementById("years").value;
    if (company && position && years) {
        var experienceItem = "".concat(position, " at ").concat(company, " (").concat(years, ")");
        workExperienceList.push(experienceItem);
        renderResume();
    }
});
// Add Skills
(_c = document.getElementById("addSkill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var skill = document.getElementById("skill").value;
    if (skill) {
        skillsList.push(skill);
        renderResume();
    }
});
// Render Resume
function renderResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    resumePreview.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p>").concat(email, " | ").concat(phone, "</p>\n    <h4>Education</h4>\n    <ul>").concat(educationList.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul>\n    <h4>Work Experience</h4>\n    <ul>").concat(workExperienceList.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul>\n    <h4>Skills</h4>\n    <ul>").concat(skillsList.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n");
}
