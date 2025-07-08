// Highlight the current page in the navbar
window.onload = function () {
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#00e6e6";
    }
  });
};

// Optional: Smooth scroll to top on page load
window.scrollTo({ top: 0, behavior: "smooth" });
