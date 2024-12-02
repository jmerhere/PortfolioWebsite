// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  const projectsSection = document.getElementById('projects');
  const imageLeft = document.getElementById('image-left');
  const imageRight = document.getElementById('image-right');

  // Check if the projects section is in the viewport
  if (isElementInViewport(projectsSection)) {
    imageLeft.classList.add('show');
    imageRight.classList.add('show');
  } else {
    imageLeft.classList.remove('show');
    imageRight.classList.remove('show');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case the section is already in view
handleScroll();
