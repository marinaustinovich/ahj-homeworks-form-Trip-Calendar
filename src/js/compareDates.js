const dayjs = require('dayjs'); // import dayjs from 'dayjs'

export default function compareDates(to, from) {
  return !(dayjs(to).diff(dayjs(from)) > 0);
}
