import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeRu from 'dayjs/locale/ru';
import compareDates from './compareDates';
import showError from './showError';
import messages from './messages';

const dayjs = require('dayjs');

export default function createAirDatepicker(el, container) {
  const searchRowTo = container.querySelector('#wg-search-to');
  const searchRowFrom = container.querySelector('#wg-search-from');
  const searchInput = container.querySelector('.wg-search__textinput');
  const containerCalendar = container.querySelector('.wg-row-calendar');

  const calendar = new AirDatepicker(el, {
    selectedDates: [dayjs()],
    minDate: dayjs(),
    maxDate: dayjs().add(4, 'month'),
    buttons: ['today'],
    focusDate: true,
    dateFormat: 'yyyy-MM-dd',
    onSelect({ date, formattedDate }) {
      const error = document.querySelector('.error');
      if (error) error.parentNode.removeChild(error);
      if (date) {
        if (searchRowTo) searchRowTo.setAttribute('data-date', formattedDate);

        if (searchRowFrom) {
          searchRowFrom.setAttribute('data-date', formattedDate);
          const dateTo = document.querySelector('#wg-search-to').dataset.date;

          if (!dateTo) {
            showError(messages.errorNotTo, containerCalendar);
            return;
          }

          if (!compareDates(dateTo, formattedDate)) {
            showError(messages.errorFrom, containerCalendar);
            return;
          }
        }

        searchInput.value = dayjs(formattedDate).locale(localeRu).format('DD.MM, dd');
        const airDatepicker = document.querySelector('.air-datepicker');
        airDatepicker.parentNode.removeChild(airDatepicker);
      }
    },

  });
  calendar.show();
}
