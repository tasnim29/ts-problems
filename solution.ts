const formatValue = (value:string | number | boolean):string | number | boolean =>{
    if(typeof value ==="string"){
        return value.toUpperCase()
    }else if(typeof value ==="number"){
        return value *10

    }else if(typeof value === "boolean"){
        return !value
    }
    return value
}

const getLength =(value : string | unknown[] ):number=>{
    if(typeof value ==="string"){
        return value.length
        
    }else if(Array.isArray(value)){
        return value.length
    }
    return 0
}

class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name,
        this.age = age
    }
    getDetails ():string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type item = {
    title:string;
    rating:number;
}
function filterByRating (input:item[]):item[]{
    let moreThanFourRated:item[] = []
    for(let i=0; i<input.length; i++){
        const item = input[i]
      
        if(item.rating >= 4){
            moreThanFourRated.push(item)
        }
    }
    return moreThanFourRated
}

