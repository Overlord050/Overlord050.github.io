document.addEventListener("DOMContentLoaded", function () {
  // Set a timeout of 5 seconds before hiding the terminal background and showing the profile card
  setTimeout(function () {
    // Hide the terminal background
    const terminalBackground = document.querySelector(".terminal-background");
    terminalBackground.style.display = "none";

    // Show the profile card with fade-in effect
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.display = "block";

    // Trigger the fade-in effect by changing opacity
    setTimeout(function () {
      profileCard.style.opacity = "1";
    }, 100); // Small delay to ensure the display change takes effect
  }, 5000); // 5000ms = 5 seconds
});
