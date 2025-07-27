// Nav Menu 
const menuIcon = document.querySelector(".menu-icon");
const menu = document.getElementById("menu");

menu.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  menu.style.maxHeight = (menu.style.maxHeight === "320px") ? "0px" : "320px";
});

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOut = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const { clientX: posX, clientY: posY } = e;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOut.style.left = `${posX}px`;
  cursorOut.style.top = `${posY}px`;
});

// Video Popup
const circle = document.querySelector('.circle');
const modal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close');
const popupVideo = document.getElementById('popupVideo');

circle.addEventListener('click', () => {
  modal.style.display = 'flex';
  popupVideo.play();
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  popupVideo.pause();
  popupVideo.currentTime = 0;
});

// Loader Animation
const loader = document.querySelector("#loader");

window.addEventListener("load", () => {
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = "0";
  
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

// Form Validation
const form = document.getElementById("testDriveForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const { firstName, phone, email } = form;
  const trimmedFirstName = firstName.value.trim();
  const trimmedPhone = phone.value.trim();
  const trimmedEmail = email.value.trim();

  message.textContent = "";

  // Simple validations
  if (!trimmedFirstName || !trimmedPhone || !trimmedEmail) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  if (!/^\d{10,15}$/.test(trimmedPhone)) {
    message.textContent = "Please enter a valid phone number (10-15 digits).";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Form submitted successfully ✅";

  form.reset();
});
