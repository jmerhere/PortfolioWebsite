document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");
  
    const options = {
      threshold: 0.6, // Trigger when 60% of section is in view
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active"); // Remove active class from all links
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active"); // Add active class to the link for the section in view
            }
          });
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  