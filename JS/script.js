//removing access to contextmenu
addEventListener("contextmenu", (e) => {
    //e.preventDefault();
});

// booking page action
const booking = document.querySelector(".submit");
const inputFields = document.querySelectorAll("input");

inputFields.forEach((input) => {
    input.addEventListener(("focus"), () => {
        input.focus();
    });
});

//query selectors
const open = document.querySelector(".open-form");
const form = document.querySelector(".form-section");
const bform = document.querySelector(".contact-bform");
const faqTop = document.querySelector("#booking");
const faqBottom = document.querySelector("#member");
const subBooking = document.querySelector("#sub-booking");
const subMember = document.querySelector("#sub-member");
const subFaq = document.querySelectorAll(".sub-faqs-top");
const faqsBottom = document.querySelectorAll(".sub-faqs-bottom");

open.addEventListener("click", () => {
    form.style.display = "block";
    bform.style.display = "none";
});

//close contact form
const close = document.querySelector(".close-form");

close.addEventListener("click", () => {
    form.style.display = "none";
    bform.style.display = "block";
});

{faqTop.addEventListener("click", () => {
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
});}

subFaq.forEach((button) => {
    button.addEventListener(("click"), () => {
        faqsBottom.forEach((faqs) => {
            if(subBooking.style.display == "block"){
                faqs.style.display = "block";
            } else if (subMember.style.display = "block") {
                faqs.style.display = "block";
            }else {
                faqs.style.display = "none";
                //faqs.style.display = "none";
            }
            
        });
    });
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