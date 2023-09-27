import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeRu from 'dayjs/locale/ru';
import compareDates from './utils/compareDates';
import messages from './messages';
import ErrorNotification from './ErrorNotification';

const dayjs = require('dayjs');

export default class AirDatePickerCreator {
  constructor(el, container) {
    this.el = el;
    this.container = container;
    this.searchRowTo = this.container.querySelector('#wg-search-to');
    this.searchRowFrom = this.container.querySelector('#wg-search-from');
    this.searchInput = this.container.querySelector('.wg-search__textinput');
    this.containerCalendar = this.container.querySelector('.wg-row-calendar');
  }

  create() {
    const calendar = new AirDatepicker(this.el, {
      selectedDates: [dayjs()],
      minDate: dayjs(),
      maxDate: dayjs().add(4, 'month'),
      buttons: ['today'],
      focusDate: true,
      dateFormat: 'yyyy-MM-dd',
      onSelect: ({ date, formattedDate }) => this.onSelect(date, formattedDate),
    });

    calendar.show();
  }

  onSelect(date, formattedDate) {
    const errorElement = document.querySelector('.error');
    if (errorElement) errorElement.parentNode.removeChild(errorElement);

    if (date) {
      if (this.searchRowTo) this.searchRowTo.setAttribute('data-date', formattedDate);

      if (this.searchRowFrom) {
        this.searchRowFrom.setAttribute('data-date', formattedDate);
        const dateTo = document.querySelector('#wg-search-to').dataset.date;

        if (!dateTo) {
          new ErrorNotification(messages.errorNotTo, this.containerCalendar).showError();
          return;
        }

        if (!compareDates(dateTo, formattedDate)) {
          new ErrorNotification(messages.errorFrom, this.containerCalendar).showError();
          return;
        }
      }

      this.searchInput.value = dayjs(formattedDate)
        .locale(localeRu)
        .format('DD.MM, dd');
      const airDatepicker = document.querySelector('.air-datepicker');
      airDatepicker.parentNode.removeChild(airDatepicker);
    }
  }
}
