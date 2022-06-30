class usuario{
    constructor(nombre, apellido ,mascotas, nombres, autor){   
        this.nombre=nombre;
        this.apellido=apellido;
        this.mascotas=[mascotas]
        this.libros=[{nombre: nombres, autor:autor}]
    }
  

     getFullName() {
        return console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
     }
    addMascota(x){
        return this.mascotas.push(x)
    }
    countMascotas() {
        return console.log(this.mascotas.length)

    }
    addBook(x,y){
        return this.libros.push({nombre:x, autor:y})
    }
   
    getBookNames(){
        return this.libros.forEach((element) => {
          console.log(  element.nombre)
        });
        };
    }

