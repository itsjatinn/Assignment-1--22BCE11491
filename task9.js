// script.js

// Function to handle form submission (register.html)
function registerUser(event) {
    event.preventDefault(); // Prevent form from actual submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;

    // Basic client-side validation (you can add more robust checks)
    if (!name || !email || !contact || !address) {
        alert("Please fill in all fields.");
        return;
    }

    // Create user object
    const user = {
        name: name,
        email: email,
        contact: contact,
        address: address
    };

    // Store user data in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || []; // Get existing users or empty array
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Reset the form
    document.getElementById("registrationForm").reset();

    alert("Registration successful!");
}

// Function to display users (view.html)
function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tableBody = document.getElementById("userTableBody");

    tableBody.innerHTML = ""; // Clear existing table rows

    if (users.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No users registered yet.</td></tr>";
        return;
    }

    users.forEach((user, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
        `;
    });
}

// Function to navigate to register page
function goToRegisterPage() {
    window.location.href = "register.html";
}

// Function to navigate to view page
function goToViewPage() {
    window.location.href = "view.html";
}


// Call displayUsers() on view.html to populate the table when the page loads
if (window.location.pathname.endsWith("view.html")) {
    displayUsers();
}