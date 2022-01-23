const sum=(a: number, b: number) =>{
    return a + b;
}


const answers =  sum(4, 5);



// Boolean
let isCool: boolean = true


// age 

let age: number = 56;

// string 

let eyecolor: string =  'brown';
let nature: string = 'human';
let favourite: string =`I am not old, I am only ${nature} after all`


// Array 

let pets: string[] = ['cat','dog','pig'];
let pets2: Array<string> = ['lion','dragon','lizard'];

// objects

let wizard: object ={
    a: 'john'
}


// null and undefined 


let neh: undefined = undefined;
let noo: null = null;


// tupple

let basket : [string, number];

basket =['basketball', 23];


// Enum 

enum Size { small = 1, medium=2, large =3}

let sizeName :number = Size.small;


// Any { Use Carefully}

let whatever: any = '_ahhhhhhhh_noooooooo!'

whatever = 5;

whatever = true; 

whatever= Size.small;



// Void 

let sing =(): void =>{
    console.log('lalalala')
}



//  never


let error =(): never=>{
    throw Error('oops');
}


// interface allows for us to be able to create a new type that is assignable as a type.

interface RobotArmy{
    count: number,
    type: string;
    magic: string
}


let fightRobotArmy = (robots: RobotArmy) =>{
    console.log('Fight!!!')
}



// Type assertion {as}


interface CatArmy{
    count: number,
    type: string;
    magic?: string
}


let dog={} as CatArmy
dog.count


// function 


let fightRobotArmy2 = (robots: RobotArmy):void =>{

    console.log('fight!!!')
}

let fightRobotArmy3 = (robots: {count: number, type: string, magic: string}): number =>{

    console.log('fight!!!')
    return 5
}


// classes 


class Animal{
    sing: string = "Lallalalalla"
    constructor(sound: string){
        this.sing= sound;

    }

    greet(): string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('Rooarrr')
lion.greet()




// union

let confused : string | number = 'test';
confused=1;
