import getDateNow from '../getDateNow';

test(('should be 2023-03-29 for now'), () => {
  expect(getDateNow().dateNow).toBe('2023-03-29');
});

test(('should be 29.03 for now'), () => {
  expect(getDateNow().dateForSpanDay).toBe('29.03');
});

test(('should be 31.03 for now'), () => {
  expect(getDateNow().dateForSpanAddTwoDay).toBe('31.03');
});

test(('should be 30.03 for now'), () => {
  expect(getDateNow().dateForSpanAddDay).toBe('30.03');
});

test(('should be 2023-07-29 for now'), () => {
  expect(getDateNow().max).toBe('2023-07-29');
});
