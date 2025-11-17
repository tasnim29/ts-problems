type User = {
    id:number,
    name:string,
    address :{
        city:string,
        "post-code":number
    }
}

const user:User={
    id:123,
    name:"Tasnim Mahmud",
    address:{
        city:"Cox",
        "post-code":1204
    }
}
type p = keyof User


const getPropertyFromObj = (obj:User,key:p)=>{
    return obj[key]
}
console.log(getPropertyFromObj(user,"address"))