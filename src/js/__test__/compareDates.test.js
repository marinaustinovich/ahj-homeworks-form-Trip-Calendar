import compareDates from '../compareDates';

test(('should be true'), () => {
  expect(compareDates('2023-03-29', '2023-04-01')).toBe(true);
});

test(('should be false'), () => {
  expect(compareDates('2023-04-10', '2023-04-01')).toBe(false);
});
