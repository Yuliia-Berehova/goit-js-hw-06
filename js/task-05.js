const userNameInputEL = document.querySelector("#name-input");
const userNameOutputEL = document.querySelector("#name-output");

userNameInputEL.addEventListener("input", (element) => {

    if(element.target.value.trim() === ''){
        userNameOutputEL.textContent = 'Anonymous';
    } else {
        userNameOutputEL.textContent = element.target.value.trim();
    }
    
})