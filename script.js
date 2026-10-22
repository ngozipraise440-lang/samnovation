
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Display the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();
