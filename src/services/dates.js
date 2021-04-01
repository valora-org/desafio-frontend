function month() {
  var today = new Date()
  var priorDate = new Date().setDate(today.getDate() - 30)
  var firstDay = new Date(priorDate)

  return { firstDay: firstDay.toISOString().split('T')[0], lastDay: today.toISOString().split('T')[0] }
}

function week() {
  var today = new Date()
  var priorDate = new Date().setDate(today.getDate() - 7)
  var firstDay = new Date(priorDate)

  return { firstDay: firstDay.toISOString().split('T')[0], lastDay: today.toISOString().split('T')[0] }
}

export { month, week }