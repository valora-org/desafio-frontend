function month() {
  var today = new Date()
  var priorDate = new Date().setDate(today.getDate() - 30)
  var firstDay = new Date(priorDate)
  // let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  // let firstDay = new Date(y, m, 1);
  // let lastDay = new Date(y, m + 1, 0);

  return { firstDay: firstDay.toISOString().split('T')[0], lastDay: today.toISOString().split('T')[0] }
}

function week() {
  // let curr = new Date; // get current date
  // let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  // let last = first + 6; // last day is the first day + 6

  var today = new Date()
  var priorDate = new Date().setDate(today.getDate() - 7)
  var firstDay = new Date(priorDate)

  return { firstDay: firstDay.toISOString().split('T')[0], lastDay: today.toISOString().split('T')[0] }
}

export { month, week }