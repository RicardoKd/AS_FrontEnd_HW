class userCard extends HTMLElement {
  connectedCallback() {
    this._userContainer = document.createElement("div");
    this._userContainer.classList.add("userContainer");

    this._photo = document.createElement('img');
    this._photo.classList.add("userImage");

    this._name = document.createElement('p');
    this._name.classList.add("userName");

    this.appendChild(this._userContainer);
    this._userContainer.appendChild(this._photo);
    this._userContainer.appendChild(this._name);

    this.update();
  }

  static get observedAttributes() {
    return ['photo', 'name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._properties = this._properties || {};
    this._properties[name] = newValue;

    this.update();
  }

  update() {
    if (this._properties) {
      if (this._properties['photo'] && this._photo) {
        this._photo.src = this._properties['photo'];
      }
      if (this._properties['name'] && this._name) {
        this._name.textContent = this._properties['name'];
      }
    }
  }
}

customElements.define('user-card', userCard);