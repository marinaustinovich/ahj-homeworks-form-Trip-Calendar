import getDateNow from '../getDateNow';
import localeRu from 'dayjs/locale/ru';

const dayjs = require('dayjs'); // import dayjs from 'dayjs'

test(('should be 2023-03-29 for now'), () => {
  const expected = dayjs().locale(localeRu).format('YYYY-MM-DD');
  expect(getDateNow().dateNow).toBe(expected);
});

test(('should be 29.03 for now'), () => {
  const expected = dayjs().locale(localeRu).format('DD.MM');
  expect(getDateNow().dateForSpanDay).toBe(expected);
});

test(('should be 31.03 for now'), () => {
  const expected = dayjs().add(2, 'day').format('DD.MM');
  expect(getDateNow().dateForSpanAddTwoDay).toBe(expected);
});

test(('should be 30.03 for now'), () => {
  const expected = dayjs().add(1, 'day').format('DD.MM');
  expect(getDateNow().dateForSpanAddDay).toBe(expected);
});

test(('should be 2023-07-29 for now'), () => {
  const expected = dayjs().add(4, 'month').format('YYYY-MM-DD');
  expect(getDateNow().max).toBe(expected);
});
