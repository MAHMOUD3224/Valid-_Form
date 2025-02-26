    let inputValid = document.querySelector(".inp");
    let validForm = document.querySelector("#validForm");
    let submit = document.querySelector('[name = "send"]');
    let message = document.querySelector(".notValid");
    let Success = document.querySelector(".Success");
    let layer = document.querySelector(".layer");
    let dismiss = document.querySelector(".dismiss");

    validForm.addEventListener("submit", function (ele) {
    let value = inputValid.value;
    if (value.includes("@") && value.includes(".com") && value.length > 10 ) {
        message.innerHTML = "";
        Success.classList.add("show");
        layer.classList.add("ground");
        message.style.color = "black";
        inputValid.style.background = "#fff";
    } else {
        message.innerHTML = `* valid email required *`;
        message.style.color = "red";
        inputValid.style.background = "#ff000040";
    }
    inputValid.value = "" ;
    ele.preventDefault();
    });

    dismiss.onclick = function () {
    Success.classList.remove("show");
    layer.classList.remove("ground");
    };
