import compareDates from './compareDates';
import getDateNow from './getDateNow';
import messages from './messages';

export default class Calendar {
  constructor(container) {
    this.container = container;
    this.calendar = null;
  }

  bindToDOM() {
    this.calendar = document.createElement('div');

    this.calendar.classList.add('wg-datepicker');
    this.calendar.classList.add('wg-search__input-dialog');
    this.calendar.classList.add('wg-search__input-dialog_datepicker');
    const date = getDateNow();

    this.calendar.innerHTML = `
        <input id="calendar" class="datepicker-input" type="date" name="calendar"  min="${date.dateNow}" max="${date.max}" value="${date.dateNow}" ">
        <div class="error"></div>
        `;

    this.container.append(this.calendar);
    const inputDate = this.calendar.querySelector('#calendar');
    inputDate.addEventListener('change', (e) => this.onChange(e));
  }

  onChange(e) {
    const searchRow = e.currentTarget.closest('.wg-search__row');
    const searchRowTo = searchRow.querySelector('#wg-search-to');
    const searchRowFrom = searchRow.querySelector('#wg-search-from');
    const searchInput = searchRow.querySelector('.wg-search__textinput');

    if (searchRowTo) searchRowTo.setAttribute('data-date', e.currentTarget.value);

    if (searchRowFrom) {
      searchRowFrom.setAttribute('data-date', e.currentTarget.value);
      const dateTo = document.querySelector('#wg-search-to').dataset.date;

      if (!dateTo) {
        this.showError(messages.errorNotTo);
        return;
      }

      if (!compareDates(dateTo, e.currentTarget.value)) {
        this.showError(messages.errorFrom);
        return;
      }
    }

    searchInput.value = e.currentTarget.value;
    this.calendar.parentNode.removeChild(this.calendar);
  }

  showError(text) {
    const error = this.calendar.querySelector('.error');
    error.classList.add('error_visible');
    error.innerText = text;
  }
}
