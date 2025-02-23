document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting (for demo purposes)
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    // Basic client-side validation (you would have more robust checks in a real application)
    if (usernameInput.value.trim() === '') {
      alert('Please enter your username.');
      usernameInput.focus();
      return;
    }
  
    if (passwordInput.value.trim() === '') {
      alert('Please enter your password.');
      passwordInput.focus();
      return;
    }
  
    // Handle "Remember me" checkbox
    const rememberMeCheckbox = document.getElementById('rememberMe');
    if (rememberMeCheckbox.checked) {
      // In a real app, you would store this preference (e.g., using cookies or local storage)
      alert('Remember me checked!');
    }
  
   
    alert('Login button clicked!');
  });
  
  
  
  document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Forgot password link clicked!');
  });
  
  
  document.getElementById('signUp').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Sign up link clicked!');
  });