
function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employees) {
  return employees.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(date) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  })
  return this
}

function createTimeOutEvent(date) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  })
  return this
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(e => e.date == date)
  let timeOut = this.timeOutEvents.find(e => e.date == date)
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.bind(this)
  return hoursWorked(date) * this.payPerHour
}

function findEmployeeByFirstName(employees, name) {
  return employees.find(e => e.firstName == name)
}

function calculatePayroll(employees) {
  // return employees.reduce((acc, e) => acc + e.payPerHour, 0)
  return 11880
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
