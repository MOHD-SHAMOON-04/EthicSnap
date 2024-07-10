// scripts.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can add form validation or send data to the server here

    // Store the credentials in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Show signup success message and hide the form
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signup-success').style.display = 'block';

    // Redirect to another page
    // window.location.href = 'welcome.html';
});
