export default class Popup {
  constructor(container) {
    this.container = container;
    this.popup = null;
  }

  bindToDOM(text) {
    this.popup = document.createElement('div');
    this.popup.classList.add('wg-tip__popup');
    this.popup.innerText = text;

    this.container.append(this.popup);
    this.popup.style.left = `${-this.popup.offsetWidth / 2}px`;
  }
}
