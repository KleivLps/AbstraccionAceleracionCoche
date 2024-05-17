//1. Abstraccion

//La abstraccion consiste en identificar las caracteristicas esenciales e ignorar los detalles irrelevantes o complejos de un objeto para modelarlo en el programa de manera mas simple y comprensible. Es decir, llevar al objeto a su minima expresion comprensible.

//Se logra definiendo uyna clase que representa una entidad con caracteristicas y comportamientos especificos. Esta clase actua como una plantilla o modelo que define las propiedades y metodos relevantes para la entidad ocultando los detalles internos de implementacion que no son necesarios para su uso.

//Un ejemplo simple de abstraccion podria ser una clase "coche":

class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  acelerar() {
    console.log("El coche esta acelerando.");
  }

  frenar() {
    console.log("El coche esta frenando.");
  }

  ObtenerInformacion(){
    console.log("marca: " + this.marca + " , modelo:" + this.modelo +", año:" +this.año );
  }

}

const coche1 = new Coche("hyundai", "Santa Fe", 2022)
const coche2 = new Coche("VolksWagen", "Golf", 2022)
const coche3 = new Coche("Honda", "Civic", 2022)
const coche4 = new Coche("Nissan", "Sunny", 2022)
const coche5 = new Coche("Toyota", "Corolla", 2022)



coche1.acelerar()
coche2.ObtenerInformacion()
coche3.ObtenerInformacion();
coche4.ObtenerInformacion();


//2.ENCAPSULAMIENTO

//Es el concepto de agrupar datos y metodos relacionados en un objeto y ocultar los detalles internos de su funcionamiento. En js se logra mediante el uso de metodos publicos y propiedades privadas utilizando la convencion del fuion bajo (_). Aunque es importante destacas que javascript no impone un nivel estricto de privacidad, sino que depende de las convenciones de nombramiento para indicar la intencion.

//3.MODULARIDAD

//Capacidad de dividir un programa en modulos o unidades mas pequeñas y bien definidas, donde cada modulo representa una funcionalidad especifica o un conjunto de funcionalidades relacionadas. cada modulo se implementa como una clase o un conjunto de clases que interactuan entre si para lograr un objetivo particular.

// El principio de modularidad busca simplificar el diseño y la estructura del codigo, ya que permite que cada parte del programa sea independiente y cohesiva, lo que facilita su comprension, mantenimiento y reutilizacion, ademas, los modulos pueden ser desarrollados por diferentes equips o proframandores lo que facilita la colaboracion en proyectos mas grandes

//Un ejemplo sencillo que ilustra la modularidad en POO puede ser un programa que simula una biblioteca. Podemos dividir el programa en modulos como :LIBRO, USUARIO, PRESTAMO, ETC. Cada modulo se implementaria como una calse con sus propios metodos y propiedades.

//EJEMPLO

// Modulo Libro

class Libro {
    constructor(titulo, autor, genero){
        this.titulo = titulo ;
        this.autor = autor ;
        this.genero = genero ;
    }

    //Otros metodos relacionados con los libros...
}

// Modulo Usuario

class Usuario {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    //Otros metodos relacionados con los usuarios...
}

//Modulo Prestamo

class Prestamo {
    constructor(libro, usuario, fechaInicio, fechaFin) {
        this.libro = libroibro;
        this.usuario = usuario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    //Otros metodos relacionados con los prestamos...
}