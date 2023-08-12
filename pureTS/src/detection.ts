function detectType(val: number | string){
    if (typeof val === 'string') {
        return val.toLowerCase()
        }
        return val + 3;
    }

    function provideId(id: string | null){
        if(!id){
            console.log("Please provide ID");
            return 
        }
        id.toLowerCase()
    }

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};


function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food"
    }else{
        pet
        return "bird Food"
    }
}


interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind:"square";
    side: number
}

interface Reactangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius
    }
}
