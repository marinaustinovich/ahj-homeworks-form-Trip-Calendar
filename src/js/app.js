import SearchForm from './SearchForm';
import TripTitle from './TripTitle';

/* eslint-disable */
console.log('it works!');
const calendarContainer = document.querySelector('#calendar-container');
const tripTitle = new TripTitle(calendarContainer);
const searchForm = new SearchForm(calendarContainer);

tripTitle.bindToDOM();
searchForm.bindToDOM();



