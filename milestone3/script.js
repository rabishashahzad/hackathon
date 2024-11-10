// get references to the from display area
console;
form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent pagr reload
    //collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamicaly
    var resumeHTML = "\n<h2><b>Resume</b></h>\n<h3>personl infromation</h3\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Name:</b>").concat(email, "</p>\n<p><b>Name:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>skills</h3>\n<p>").concat(skills, "</p>\n\n");
    //display the generted resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display elementis missing.');
    }
});
