const dayjs = require('dayjs');

export default function compareDates(to, from) {
  return !(dayjs(to).diff(dayjs(from)) > 0);
}
