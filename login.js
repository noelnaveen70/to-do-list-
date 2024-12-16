// Callback function for redirection after successful login
function redirectToMainPage() {
    window.location.href = "main.html";  // Redirect to the main page
}

// Function to validate login credentials
function validateLogin(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials are correct
    if (username === "admin" && password === "12345") {
        // If credentials are correct, call the callback function to redirect
        redirectToMainPage();
    } else {
        // If credentials are incorrect, show an alert message
        alert("Invalid username or password. Please try again.");
    }
}



