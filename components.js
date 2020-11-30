
// No Shadow DOM

class MyCustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // // No Shadow DOM here.
    this.appendChild(templateContent.cloneNode(true));
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
     this.shadow.appendChild(templateContent.cloneNode(true));

    const style = document.createElement("style");
    style.textContent = labelDivCss;
    this.shadowRoot.append(style);
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
    this.shadow.appendChild(templateContent.cloneNode(true));

   const style = document.createElement("style");
   style.textContent = labelDivCss;
   this.shadowRoot.append(style);
  }
}

window.customElements.define('my-shadow-custom-component-new-label', MyShadowCustomComponentNewLabel);

