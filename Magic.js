    let inputValid = document.querySelector(".inp");
    let validForm = document.querySelector("#validForm");
    let submit = document.querySelector('[name = "send"]');
    let message = document.querySelector(".notValid");
    let Success = document.querySelector(".Success");
    let layer = document.querySelector(".layer");
    let dismiss = document.querySelector(".dismiss");

    validForm.addEventListener("submit", function (ele) {
    let value = inputValid.value;
    if (value.includes("@") && value.includes(".com") && value.length > 9 ) {
        message.innerHTML = "";
        Success.classList.add("show");
        layer.classList.add("ground");
    } else {
        message.innerHTML = `* valid email required *`;
        message.style.color = "red";
        submit.computedStyleMap.background = "#ff000042";
        submit.computedStyleMap.color = "#ff000042";
    }
    inputValid.value = "" ;
    ele.preventDefault();
    });

    dismiss.onclick = function () {
    Success.classList.remove("show");
    layer.classList.remove("ground");
    };
