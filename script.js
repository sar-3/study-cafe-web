const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

const reservationForm = document.querySelector("#reservation-form");
const reservationNotice = document.querySelector("#reservation-notice");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reservationNotice.hidden = false;
  reservationForm.reset();
});