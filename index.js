//Ejercicio 1 

let Name;

let admin;

Name = "John";

admin = Name;

 alert( admin );



 //Ejercicio 2

let Planeta
let Nombre

planeta = "Tierra"
nombre = "David"



//Ejercicio 3


//Sería correcto para Birthday, para las contantes se usa mayúsculas
//para distinguir del resto de variables, pero también se puede hacer
//en minúscula. El "AGE" es para ejecutarse y se calcula, es mejor tenerlo en minúscula.


//Ejercicio 4

let name = "Ilya";
alert( `hello ${1}` ); //En el alert se mostrará el número 1, porque así es la expresión. "HELLO 1"
alert( `hello ${"name"}` ); //Aquí la expresión es una cadena "Name/Nombre". "Hola Name"
alert( `hello ${name}` ); //Y esta expresión es una variable incrustada. "Hola Ilya"



//Ejercicio 5 

let user = {};
 user.name2 = "John";
user.surname = "Smith";
user.name = "Pete";

John = "Pete";

delete user.name2; 



//Ejercicio 6 

let schedule = {};

alert( isEmpty(schedule) ); // true 

schedule["8:30"] = "get up"; 

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
      
      return false;
    }
    return true;
  }


  //Ejercicio 7 

  let salaries = { 
    "John": 100,
    "Ann": 160,
    "Peter": 130

    };

    let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

   
//Ejercicio 8 


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
   };

   multiplyNumeric(menu);

   // after the call

   menu = {
    width: 400, 
   height: 600,
    title: 
   "My menu"
   }


   function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
   }
