document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // You can use AJAX here to send the data to a server if needed
        console.log("Form submitted:", { name, email, message });
        alert("Your message has been sent!");
    } else {
        alert("Please fill in all the fields.");
    }
});
