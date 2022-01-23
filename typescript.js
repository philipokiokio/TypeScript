var sum = function (a, b) {
    return a + b;
};
var answers = sum(4, 5);
// Boolean
var isCool = true;
// age 
var age = 56;
// string 
var eyecolor = 'brown';
var nature = 'human';
var favourite = "I am not old, I am only ".concat(nature, " after all");
// Array 
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// objects
var wizard = {
    a: 'john'
};
// null and undefined 
var neh = undefined;
var noo = null;
// tupple
var basket;
basket = ['basketball', 23];
// Enum 
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var sizeName = Size.small;
// Any { Use Carefully}
var whatever = '_ahhhhhhhh_noooooooo!';
whatever = 5;
whatever = true;
whatever = Size.small;
// Void 
var sing = function () {
    console.log('lalalala');
};
//  never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight!!!');
};
var dog = {};
dog.count;
// function 
var fightRobotArmy2 = function (robots) {
    console.log('fight!!!');
};
var fightRobotArmy3 = function (robots) {
    console.log('fight!!!');
    return 5;
};
// classes 
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "Lallalalalla";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('Rooarrr');
lion.greet();
// union
var confused = 'test';
confused = 1;
