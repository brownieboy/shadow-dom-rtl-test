
const labelDivCss = `.labeldiv {
  width: 90%;
  border: 1px red solid;
  padding: 10px;
  height: 20px;
  margin-bottom: 10px;
}
.labeldiv span {
  position: absolute;
  left: 20px;
  right: auto;
}
  [dir="rtl"] .labeldiv span {
    right: 20px;
    left: auto;
 }`;

// No Shadow DOM
class MyCustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="labeldiv"><span>Fake floating label</span></div>
    <input type="text" class="textinput" value="test" />`;
  }
}

window.customElements.define('my-custom-component', MyCustomComponent);


// Custom Coponent with Open Shadow DOM
class MyOpenShadowCustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'open' });
    const textInput = document.createElement("input");
    textInput.value = "test";
    textInput.type = "text";
    textInput.classList.add("textinput");
    const fakeFloatingLabelDiv = document.createElement("div");
    fakeFloatingLabelDiv.classList.add("labeldiv");
    const fakeFloatingLabelSpan = document.createElement("span");
    fakeFloatingLabelSpan.innerHTML = "Fake floating label";
    fakeFloatingLabelDiv.appendChild(fakeFloatingLabelSpan);

    const style = document.createElement("style");
    style.textContent = labelDivCss;
    this.shadowRoot.append(style, fakeFloatingLabelDiv);
    this.shadow.appendChild(fakeFloatingLabelDiv);
    this.shadow.appendChild(textInput);

  }
}

window.customElements.define('my-open-shadow-custom-component', MyOpenShadowCustomComponent);

// Custom component with Closed Shadow DOM
class MyClosedShadowCustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'closed' });
    const textInput = document.createElement("input");
    textInput.value = "test";
    textInput.type = "text";
    textInput.classList.add("textinput");
    this.shadow.appendChild(textInput);
  }
}

window.customElements.define('my-closed-shadow-custom-component', MyClosedShadowCustomComponent);
