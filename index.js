let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

let x = 0

// Your Code Here
for(  x = 0; x < weeklyExpenseQuestions.length; x++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[x]))
    weeklyExpenses += answer
}

for ( x = 0; x < monthlyExpenseQuestions.length; x++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[x]))
    monthlyExpenses += answer
}

for ( x = 0; x < annualExpenseQuestions.length; x++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[x]))
    annualExpenses += answer
}