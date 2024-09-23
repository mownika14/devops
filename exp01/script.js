document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for validation

        const name = document.querySelector("#name").value.trim();
        const fatherName = document.querySelector("#fatherName").value.trim();
        const motherName = document.querySelector("#motherName").value.trim();
        const rollNo = document.querySelector("#rollNo").value.trim();
        const mobileNumber = document.querySelector("#mobileNumber").value.trim();
        const emailID = document.querySelector("#emailID").value.trim();
        const gender = document.querySelector('input[name="Gender"]:checked');
        const department = document.querySelector("#department").value;
        const languages = document.querySelector("#languages").value.trim();
        const dob = document.querySelector("#dob").value;

        // Basic validation
        if (!name || !fatherName || !motherName || !rollNo || !mobileNumber || !emailID || !gender || department === "-" || !languages || !dob) {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Validate mobile number (10 digits)
        const mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(mobileNumber)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        // Validate email (contains '@' and ends with '.com' or '.in')
        const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in)$/;
        if (!emailPattern.test(emailID)) {
            alert("Email ID must be in the format example@domain.com or example@domain.in");
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Reset the form after successful submission
    });

    // Optional: Clear form fields when reset button is clicked
    form.addEventListener("reset", function() {
        // Optionally perform any actions when the form is reset
        console.log("Form has been reset.");
    });
});
