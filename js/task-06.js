const inputEL = document.querySelector("#validation-input");

 function onInput (event) {
 if (Number(inputEL.value.trim().length) === Number(inputEL.dataset.length)) {
    inputEL.classList.add("valid");
    inputEL.classList.remove('invalid');
 } else {
    inputEL.classList.add("invalid");
 }
}

inputEL.addEventListener("blur", onInput);