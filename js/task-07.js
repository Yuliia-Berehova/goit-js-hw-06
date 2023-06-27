const fontSizeChangeEL = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onFontSizeChange (event) {
    textEl.style.fontSize =`${event.currentTarget.value}px`;
}
fontSizeChangeEL.addEventListener("input", onFontSizeChange);