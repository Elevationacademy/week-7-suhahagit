
//Algorithms Exercises

//ex1
const printStar = num => {
    let stars = '*'
    for(let i = 0; i < num; i++){
        console.log(stars)
        stars += '*'
    }
}

printStar(7)
//--------------------------------------------------

//ex2
const printBackwardStars  = num => {
    let stars = ''
    for(let i = 0; i < num; i++){
        stars += '*'
    }
    for(let j = 0; j < num; j++){
        console.log(stars)
        stars = stars.slice(0, -1)
    }
}

printBackwardStars(7)

//-------------------------------------------------------

//ex3
const printStarSeries = (num, count) => {
    for (let j = 0; j < count; j++){
        let stars = ''
    for(let i = 0; i < num; i++){
        stars += '*'
        console.log(stars)
    }
    stars = stars.slice(0, -1)
    for(let j = 0; j < num; j++){
        console.log(stars)
        stars = stars.slice(0, -1)
    }
    }
}

printStarSeries(5, 3)

//-------------------------------------------------------

//ex5
const isPalindrom = (str1, str2) => {
    if(str2 === str1.split('').reverse().join('')){
        return true
    }else{
        return false
    }
}