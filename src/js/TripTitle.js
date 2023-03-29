export default class TripTitle {
  constructor(container) {
    this.container = container;
    this.tripTitle = null;
  }

  bindToDOM() {
    this.tripTitle = document.createElement('div');
    this.tripTitle.classList.add('calendar-title');
    this.tripTitle.setAttribute('id', 'rec323470255');
    this.tripTitle.setAttribute('data-animationappear', 'off');

    this.tripTitle.innerHTML = `
    <div class="t030">
      <div class="t-container t-align_center">
        <div class="t-col t-col_12 "> 
          <h1 class="title" field="title">ЖД Билеты Онлайн</h1>
          <div class="calendar-text" field="descr">Удобный онлайн сервис для покупки билетов на поезда РЖД</div>
        </div>
      </div>
    </div>
    `;

    this.container.append(this.tripTitle);
  }
}
