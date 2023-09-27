import localeRu from 'dayjs/locale/ru';

const dayjs = require('dayjs');

export default function getDateNow() {
  const dateForInputTo = dayjs().locale(localeRu).format('DD.MM, dd');
  const max = dayjs().add(4, 'month').format('YYYY-MM-DD');
  const dateNow = dayjs().locale(localeRu).format('YYYY-MM-DD');
  const dateForSpanDay = dayjs().locale(localeRu).format('DD.MM');
  const dateForSpanAddDay = dayjs().add(1, 'day').format('DD.MM');
  const dateForSpanAddTwoDay = dayjs().add(2, 'day').format('DD.MM');

  return {
    dateNow,
    max,
    dateForInputTo,
    dateForSpanDay,
    dateForSpanAddDay,
    dateForSpanAddTwoDay,
  };
}
