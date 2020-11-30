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


// Custom Coponent with Shadow DOM
class MyShadowCustomComponent extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    const labelDivCss = `.labeldiv {
      width: 99%;
      position: relative;
      border: 1px red solid;
      padding: 10px;
      height: 20px;
      margin-bottom: 10px;
    }
    .labeldiv span {
      position: absolute;
      top: 2px;
      left: 20px;
      right: auto;
    }
     [dir="rtl"] .labeldiv span, .labeldiv[dir="rtl"] span {
        right: 20px;
        left: auto;
     }`;
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

window.customElements.define('my-shadow-custom-component', MyShadowCustomComponent);

class MyShadowCustomComponentNewLabel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const labelDivCss = `.labeldiv {
      width: 99%;
      position: relative;
      border: 1px red solid;
      padding: 10px;
      height: 20px;
      margin-bottom: 10px;
    }
    .labelDivWrapper {
      position: absolute;
      top: 2px;
      width: 100%;
    }`;
    this.shadow = this.attachShadow({ mode: 'open' });
    const textInput = document.createElement("input");
    textInput.value = "test";
    textInput.type = "text";
    textInput.classList.add("textinput");
    const fakeFloatingLabelDiv = document.createElement("div");
    fakeFloatingLabelDiv.classList.add("labeldiv");
    const floatingLabelDivWrapper = document.createElement("div");
    floatingLabelDivWrapper.classList.add("labelDivWrapper");
    fakeFloatingLabelDiv.appendChild(floatingLabelDivWrapper);
    const fakeFloatingLabelSpan = document.createElement("span");
    fakeFloatingLabelSpan.innerHTML = "Fake floating label";
    floatingLabelDivWrapper.appendChild(fakeFloatingLabelSpan);

    const style = document.createElement("style");
    style.textContent = labelDivCss;
    this.shadowRoot.append(style, fakeFloatingLabelDiv);
    this.shadow.appendChild(fakeFloatingLabelDiv);
    this.shadow.appendChild(textInput);
  }
}

window.customElements.define('my-shadow-custom-component-new-label', MyShadowCustomComponentNewLabel);

