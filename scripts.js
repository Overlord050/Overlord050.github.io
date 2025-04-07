document.addEventListener("DOMContentLoaded", function () {
  // Wait for 5 seconds before transitioning
  setTimeout(function () {
    // Hide the terminal background
    const terminalBackground = document.querySelector(".terminal-background");
    terminalBackground.style.display = "none";

    // Show the profile card with a fade-in effect
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.display = "block";

    // Apply the fade-in effect
    setTimeout(function () {
      profileCard.style.opacity = "1";
    }, 100);
  }, 5000); // 5000ms = 5 seconds
});
