// Loading screen animation
function startLoading() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");
  const loadingPercent = document.getElementById("loadingPercent");

  let progress = 0;
  const duration = 2000; // 2 seconds total
  const interval = 20; // Update every 20ms
  const increment = (100 / (duration / interval));

  const updateProgress = () => {
    progress += increment;
    
    if (progress >= 100) {
      progress = 100;
      loadingPercent.textContent = Math.round(progress);
      
      // Hide loading screen and show main content
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        mainContent.style.display = "block";
        initializeMainContent();
      }, 300);
    } else {
      loadingPercent.textContent = Math.round(progress);
      setTimeout(updateProgress, interval);
    }
  };

  updateProgress();
}

function initializeMainContent() {
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSelector = button.getAttribute("data-scroll-target");
      if (!targetSelector) return;
      const targetEl = document.querySelector(targetSelector);
      if (!targetEl) return;
      targetEl.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Start loading animation when page loads
document.addEventListener("DOMContentLoaded", startLoading);

