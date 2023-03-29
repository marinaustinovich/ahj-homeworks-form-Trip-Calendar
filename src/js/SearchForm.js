import SearchDate from './SearchDate';
import SearchSubmit from './SearchSubmit';
import SearchWay from './SearchWay';

export default class SearchForm {
  constructor(container) {
    this.container = container;
    this.searchForm = null;
  }

  bindToDOM() {
    this.searchForm = document.createElement('div');
    this.searchForm.classList.add('calendar-content');
    this.searchForm.setAttribute('id', 'rec406590996');
    this.searchForm.setAttribute('data-animationappear', 'off');
    this.searchForm.innerHTML = `
    <div class="t123">
      <div class="t-container_100">
        <div class="t-width t-width_100">
          <div id="ufs-railway-app" class="no-touchevents">
            <div class="ufs-railway-app">
              <div class="wg-search">
                <div class="wg-search__inner">
                  <div class="wg-search__col-wrap"></div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    `;
    const searchColWrap = this.searchForm.querySelector('.wg-search__col-wrap');
    const searchWay = new SearchWay(searchColWrap);
    const searchDate = new SearchDate(searchColWrap);
    const searchSubmit = new SearchSubmit(searchColWrap);

    searchWay.bindToDOM();
    searchDate.bindToDOM();
    searchSubmit.bindToDOM();
    this.container.append(this.searchForm);
  }
}
