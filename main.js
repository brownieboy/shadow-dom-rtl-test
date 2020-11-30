const rtlRadioElem = document.querySelectorAll("[name=dirpropradio]");
const bodyElement = document.querySelector("body");


rtlRadioElem.forEach(elem => {
  elem.addEventListener('change', (event) => {
    const value=Array.from(rtlRadioElem).find(radio => radio.checked).value;
    bodyElement.setAttribute("dir", value);
  });
});

const template = document.getElementById("inputWithFloatingLabel");
const templateContent = template.content;
document.getElementById("mainHtmlVersion").appendChild(templateContent.cloneNode(true));
