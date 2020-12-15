class Matrix {
    
    constructor(numRows, numColumns) {
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    findCoordinate(value) {
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.matrix[0].length; j++){
                if(this.matrix[i][j] === value){
                    return {x: j, y: i}
                }
            }
        }

    }
}