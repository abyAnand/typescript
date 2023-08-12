// class User{
//     public email: string
//     private name: string
//     readonly city: string
//     constructor(email: string, name: string, city: string){
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }


class User{

    private _courseCount = 1;

    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
        private userId?: string
    ){}

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get CourseCount(): number{
        return this._courseCount
    }

    set CourseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User{
    isFamily: boolean = true
}


const aby = new User("aby@gmail.com", "aby")