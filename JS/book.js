// booking page action
const bookingForm = document.querySelector(".booking-form");
const alertArea = document.querySelector(".search-alert")
const resultsAlert = document.querySelector(".results-alert");
const searchClose = document.querySelector(".close-search");
const SubmitSearch = document.querySelector(".submit");
const tripsAvailable = document.querySelectorAll(".boarding-current");
const bookButtons = document.querySelectorAll(".book-ticket");

//booking form 
bookingForm.addEventListener("submit", (e) => {
    //prevent default submission action(auctomatically get booking.html)
    e.preventDefault();
    
    let from = document.querySelector(".from").value.toLowerCase();
    let to = document.querySelector(".to").value.toLowerCase();
    let date = document.querySelector(".date").value; 
    let returnDate = document.querySelector(".r-date").value;//return date is optional
    let time = document.querySelector(".time").value;
    let pickUp = document.querySelector(".pickup").value;

    if(window.location.href == "index.html") {
        window.location.href = `booking.html`
    } else if(from === "" || to === "" || date === "" || time === "" || pickUp == "") {
        alert("please fill in all the fields!");
    } else if (from == "nanyuki" && to == "nairobi") {
        //search alert and submit search 
        alertArea.style.display = "block";
        searchClose.style.display = "block";
        alertArea.setAttribute("style", "display: flex; justify-content: space-between; align-items: center;")
        resultsAlert.textContent = `Search results available for departure: ${from} and destination: ${to}`;
        searchClose.addEventListener("click", () => {
            if(alertArea.style.display == "block") {
                alertArea.style.display = "none";
            } else {
                alertArea.style.display = "block";
            }
        });

        // trip available and redirect
        tripsAvailable.forEach(trip => {
            trip.style.display = "flex";
        });

        bookButtons.forEach((bookBtn) => {
            bookBtn.addEventListener("click", () => {
                window.location.href = "./pay-confirm.html";
            });
        });

        //collect user trip data for usage
        const tripInfo = {
            from: document.querySelector(".from").value.toLowerCase(),
            to: document.querySelector(".to").value.toLowerCase(),
            date: document.querySelector(".date").value, 
            returnDate: document.querySelector(".r-date").value,
            time: document.querySelector(".time").value,
            pickUp: document.querySelector(".pickup").value,
        }
        console.log(tripInfo);

    } else {
        alert("Trip request currently unavailable!")
    }
});

const booking = document.querySelector(".submit");
const inputFields = document.querySelectorAll("input");

inputFields.forEach((input) => {
    input.addEventListener(("focus"), () => {
        input.focus();
    });
});