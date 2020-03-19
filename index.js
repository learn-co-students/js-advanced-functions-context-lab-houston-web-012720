/* Your Code Here */

const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (empls) => 
    empls.map(emp => createEmployeeRecord(emp))

const createTimeInEvent = function(date_s){
    let [date, hour] = date_s.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    })

    return this
}

const createTimeOutEvent = function(date_s){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date_s.split(" ")[0],
        hour: parseInt(date_s.split(" ")[1])
    })
    return this
}

const hoursWorkedOnDate = function(date){
    let time_in = this.timeInEvents.find(date_s => date_s.date === date).hour

    let time_out = this.timeOutEvents.find(date_s => date_s.date === date).hour

    return (time_out - time_in) / 100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map((e) => e.date)

    let payable = eligibleDates.reduce(function (memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = function(arr){
    return arr.reduce(function(sum,element){
        return sum + allWagesFor.call(element)
    },0)
}

const findEmployeeByFirstName = (empls,name) => 
    empls.find(empl => empl.firstName === name )