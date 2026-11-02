document.addEventListener("DOMContentLoaded", function () {
    // 1. Enquiry Form Validation Logic
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById("fullname");
            const email = document.getElementById("email");
            const type = document.getElementById("type");
            const message = document.getElementById("message");

            const nameErr = document.getElementById("name-error");
            const emailErr = document.getElementById("email-error");
            const typeErr = document.getElementById("type-error");
            const msgErr = document.getElementById("message-error");
            const successBox = document.getElementById("enquiry-success");

            [nameErr, emailErr, typeErr, msgErr].forEach(el => el.textContent = "");
            successBox.style.display = "none";

            if (name.value.trim() === "") {
                nameErr.textContent = "Full name is required.";
                isValid = false;
            }

            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (email.value.trim() === "") {
                emailErr.textContent = "Email address is required.";
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                emailErr.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (type.value === "") {
                typeErr.textContent = "Please select an interest type.";
                isValid = false;
            }

            if (message.value.trim().length < 10) {
                msgErr.textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }

            if (isValid) {
                successBox.style.display = "block";
                enquiryForm.reset();
            }
        });
    }

    // 2. Contact Form & Email Compilation Logic
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById("c-name");
            const email = document.getElementById("c-email");
            const subject = document.getElementById("c-subject");
            const message = document.getElementById("c-message");

            const nameErr = document.getElementById("c-name-error");
            const emailErr = document.getElementById("c-email-error");
            const subjectErr = document.getElementById("c-subject-error");
            const msgErr = document.getElementById("c-message-error");
            const successBox = document.getElementById("contact-success");

            [nameErr, emailErr, subjectErr, msgErr].forEach(el => el.textContent = "");
            successBox.style.display = "none";

            if (name.value.trim() === "") {
                nameErr.textContent = "Name is required.";
                isValid = false;
            }

            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (email.value.trim() === "") {
                emailErr.textContent = "Email is required.";
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                emailErr.textContent = "Invalid email format.";
                isValid = false;
            }

            if (subject.value === "") {
                subjectErr.textContent = "Please select a message type.";
                isValid = false;
            }

            if (message.value.trim() === "") {
                msgErr.textContent = "Message body cannot be empty.";
                isValid = false;
            }

            if (isValid) {
                successBox.style.display = "block";
                
                // Compile into mailto link after short delay
                setTimeout(() => {
                    const recipient = "info@siyabongaafrica.org.za";
                    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent("From: " + name.value + " (" + email.value + ")\\n\\n" + message.value)}`;
                    window.location.href = mailtoLink;
                }, 1500);

                contactForm.reset();
            }
        });
    }
});