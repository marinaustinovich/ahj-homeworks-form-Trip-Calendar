export default function showError(text, container) {
  const error = document.createElement('div');
  error.classList.add('error');
  error.classList.add('error_visible');
  error.innerText = text;
  container.append(error);
}
