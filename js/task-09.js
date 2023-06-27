function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const  colorEL = document.querySelector(".color");
const bodyEl = document.querySelector("body");
const buttonEL = document.querySelector(".change-color");

buttonEL.addEventListener("click", onChangeColor);

function onChangeColor(event){
  
  colorEL.textContent = getRandomHexColor();

  bodyEl.style.backgroundColor = colorEL.textContent;
  
}


