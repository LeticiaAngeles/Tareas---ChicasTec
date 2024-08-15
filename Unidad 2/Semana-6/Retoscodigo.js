//Potencia de 2

let a=10;

let b=1;

let c=1;

while(c<=a){

    b = b * 2;

    c = c + 1;

}

console.log(a);



//Número invertidos

let array =[1,2,3,4,5]

console.log(array);



let nuevoarray=[];

for(let i=array.length-1; i>=0; i--){

        nuevoarray.push(array[i])

}

console.log(nuevoarray);



//Contar vocales



let cadena="Leticia";

let contador=0;

for(let i=0; i<=cadena.length; i++){

    if(cadena[i]==="a" || cadena[i]==="e" ||  cadena[i]==="i" || cadena[i]==="o" || cadena[i]==="u" ){

        contador=contador+1; //2

    }

}

console.log(contador);



//Par e impar

let numero=16;

if(numero%2==0){

    console.log("Par");

}else{

    console.log("Impar");    

}



//Número mayor

let A = 6;

let B = 29;

let C = 28;



let mayor=A;

if (B > mayor) {

    mayor=B;

}

if (C > mayor) {

    mayor=C;

}

console.log(mayor);



//Número primo



let d=8;

let e=0;

let f=1;

while(f<=d){

    if(d%f==0){

        e=e+1;

    }

    f=f+1;

}

if(e == 2){

    console.log("Primo");

}else{

    console.log("No primo");

}



//Mayor de edad

let edad = 17;

if (edad >= 18) {

    console.log("puede manejar y votar");

} else if (edad >= 16) {

    console.log("puede manejar");

} else {

    console.log("no es mayor de edad")

}



//Dos números pares

let num1 = 6;

let num2 = 15;

if(num1%2==0){

    if(num2%2==0){

        console.log("ambos son pares");

    }else{

        console.log("solo uno es par");

    }

}else{

    console.log("ninguno es par");


}

