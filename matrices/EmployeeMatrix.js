
const matrix = require('./Matrix')

class EmployeeMatrix extends matrix{
    loadData(salaryData){
        this.matrix = salaryData.map(s => {return [s._id, s.name, s.department, s.salary]})
    }

}
