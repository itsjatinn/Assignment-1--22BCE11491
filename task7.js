let animationId; // Store the animation ID

function startAnimation() {
  const train = document.getElementById('train');
  let position = 0;
  const speed = 5; // Adjust speed as needed

  // Function to move the train
  function animate() {
    position += speed;
    train.style.left = position + 'px';

    // Reset position when train goes off-screen
    if (position > window.innerWidth) {
      position = -train.width; // Start from the left again
    }

    animationId = requestAnimationFrame(animate);
  }

  animate(); // Start the animation
}

function stopAnimation() {
  cancelAnimationFrame(animationId); // Stop the animation
}