class ErrorNotification {
  constructor(text, container) {
    this.text = text;
    this.container = container;
  }

  showError() {
    const error = document.createElement('div');
    error.classList.add('error');
    error.classList.add('error_visible');
    error.innerText = this.text;
    this.container.append(error);
  }
}

export default ErrorNotification;
