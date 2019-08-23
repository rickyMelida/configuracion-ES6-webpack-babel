//let es una nueva forma de declarar variables en ES6
//let nombre = "Ricardo";
//const apellido = "Melida";

//alert("Hola " + nombre + apellido);

//EN ES6 let y const tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion
function saludo() {
    let otro_nombre = "Anahi";
    return "Hola " + otro_nombre;

}

//Esto no va a mostrar
//alert(otro_nombre);


//let y const tienen un scope de tipo bloque, es decir que no se puede usar la misma variable fuera de un par de llaves
//let edad = 27;
//if(edad >= 18) {
//    let esAdulto = true;
//}

//A este tipo de concatenacion se le conoce como templateString
//console.log(`Mi nombre es ${nombre} ${apellido} y  tengo ${edad} años`);



const nombres = ['Ricardo', 'Anahi', 'Modesto', 'Nelly'];

//El metodo map nos permite iterar sobre cada uno de los elementos y ejecutar una funcion por cada uno de ellos
/*const numero_caracteres = nombres.map((name) => {
    console.log(`El ${name} tiene ${name.length} letras`);
});*/



//Forma de acortar una funcion, pero solo funciona si:
//1-Esta en una sola linea
//2-y solo tiene un solo parametro 
//3-si tienes mas de una linea se debe de agregar los parentesis y el return para retornar el valor deseado
const numero_caracteres = nombres.map(name => `El ${name} tiene ${name.length} letras`);
//console.log(numero_caracteres);


//Sintaxis de la funciones tipo flecha
//(parametro) => {
//    return //retorna codigo
//}

//podemos definir los parametros por defectos simplemente igualandolos  los valores deseados
function registrarUsuario(nombre, pais='No especificado', correo, telefono = 'No especificado'){

    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}
//console.log(registrarUsuario('Ricardo', undefined, 'correo@correo.com', undefined));

const persona = ['Ricardo Melida', 27, 'Paraguay'];

//Destructuramos el arreglo, asignandole variables a cada elemento
//Tambien se puede agregar alguna variable que no esta en el arreglo
const [nombre, , pais, futura_profesion='No especificado'] = persona;

const mostrarInfo = ([nombre, ,pais, otro='otro'] = persona) => console.log(nombre, pais, otro);

mostrarInfo(persona);