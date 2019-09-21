function printConstructor( cons : Function){
    console.log(cons);
}

@printConstructor
class Sample{
    constructor(){
        console.log('hi i am sample class constructor');
    }
}
