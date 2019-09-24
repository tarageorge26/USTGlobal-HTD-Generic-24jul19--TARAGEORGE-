export class User {  //ng g class class_name
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public id?: string){

    }
}