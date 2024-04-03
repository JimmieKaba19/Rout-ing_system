`use strict`;
// select elements
const vehicleEl = document.getElementById(`vehicle`);
const seatContainerEl = document.querySelector(`.seating-container`);
const countEl = document.getElementById(`count`);
const totalEl = document.getElementById(`total`);
const last = document.querySelector(".last");
const amountToPay = document.querySelectorAll(".ticket-price");
const userSeat = document.querySelector(".seats-booked");
const seatNo = document.querySelector(".seat-number");

// global variables
let seatCount = 0;
let totalCost;
let ticketPrice = Number(vehicleEl.value);

// function
const totalPrice = function () {
  ticketPrice = Number(vehicleEl.value);
  countEl.textContent = seatCount;
  totalCost = seatCount * ticketPrice;
  totalEl.innerText = totalCost;
  amountToPay.forEach((amout) => {
    amout.textContent = totalCost
  });
  //userSeat.textContent = 
  seatNo.textContent = seatCount;
  return seatCount;
};

// event listeners
vehicleEl.addEventListener(`change`, function () {
  ticketPrice = Number(vehicleEl.value);
  if(vehicleEl.value == "850") {
    last.style.display = "none";
    alert("Selecting 11 seater configuration")
  } else {
    last.style.display = "flex";
  }
 
  totalPrice();
});
seatContainerEl.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`seat`)) {
    if (!e.target.classList.contains(`sold`) && !e.target.classList.contains(`driver`)) {
      e.target.classList.toggle(`selected`);
      const selectedSeatEl = document.querySelectorAll(`.row .seat.selected`);
      seatCount = selectedSeatEl.length;
      totalPrice();
    }
  }
});

// trip info content
const alertPopUp = document.querySelector(".alert-content")
const infoAlert = document.querySelector(".info-alert");
const alertClose = document.querySelector(".close-alert");
const majorBtns = document.querySelectorAll(".trip-btns");
const extraPay = document.querySelector(".extra-pay");
const extraTicket = document.querySelector(".extra-ticket");
const promptChange = document.querySelectorAll(".manual-info");
const promptPay = document.querySelector(".prompt-content");
const manualPay = document.querySelector(".manual-pay");

//alert
function alertPop(){
  alertPopUp.style.display = "block";
  alertClose.style.display = "block";
  alertPopUp.setAttribute("style", "display: flex; justify-content: space-between; align-items: center;")
  infoAlert.textContent = `Thank you for booking with us, download your ticket below!`;
  alertClose.addEventListener("click", () => {
      if(alertPopUp.style.display == "block") {
          alertPopUp.style.display = "none";
      } else {
          alertPopUp.style.display = "block";
      }
  });
}

majorBtns.forEach((userBtn) => {
  userBtn.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id){
      case "edit":
        window.location.href = "./booking.html";
        break;
      case "confirm":
        let proceed = confirm("Ensure all details are true!");
        if(proceed == false) {
          alert("Kindly double check before proceeding!")
        } else if(seatCount === 0) {
          alert("Ensure you have selected a seat!")
        } else {
          extraPay.style.display = "block";
        }
        break;
      case "prompt-call":
        let phoneSend = document.querySelector(".phone-no").value;
        if(phoneSend == "") {
          alert("Enter Phone number to proceed");
        } else {
          alert("Check your mobile device for prompt!");
          let confirmed = confirm("Have you received the code?")
          if(confirmed == true) {
            alertPop();
            extraTicket.style.display = "block";
          } else {
            alert("Click on 'Didn't receive prompt' to give Mpesa reference code!");
          }
        }
        break;
      case "validate":
        let mpesaRef = document.querySelector(".pay-ref-no").value;
        if(mpesaRef == "") {
          alert("Enter Mpesa reference code to proceed!");
        } else {
          if(mpesaRef === "A1B2C3D4E5") {
            alertPop();
            extraTicket.style.display = "block";
          } else {
            alert("Kindly verify your Mpesa reference code!");
          }
        }
        break;
      case "t-download":
        alert("Downloading ticket, have a safe journey :)");
        break;
    }
  });
});

promptChange.forEach((promptP) => {
  promptP.addEventListener("click", (e)=> {
    let target = e.target;
    switch(target.id){
      case "pay-manual":
        manualPay.style.display = "flex";
        promptPay.style.display = "none";
        break;
      case "pay-prompt":
        manualPay.style.display = "none";
        promptPay.style.display = "flex";
        break;
    }
  });
});
