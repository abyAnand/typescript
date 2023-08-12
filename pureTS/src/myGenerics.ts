const score: Array<number> = []

const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

function identityFour<T>(val: T): T{
    return val;
}


function getSearchProducts<T>(products: Array<T>): Array<T>{
    return [];
}


const getMoreSearchProducts = <T>(products: Array<T>): T => {
    const myIndex = 4;
    return products[myIndex]
}

function anotherFunction<T, U extends number>(val1: T,val2: U): object {
    return{
        val1,
        val2
    }
}

// anotherFunction(3, "4")