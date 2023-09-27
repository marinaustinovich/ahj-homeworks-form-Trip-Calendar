export default class SearchWay {
  constructor(container) {
    this.container = container;
    this.searchWay = null;
  }

  bindToDOM() {
    this.searchWay = document.createElement('div');
    this.searchWay.classList.add('wg-search__col');
    this.searchWay.classList.add('wg-search__col_way');
    this.searchWay.innerHTML = `
      <div class="wg-search__col-wrap">
        <div class="wg-search__col wg-search__col_way-from">
          <div class="wg-search__row">
            <div class="wg-search__label">Откуда</div>
            <div role="combobox" class="">
              <input type="text" class="wg-search__textinput wg-search__textinput_wide t_depart_place" placeholder="Откуда" value="">
              <div role="listbox" class="wg-autocomplete wg-search__input-dialog"></div>
            </div>
            <div class="wg-search__example">
              <span class="wg-search__example-item">Москва</span>
              <span class="wg-search__example-item">Санкт-Петербург</span>
            </div>
          </div>
        </div>
        <div class="wg-search__col wg-search__col_switch">
          <span class="wg-icon wg-icon_change wg-search__switch"></span>
        </div>
        <div class="wg-search__col wg-search__col_way-to">
          <div class="wg-search__row">
            <div class="wg-search__label">Куда</div>
            <div role="combobox" class="">
              <input type="text" class="wg-search__textinput wg-search__textinput_wide t_arrival_place" placeholder="Куда" value="">
              <div role="listbox" class="wg-autocomplete wg-search__input-dialog"></div>
          </div>
          <div class="wg-search__example">
              <span class="wg-search__example-item">Санкт-Петербург</span>
              <span class="wg-search__example-item">Москва</span>
          </div>
        </div>
      </div>
    `;

    this.container.append(this.searchWay);
  }
}
