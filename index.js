// Your code here
function saturdayFun(activity="roller-skate") {
    return "This Saturday, I want to " + `${activity}` + "!"
}

const mondayWork = function(activity="go to the office") {
    return "This Monday, I will " + `${activity}` + "."
}

function wrapAdjective(param="*") {
    return function(adj="special") {
        return `You are ${param}${adj}${param}!`
    }
}

const Calculator = { 
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(startInt, funcArray) {
    if (funcArray.length === 0) {
        return startInt
    } else {
        for (const func of funcArray) {
            startInt = func(startInt)
        }
    }
    return startInt
}