// Get form and resume display elements
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Function to handle form submission and generate resume
var generateResume = function (event) {
    event.preventDefault(); // Prevent form submission and page reload
    // Get input values
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var numberInput = document.getElementById('number').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value;
    // Create resume content
    var resumeContent = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(nameInput, "</p>\n    <p><strong>Email:</strong> ").concat(emailInput, "</p>\n    <p><strong>Number:</strong> ").concat(numberInput, "</p>\n    <h3>Education</h3>\n    <p>").concat(educationInput, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experienceInput, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skillsInput, "</p>\n  ");
    // Display the generated resume in the resumeDisplay div
    resumeDisplay.innerHTML = resumeContent;
};
// Add event listener to the form to handle submission
resumeForm.addEventListener('submit', generateResume);
