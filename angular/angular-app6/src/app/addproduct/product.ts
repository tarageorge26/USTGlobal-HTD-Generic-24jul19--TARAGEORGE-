import { Url } from 'url';

export class Products {  //ng g class class_name
    constructor(
        // public name: string,
        public brand: string,
        public url: Url,
        public description: string,
        public id?: string){

    }
}