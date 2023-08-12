interface User {
    readonly dbId: number,
    email: string,
    userId: number, 
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(coupon: string): number
}

const aby: User = {dbId: 1, email: 'a@g.com', userId: 22, 
startTrail: () => {
    return "trail started"
},
getCoupon() {
    return 10
},
}

aby.email = 'aby@aby.com'
// aby.dbId = 5;




