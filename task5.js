function validateForm() {
    let isValid = true;
  
    // Name validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "This field is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  
    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (emailInput.value.trim() === "") {
      emailError.textContent = "A valid email address is required";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) { // Helper function (below)
      emailError.textContent = "A valid email address is required";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Website validation
    const websiteInput = document.getElementById("website");
    const websiteError = document.getElementById("websiteError");
    if (websiteInput.value.trim() !== "") { // Only validate if not empty
      if (!isValidUrl(websiteInput.value)) { // Helper function (below)
        websiteError.textContent = "A valid url is required";
        isValid = false;
      } else {
        websiteError.textContent = "";
      }
    } else {
      websiteError.textContent = ""; // Clear if empty
    }
  
    // Message validation
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (messageInput.value.trim() === "") {
      messageError.textContent = "This field is required";
      isValid = false;
    } else {
      messageError.textContent = "";
    }
  
    return isValid;
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate URL format
  function isValidUrl(url) {
      try {
        new URL(url);
        return true;
      } catch (_) {
        return false;  
      }
  }