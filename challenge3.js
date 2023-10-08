//Net salary calculator
//This programs expects you to insert your basic salary, for it to compute and give you your net salary.

function netSalary(basicSalary){ // this parameter expectes the basic salary to be inserted as an argument.
    let paye = basicSalary * 0.1 // the program then computes the paye expected from the basic salary.
    let nhif = basicSalary * 0.25 // the program computes the nhif amount expected from the basic salary
    let nssf = basicSalary * 0.06 // the program calculates the nssf amount expected from the salary.
    let deductions = paye + nhif + nssf  // all the deductions are total so as to know how much is to be deducted from the basic salary.
    return basicSalary - deductions   // since basic salary is all deductions plus the net salary, the program decucts all decuctions to get the net salary.
}
console.log(netSalary(50000))  // here you insert your basic salary for the program to calculate your net salary.