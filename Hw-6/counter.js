class counterEl extends HTMLElement {
  connectedCallback() {
    function createTag(tagName) {
      return document.createElement(tagName);
    }

    this._counterContainer = createTag("div");
    this._counterContainer.classList.add("counterContainer");

    this._counterNumber = createTag("div");
    this._counterNumber.classList.add("counterNumber");

    this._minusButton = createTag("button");
    this._minusButton.classList.add("minusButton");
    this._minusButton.innerText = "-";

    this._plusButton = createTag("button");
    this._plusButton.classList.add("plusButton");
    this._plusButton.innerText = "+";

    this.appendChild(this._counterContainer);
    this._counterContainer.appendChild(this._minusButton);
    this._counterContainer.appendChild(this._counterNumber);
    this._counterContainer.appendChild(this._plusButton);

    this.update();
  }

  static get observedAttributes() {
    return ["number"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._properties = this._properties || {};
    this._properties[name] = newValue;

    this.update();
  }

  update() {
    if (this._properties) {
      if (this._properties["number"] && this._counterNumber) {
        this._counterNumber.innerText = this._properties["number"];
      }
    }
  }
}

customElements.define("counter-el", counterEl);
