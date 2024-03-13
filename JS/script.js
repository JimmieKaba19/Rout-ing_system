//removing access to contextmenu
addEventListener("contextmenu", (e) => {
    //e.preventDefault();
});
// booking page action
/*const booking = document.querySelector(".hero-btn");
booking.addEventListener("click", () => {
    window.open("./booking.html", "self");
});*/

//opening and closing contact form
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

const faqTop = document.querySelector("#booking");
const faqBottom = document.querySelector("#member");

const subBooking = document.querySelector("#sub-booking");
const subMember = document.querySelector("#sub-member");

faqTop.addEventListener("click", () => {
    if(subBooking.style.display == "block"){
        subBooking.style.display = "none";
    } else {
        subBooking.style.display = "block";
        subMember.style.display = "none";
    }
});

faqBottom.addEventListener("click", () => {
    if(subMember.style.display == "block"){
        subMember.style.display = "none";
    } else {
        subMember.style.display = "block";
        subBooking.style.display = "none";
    }
});


// faq.addEventListener("click", (event) => {
//     //alert("clicked");
//     let target = event.target;
//     switch(target.id){
//         case "booking":
//             alert("Clicked booking");
//             break;
//         case "member":
//             alert("clicked member");
//             break;
//     };

//     //subFaqs.style.display = "block";
// });