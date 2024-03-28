const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        //preventing default
        e.preventDefault();

        //data
        let userName = document.querySelector(".user-name").value;
        let fullname = document.querySelector(".full-name").value;
        let passwordLogin = document.querySelector(".password").value;
        let passwordSign = document.querySelector(".p-word-sign").value;
        let confirmPassword = document.querySelector(".p-word-confirm").value;
        let email = document.querySelector(".email").value;
        let phoneNo = document.querySelector(".phone-no").value;
        let checkBox = document.querySelector(".checkbox");
        let passwordMatch = document.querySelector(".red-notice");

        let target = e.target;
        switch(target.id){
            case "login-f":
                if(passwordLogin === "" || userName === ""){
                    alert("Fill in details to login!");
                } else {
                    alert("Loggin in");
                    window.location.href = "index.html";
                }

                break;
            case "signup-f":
                if(fullname === "" || passwordSign === "" || confirmPassword === "" || email === "" || phoneNo === ""){
                    alert("Please fill on details to signup!")
                } else if(passwordSign !== confirmPassword) {
                    passwordMatch.style.display = "block";
                } else if(checkBox.checked != true) {
                    alert("kindly agree to our terms and conditions to continue!");
                }
                else {
                    alert("Welcome, kindly confirm email to continue.");
                }
                break;
        }

    });
});

//visibility
const visibility = document.querySelector(".visible");
const hide = document.querySelector(".hide");

visibility.addEventListener(("click"), () => {
    alert("revealing");
});

const navBtns = document.querySelectorAll(".titles");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

navBtns.forEach((btn) => {
    btn.addEventListener(("click"), (event) => {
        let target = event.target;
        switch(target.id){
            case "login":
                loginForm.style.display = "block";
                loginBtn.setAttribute("style", "background-color: #3882f6; color: #fff;")
                signupForm.style.display = "none";
                signupBtn.setAttribute("style", "background-color: #f7f9fb; color: #1f2937;")
                break;
            case "signup":
                loginForm.style.display = "none";
                loginBtn.setAttribute("style", "background-color: #f7f9fb; color: #1f2937;")
                signupForm.style.display = "block";
                signupBtn.setAttribute("style", "background-color: #3882f6; color: #fff;")
                break;
        }
    });
});