class UniqueArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    add(item){
        if(this.exists(item)){
            return
        }else{
            this.data[this.length] = item
            this.length++
            return
        }
    }

    showAll(){
        let dataStr = ''
        for(let i = 0; i < this.length; i++){
            if(i == this.length-1){
                dataStr += this.data[i]
            }else{
                dataStr += this.data[i] + ', '
            }
        }
        console.log('[' + dataStr + ']')
    }

    exists(item){
        if(Object.values(this.data).includes(item)){
            return true
        }else{
            return false
        }
    }

    get(index){
        if(this.data[index]){
            return this.data[index]
        }else{
            return -1
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"