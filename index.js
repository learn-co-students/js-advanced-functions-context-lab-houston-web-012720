/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function() {
//     let eligibleDates = this.timeInEvents.map(function(e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d) {
//             return memo + wagesEarnedOnDate.call(this, d)
//         }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

// Your code here

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfarray) {
    return arrayOfarray.map(function(arrayOfobject) {
        return createEmployeeRecord(arrayOfobject)
    })
}

function createTimeInEvent(date) {
    const [day, hour] = date.split(' ')

    this.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour, 10), date: day })
    return this
}

function createTimeOutEvent(date) {
    const [day, hour] = date.split(' ')

    this.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour, 10), date: day })
    return this
}


function hoursWorkedOnDate(date) {
    let timeinevent = this.timeInEvents.find(function(one) {
        return one.date == date
    })

    let timeoutevent = this.timeOutEvents.find(function(one) {
        return one.date == date
    })

    return (timeoutevent.hour - timeinevent.hour) / 100

}


function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function allWagesFor() {
    return this.timeInEvents.reduce(function(acc, timeineventt) {
        return acc += wagesEarnedOnDate.call(this, timeineventt.date)
    }.bind(this), 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(e) {
        return e.firstName == firstName
    })

}

function calculatePayroll(arrayofrecord) {
    return arrayofrecord.reduce(function(acc, employee) {
        return acc += allWagesFor.call(employee)
    }, 0)
}