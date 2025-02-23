function showDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', { // Customize locale as needed
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    document.getElementById('date').textContent = formattedDate;
  }
  
  function showTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toString(); // You can customize the format if needed
    document.getElementById('time').textContent = formattedTime;
  }