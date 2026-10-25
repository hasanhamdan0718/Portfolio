// Update the copyright year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile Bootstrap menu after a navigation link is selected.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#mainNav");
    if (menu && menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
