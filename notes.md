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