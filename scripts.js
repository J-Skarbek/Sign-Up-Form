const inputs = document.querySelectorAll("input");
const submitBTN = document.getElementById("submit-btn");
let passwordInput = document.getElementById("pw").textContent;
let confirmPwInput = document.getElementById("confirm-pw").textContent;



inputs.forEach(input => {
    input.addEventListener(
        "invalid",
        event => {
            input.classList.add("error");
        },
        false
    );
});


let testPW = (passwordInput, confirmPwInput) => {
    if (passwordInput !== confirmPwInput) {
        alert("The passwords do not match!");
    } else {
        return;
    };
};

submitBTN.addEventListener('click', testPW);