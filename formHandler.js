function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

(function() {
    emailjs.init("neware.somesh3@gmail.com");  // Initialize EmailJS with your user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }).then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});

