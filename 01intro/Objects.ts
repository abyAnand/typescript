// function createUser({name: string, isPaid: boolean}){}


// createUser({name: "aby", isPaid: true});

// let newUser = {name: "aby", isPaid: true};

// createUser(newUser);


// function createCourse():{name: string, price: number}{
//     return {name: "typescript", price: 2500000}
// }


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: user.name, email: user.email, isActive: user.isActive}
// }

// createUser({name:"aby", email: "aby@gmail.com", isActive: true})

type User = {
    readonly _id : number
    name: string,
    email: string,
    isActive: boolean
    credCardDetails?: number
}



let myUser: User = {
    _id: 1,
    name:'Aby',
    email: 'aby@gmail.com',
    isActive: false
}

/*-------------------------------------------*/

type cardNumber = {
    cardnumber: String
}


type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export{}