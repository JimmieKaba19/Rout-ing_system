const open = document.querySelector(".open-form");
const form = document.querySelector(".form-section");
const bform = document.querySelector(".contact-bform");

open.addEventListener("click", () => {
    form.style.display = "block";
    bform.style.display = "none";
});


const close = document.querySelector(".close-form");

close.addEventListener("click", () => {
    form.style.display = "none";
    bform.style.display = "block";
});