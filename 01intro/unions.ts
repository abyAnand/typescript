let score: number | string = 33


type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let aby: User | Admin = {name: "Aby", id: 0}

aby = {username: "abby", id: 1}

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1,"2", 3]


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

// seatAllotment = "crew"  <- this will not work


