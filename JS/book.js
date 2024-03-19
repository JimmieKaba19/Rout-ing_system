// booking page action
const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (e) => {
    //prevent default submission action(auctomatically get booking.html)
    e.preventDefault();

    let from = document.querySelector(".from").value;
    let to = document.querySelector(".to").value;
    let date = document.querySelector(".date").value; //return date is optional hence only selecting D1
    let time = document.querySelector(".time").value;

    if(from === "" || to === "" || date === "" || time === "") {
        alert("please fill in all the fields!");
    }
    else {
        window.location.href = `booking.html`
        //`?from= ${from} to= ${to} date= ${date} time= ${time}`;
    }
});

const booking = document.querySelector(".submit");
const inputFields = document.querySelectorAll("input");

inputFields.forEach((input) => {
    input.addEventListener(("focus"), () => {
        input.focus();
    });
});