// Write your solution in this file!
const employee = {
    name: 'David', 
    streetAddress: '47th street'}

function updateEmployeeWithKeyAndValue(employee, key, value ){
    const newEmp={...employee};
    newEmp[key]=value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmp = Object.assign({}, employee);
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}