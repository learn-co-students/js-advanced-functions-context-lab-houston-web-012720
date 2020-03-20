/* Your Code Here */

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



let createEmployeeRecord = (arr) => {return {firstName: arr[0], familyName: arr[1], title: arr[2], payPerHour: arr[3], timeInEvents: [], timeOutEvents: []}}
let createEmployeeRecords = (records) => records.map(rec => createEmployeeRecord(rec))

let createTimeInEvent = function (time){this.timeInEvents.push({type: "TimeIn",hour: parseInt(time.split(' ')[1], 10),date: time.split(' ')[0]}); return this}


let createTimeOutEvent = function (time){this.timeOutEvents.push({type: "TimeOut", hour: parseInt(time.split(' ')[1], 10), date: time.split(' ')[0]}); return this}

let hoursWorkedOnDate = function (date){ return (this.timeOutEvents.find(e => e.date == date).hour - this.timeInEvents.find(e => e.date == date).hour)/100}

let wagesEarnedOnDate = function (date) {return hoursWorkedOnDate.call(this,date)*this.payPerHour }





let calculatePayroll = (emps) => emps.reduce((total, emp) => total + allWagesFor.call(emp),0)

let findEmployeeByFirstName = (emps, name) => emps.find(emp => emp.firstName === name)


