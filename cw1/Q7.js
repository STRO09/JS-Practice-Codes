// Write a Function to Filter Employees Earning More Than a Certain Amount from an  Array of Employee Objects.

const Employees = [{

    name: 'A',
    id: 1, 
    sal: 50000
},
{
    name: 'B',
    id: 2, 
    sal: 60000
},
{
    name: 'C',
    id: 3, 
    sal: 30000
}]

function FilterLessEarningEmployees(employees) {
 return employees.filter((Employee)=>{
    return Employee.sal>=50000
 })
}

console.log(FilterLessEarningEmployees(Employees))