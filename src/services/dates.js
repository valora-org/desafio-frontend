function month() {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let firstDay = new Date(y, m, 1);
  let lastDay = new Date(y, m + 1, 0);

  return { firstDay: firstDay.toISOString().split('T')[0], lastDay: lastDay.toISOString().split('T')[0] }
}

function week() {
  let curr = new Date; // get current date
  let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  let last = first + 6; // last day is the first day + 6

  let firstDay = new Date(curr.setDate(first)).toISOString().split('T')[0];
  let lastDay = new Date(curr.setDate(last)).toISOString().split('T')[0];

  return { firstDay, lastDay }
}

export { month, week }