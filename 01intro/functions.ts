function addTwo(num: number): number {
    return num+2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isAdmin: boolean){
    
}

let loginUser = (name: string, email: string, isAdmin: boolean = false) => {}

let addmyVal = addTwo(5);

getUpper("Hello");

signUpUser("Aby", "aby@gmail.com", true);

loginUser("aby", "aby@gmail.com");


// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (val: string): string  =>{
    return "hello "+ val;
}


const heros = ["thor", "spiderman", "ironman"];

heros.map( hero => {
    return `hero is ${hero}`
}) 

// console.log(getHello("aby"));

function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}




export{}