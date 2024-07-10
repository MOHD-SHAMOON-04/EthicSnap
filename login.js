// login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered email and password values
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    // Retrieve the stored credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate the credentials
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        // Redirect to the welcome page
        window.location.href = 'main.html';
    } else {
        // Show login failure message
        document.getElementById('login-failure').style.display = 'block';
    }
});
