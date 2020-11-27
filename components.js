class MyCustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connectedCallback');
    this.innerHTML = '<input type="text" class="textinput" value="test" />';
  }
}

window.customElements.define('my-custom-component', MyCustomComponent);


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
    this.shadow.appendChild(textInput);
  }
}

window.customElements.define('my-open-shadow-custom-component', MyOpenShadowCustomComponent);

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
