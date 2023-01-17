## Notes
* Lesson 1: just set up, but introduces the fact that TS is compilied. You need to install typeScript globally in order to get it to compile.
* Lesson 2:
  * TS is an extension of JS.
  * TS provided all current/modern features JS has, plus some extra features
  * but mainly focused on how it allows JS to be strongly typed, which helps catch errors and encourages cleaner code.
  * however, browsers cannot read it, must be compiled and transformed into JS.
  * Note that "numbers" is a data type- it includes floats and intergers.
  * Demonstrates how to compile, in terminal run "tsc filename.ts". This will create a file with the same name, but with a .js extension. OR if you have a .js file you want to have the ts file compiled into, you can type it out like: "tsc filename.ts filename.js" 
  * demonstrated the watcher function, which will automatically compile the file. Just add a -w flag after your file name. Example: tsc filename.ts -w"
* lesson 3:
  * TS also infers the type- ie, when you first establish a variable, it pays attention to the formatting and figures out if you are writing a string ("string"), a number (20) or a boolean (true). Once defined, you cannot change the type (although you can change the value, as long as it is the same data type). 
  * You can also tell a function what data type it should expect in an argument. Ie: function doubleScore(score: number).
  * note that type matching/checking happens before compiling- so you can't tell by looking at the post-compiled JS that a function only accepts strings, numbers, etc.
* Lesson 4 (arrays/object)
  * arrays: 
    * once you establish the data types for an array, they must all be that data type.
    * you can have mixed array, but must be mixed when first established/declared.
    * once an array is established, you can't update it to a different type. For example, if I established "names" as an array of strings, I couldn't change "names" later to an object.
  * objects:
    * once established, you cannot change the attribute types of the object. Example:

let game = {
  name: "poker",
  score: 32,
  currentlyPlaying: true
}
  * You can update values (name, score, or CurrentlyPlaying), but again, must be the same type. 
  * you cannot add a new attribute, ie, if you wanted to add game.winner = "player1", it would not work.
* Lesson 5: explicit types
  * Instead of using inferred types, you can use explict types. Example: 
    let character: string; (explict)
    works as well as
    et character = "Bobby" (inferred- TS sees the quotes and understands that character is a string.)
  * RE: Arrays: you can define arrays explicitly, (ie, let characters: string[]). However, note that this example is not the same as initializing the array, so you could not push a value into it (even if was the correct type). You would need to initialize it as an empty array like this: characters: string[] = [].
  * RE: Union types: this is a way to establish something may have several types. example: 
  let mixed: (string|number)][] =[]
  mixed.push("yes!") (would work)
  mixed.push(20) (would work)
  mixed.push(false) (wouild not work, bc boolean is not a defined type.)
    * note that unions need to be in paraenthsies when defining an array. Not so in other primative variables (ie, let password: string|number; ).
  * RE: Objects: you can explicitly define object (ie, let phoneBook: object;). Regardless of what you put INTO the object, you have defined the object itself.
    * again, if you establish an object via inference, you are limited to the attributes you set up initially. You cannot add a new attribute (key/value pair) after it is established.
    * don't forget that arrays are actually a type of object...so you could replace the aforementioned phoneBook with an array.
* lesson 6: Any type:
  * generally defeats the type tracking. Use with caution. Examples:
    * let age: any; (variable "age" will accept any type of value)
    * let mixedArray: any[]= [] (mixedArray is now an empty array which can accept any type of value)
    * let player: { name: any, score: any, age: any} (player.name, player.score, player.age can be any type of value)
  * use with caution! Defeats error catching from type-checking, but may come in handy if you don't know what kind of data you're going to need to use.
* lesson 7: better workflow via tsconfig.
  * demonstrated a more common public/source file structure
  * however, it gets awkward when compiling- the compiled .js file ends up in the src folder, not where it belongs in the source folder.
  * You can config your project with a tsconfig.json file. In the terminal "tsc --init".
  * "rootDir": "./src",  - this establishes where the ts file goes.
  * "outDir": "./public" - this directs where output files should go (the compiled ts into js)
  * After you set this up, if you have the watcher running, it will watch ALL ts files and autocompile them into .js in the public folder.
  * however, this includes ts files OUTSIDE of the src folder. You can configure it so only the files in the src directory/folder are automatically compiled into the src folder:
    * outside of the "compilerOptions" object, add "include": ["src"] (don't forget to put a comma after the compilerOptions object). 
  * more about config here: https://www.typescriptlang.org/docs/
* lesson 8:Functions basics:
  * again, TS generally can infer when you create a function
  * you can again explicitly call it a function. Example: (let greet: Function).
    * notice that "Function" is capitalized, which is not the case for strings, numbers, etc.
  * you can(should?) also explicitly call out the types of the argument or arguments. Example:
  const add = (a: number, b: number)
  * you can also set an optional parameter by using a question mark. Example:
  const add = (a: number, b: number, c?:number|string)
  * Note the union type- also possible when defining arguments.
  * You can also set a default value for an argument. Example:
    const add = (a: number, b: number, c:number|string = 10)
    * you should put optional arguments at the end.
  * Returns: if your function has a return, TS will infer what the return value is. IE:
    const minus = (a: number, b: number)=>{
      return a + b
    }
    let restult = minus(10, 7)
    Result MUST be a number.
  * you can also explicitly name what the return type, even though TS will infer it.
  * void functions are functions that do not have a return statement (void of return). When compiled into JS, will come back as undefinied. 
*lesson 9: Type Alias
  *sometimes when working with functions, the arguments can get complex. For example:
  const logDetails = (uid: string | number, item: string)=>{
    console.log(`{item} has uid of ${uid}`);
  }
  const greet = (user: {name: string, uid: string | number})=>{
    console.log(`{user.name} says haaaaay`);
  }
  * you can create Type alias. Using the example above you could:
    * type StringOrNum = string|number; (you could then subsitute that in anytime you have string|num)
    * type objWithName ={ name:string, uid:StringOrNum }
    *QUESTION: why was the type StringOrNum capitalized?
  
*lesson 10: Function signatures
  * a function signature is essentially the pattern of the functions argument types and return. 
  * first example:
  let greet: (a: string, b: string)=> void
  greet = (name:string, greeting: string)=> {
    console.log(`${name} says ${greeting}`)
  } (this works fine, everything matches up.)
  *2nd example:
   let calc: (a: number, b:number, c: string) => number;

   calc = (numOne; number, numTwo: number, action: string)=>{
    if (action === 'add'){
      return numOne + numTwo;
    }
    <!-- this doesn't work without an else statment...you would return void if action != string -->
    else{
      return numOne - numTwo;
    }
   }
  * 3rd example:

  let logDetails: (obj: {name:string, age:number})=>void;


  logDetails = (ninja: {name:string, age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} years old.`)
  }

    <!-- if you wanted to use a type alias: -->
  type person = {name:string, age:number}

    logDetails = (ninja: person)=>{
    console.log(`${ninja.name} is ${ninja.age} years old.`)
  }
*lesson 11: the Dom and Type Casting
  * TS works just like JS as far as interacting iwth the dom with querySelectors, onClick, etc.
  * However, it doesn't have access to the DOM before it renders. For example, consider this:

const anchor = document.querySelector('a');

console.log(anchor.href);
  * this will show an error because it doesn't know in advance that the "a" tag exists within the document, or that it will be an href type. Therefore anchor.href could be void. The console will show with swiggly lines (error). Two options to fix:

const anchor = document.querySelector('a');

if(anchor){
  console.log(anchor.href);
}
  * this is acceptable, b/c if it is void, it won't console.log anything.

const anchor = document.querySelector('a')!;
console.log(anchor.href);
  * the ! is a way of saying, I'm absolutely sure there is an "a", this will return something. Trust me. (so only use this if you are like, 100% sure)
  * Note that when you hover over Anchor, TypeScript will recognize that it is an href element, and VS code will be able to use its intellisense to provide suggestions.

  * typecasting. Consider this example:

const form = document.querySelector(".new-item-form");
  * when you hover over form, it will only show as an element, not a htmlForm element. This is bc .new-item-form is the class, which TS doesn't "know" about- it understands "a" is an anchor tag, or that "form" is a form, but a user-defined class, TS has no way of knowing.
  * you can fix this with Typecasting:
const form = document.querySelector(".new-item-form") as HTMLFormElement;
  * We do this for all of the form elements:

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

  * note that with amount, if we console.log that, it will come back as a string, even though we want it as a number. You can correct that by using .valueAsNumber (which seems to work like .parseInt):

console.log(amount.valueAsNumber);




