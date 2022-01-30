const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var array=new Array();

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    array[0]=email; 
    array[1]=password;
    console.log(array[0],array[1]);

    if (email === "abc@gmail.com" && password === "12345") {
        alert("You have logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})