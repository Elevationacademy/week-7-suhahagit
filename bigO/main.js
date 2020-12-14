
//Big O - Time Complexity

//ex1 - o(n)
//ex2 - o(log(n))
//ex3 - o(1)
//ex4 - o(mn)
//ex5 - o(n)

//ex6
const findDuplicates = (arr) => {
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if (obj[i]){
            console.log('there is a duplicate')
            return
        }else{
            obj[i] = arr[i]
        }
    }
}

//ex7
spreadSheetData = [{_id: 'ax01', name: 'Ray', age: 28, salary: 1300},
    {_id: 'qs84', name: 'Lucius', age: 31, salary: 840},
    {_id: 'bg33', name: 'Taylor', age: 18, salary: 2700}]
const findEmployeeSalary = employeeID => spreadSheetData.find(s => s.id === employeeID).salary

//ex9
//green: o(1) = constant time 
//yellow: o(log(n)) = logarithmic time
//blue: o(n) = linear time
//red: o(n2) = quadratic time