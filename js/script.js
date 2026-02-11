const toggleButton = document.querySelector("#theme-toggle");
const root = document.documentElement;

const updateToggleText = (theme) => {
  toggleButton.textContent = theme === "light" ? "Dark mode" : "Light mode";
};

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateToggleText(theme);
};

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleButton.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your message! I will reply soon.");
  contactForm.reset();
});
