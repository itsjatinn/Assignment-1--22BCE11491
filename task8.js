function validateForm() {
    let isValid = true;
  
    // Reset error messages
    resetErrorMessages();
  
    // First Name validation
    const firstNameInput = document.getElementById("firstName");
    if (isEmpty(firstNameInput)) {
      showError("firstNameError", "First Name is required");
      isValid = false;
    }
  
    // Last Name validation
    const lastNameInput = document.getElementById("lastName");
    if (isEmpty(lastNameInput)) {
      showError("lastNameError", "Last Name is required");
      isValid = false;
    }
  
    // Email validation
    const emailInput = document.getElementById("email");
    if (isEmpty(emailInput)) {
      showError("emailError", "Email is required");
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError("emailError", "A valid email address is required");
      isValid = false;
    }
  
    // Password validation
    const passwordInput = document.getElementById("password");
    if (isEmpty(passwordInput)) {
      showError("passwordError", "Password is required");
      isValid = false;
    }
  
    // Re-enter Password validation
    const rePasswordInput = document.getElementById("rePassword");
    if (isEmpty(rePasswordInput)) {
      showError("rePasswordError", "Re-enter Password is required");
      isValid = false;
    } else if (passwordInput.value !== rePasswordInput.value) {
      showError("rePasswordError", "Passwords do not match");
      isValid = false;
    }
  
    // Age validation
    const ageInput = document.getElementById("age");
    if (isEmpty(ageInput)) {
      showError("ageError", "Age is required");
      isValid = false;
    } else if (isNaN(ageInput.value) || ageInput.value < 0) {
      showError("ageError", "Age must be a non-negative number");
      isValid = false;
    }
  
    // Phone Number validation
    const phoneInput = document.getElementById("phone");
    if (isEmpty(phoneInput)) {
      showError("phoneError", "Phone Number is required");
      isValid = false;
    }
  
    // Address validation
    const addressInput = document.getElementById("address");
    if (isEmpty(addressInput)) {
      showError("addressError", "Address is required");
      isValid = false;
    }
  
    // State validation
    const stateSelect = document.getElementById("state");
    if (stateSelect.value === "") {
      showError("stateError", "Please select a state");
      isValid = false;
    }
  
    // Country validation
    const countrySelect = document.getElementById("country");
    if (countrySelect.value === "") {
      showError("countryError", "Please select a country");
      isValid = false;
    }
  
    return isValid;
  }
  
  // Helper functions
  function isEmpty(input) {
    return input.value.trim() === "";
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
  }
  
  function resetErrorMessages() {
    const errorSpans = document.querySelectorAll("span[id$='Error']");
    errorSpans.forEach(span => span.textContent = "");
  }