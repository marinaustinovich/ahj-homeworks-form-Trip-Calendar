import Calendar from './Calendar';
import getDateNow from './getDateNow';
import messages from './messages';
import Popup from './Popup';

export default class SearchDate {
  constructor(container) {
    this.container = container;
    this.searchDate = null;
  }

  bindToDOM() {
    this.searchDate = document.createElement('div');
    this.searchDate.classList.add('wg-search__col');
    this.searchDate.classList.add('wg-search__col_date');
    this.searchDate.innerHTML = `
      <div class="wg-search__col-wrap">
        <div class="wg-search__tablet-wrap">
          <div class="wg-search__col wg-search__col_date-to">
              <div class="wg-search__row">
                <div class="wg-search__label">Дата туда</div>
                <div class="wg-search__tip">
                  <div id="popup-to" class="wg-tip">
                    <span class="wg-tip__button"><span class="wg-icon wg-icon_info"></span></span>
                  </div>
                </div>
                <div class="wg-search__datepicker-set">
                  <div class="wg-search__datepicker-set-item">
                    <div class="wg-search__datepicker">
                      <div class="wg-search__datepicker-wrap">
                        <div id="wg-search-to"  class="wg-row-calendar">
                          <input readonly="" type="text" data-field="" class="wg-search__textinput wg-search__textinput_wide t_arrival_place" placeholder="Туда" value="${getDateNow().dateForInputTo}">
                          <span class="wg-icon wg-icon_calendar wg-search__calendar-icon"></span>
                        </div>
                      </div>
                    </div>
                    <div class="wg-search__example wg-search__example_date">
                      <span class="wg-search__example-item">
                      <span class="wg-search__example-item">${getDateNow().dateForSpanDay}</span>,&nbsp;<span class="wg-search__example-item">${getDateNow().dateForSpanAddDay}</span>,&nbsp;<span class="wg-search__example-item">${getDateNow().dateForSpanAddTwoDay}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wg-search__col wg-search__col_date-to">
              <div class="wg-search__row">
                <div class="wg-search__label">Дата обратно</div>
                <div class="wg-search__tip">
                  <div id="popup-from" class="wg-tip">
                    <span class="wg-tip__button"><span class="wg-icon wg-icon_info"></span></span>
                  </div>
                </div>
                <div class="wg-search__datepicker-set">
                  <div class="wg-search__datepicker-set-item">
                    <div class="wg-search__datepicker">
                      <div class="wg-search__datepicker-wrap">
                        <div id="wg-search-from" class="wg-row-calendar">
                          <input readonly="" type="text" data-field="" class="wg-search__textinput wg-search__textinput_wide" placeholder="Обратно" value="">
                          <span class="wg-icon wg-icon_calendar wg-search__calendar-icon"></span>
                        </div>
                      </div>
                    </div>
                    <div class="wg-search__example wg-search__example_date">
                      <span class="wg-search__example-item">${getDateNow().dateForSpanDay}</span>,&nbsp;<span class="wg-search__example-item">${getDateNow().dateForSpanAddDay}</span>,&nbsp;<span class="wg-search__example-item">${getDateNow().dateForSpanAddTwoDay}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      `;

    this.container.append(this.searchDate);
    this.events();
  }

  events() {
    const tipFrom = this.container.querySelector('#popup-from .wg-tip__button');
    const tipTo = this.container.querySelector('#popup-to .wg-tip__button');
    const calendarIcons = this.container.querySelectorAll('.wg-icon_calendar');

    calendarIcons.forEach((el) => el.addEventListener('click', (e) => this.showCalendar(e)));
    tipFrom.addEventListener('mouseover', () => this.showPopup('#popup-from', messages.popupFrom));
    tipTo.addEventListener('mouseover', () => this.showPopup('#popup-to', messages.popupTo));
    tipFrom.addEventListener('mouseout', (e) => this.deletePopup(e));
    tipTo.addEventListener('mouseout', (e) => this.deletePopup(e));
  }

  showPopup(id, message) {
    const popupContainer = this.container.querySelector(id);
    const popup = new Popup(popupContainer);
    popup.bindToDOM(message);
  }

  /* eslint-disable */
  deletePopup(e) {
    const popupContainer = e.target.closest('.wg-tip');
    const popup = popupContainer.querySelector('.wg-tip__popup');
    popupContainer.removeChild(popup);
  }

  showCalendar(e) {
    const isCalendar = this.container.querySelector('.wg-datepicker');
    if (isCalendar) isCalendar.parentNode.removeChild(isCalendar);
    const container = e.target.closest('.wg-row-calendar');
    const calendar = new Calendar(container);
    calendar.bindToDOM();
  }
}
