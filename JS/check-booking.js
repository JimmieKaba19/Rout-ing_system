addEventListener("load", () => {
    console.log("page loaded");
});
//booked page actions
const checkBooking  = document.querySelectorAll(".verify-no");
const submitBooking = document.querySelectorAll(".check-ref");
const bookedInfo = document.querySelector(".booked-content");
const otp = document.querySelector(".otp");

checkBooking.forEach((btn) => {
    btn.addEventListener(("click"), (e) => {
        let target = e.target;
        switch(target.id){
            case "booked":
            otp.style.display = "block";
            bookedInfo.style.display = "none"
            console.log("Booked info");
            break;
            case "otp":
            otp.style.display = "none";
            bookedInfo.style.display = "block"
            console.log("otp");
            break;
        }
        
    });
});

submitBooking.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        e.preventDefault()
        
        let email = document.querySelector(".email-check").value;
        let bookingRef = document.querySelector(".booking-ref").value;
        let otpSend = document.querySelector(".email-otp").value;
        
        //check-ref and send otp
        let target = e.target
        switch(target.id){
            case "booked-ticket":
            if(email == "") {
                alert("Fill in details to proceed");
            } else if(bookingRef == "") {
                alert("Fill in Your booking reference (Rout-no) to proceed");
            }else {
                alert("Proceeding");
                const emailConfirm = {
                    email: document.querySelector(".email-check").value,
                    bookingRef: document.querySelector(".booking-ref").value,
                }
                console.log(emailConfirm);
            }
            break;
            case "otp-send":
            if(otpSend == "") {
                alert("Fill in email to proceed");
            } else {
                alert("Proceeding");
                const emailOTP = {
                    otpSend: document.querySelector(".email-otp").value,
                }
                console.log(emailOTP);
            }
            break;
        }
    });
});