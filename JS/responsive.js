//responsive functionality
const openHam = document.querySelector("#open-ham");
const closeHam = document.querySelector("#close-ham");
const navItems = document.querySelector(".navigation-items");

const hamburgerEvent = (navigation, close, open) => {
    navItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener("click", () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener("click", () => hamburgerEvent("none", "none", "block"));