export default class SearchSubmit {
  constructor(container) {
    this.container = container;
    this.searchSubmit = null;
  }

  bindToDOM() {
    this.searchSubmit = document.createElement('div');
    this.searchSubmit.classList.add('wg-search__col');
    this.searchSubmit.classList.add('wg-search__col_submit');
    this.searchSubmit.innerHTML = `
            <div class="wg-search__row">
                <button class="wg-button wg-button_always-big">Найти</button>
            </div>
        `;

    this.container.append(this.searchSubmit);
  }
}
