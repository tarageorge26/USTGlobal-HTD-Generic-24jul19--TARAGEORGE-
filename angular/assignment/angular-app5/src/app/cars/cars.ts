export class Cars {  //ng g class class_name
    constructor(
        public brand: string,
        public model: string,
        public year_of_release: number,
        public cost: number,
        public units_sold: number,
        public id?: string){

    }
}