class Usuario { 
    constructor(nombre, apellido, Libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.Libros = Libros;
        this.mascotas = mascotas;
      
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addBook(nombreLibro, autor){
        this.Libros.push({Nombre:nombreLibro, Autor:autor});   
    }

    addPet(nombre){
        this.mascotas.push(nombre);
    }

    getBooksName(){
        
        let books = this.Libros
        for (const key in books) {
            
            if (Object.hasOwnProperty.call(books, key)) {
                const element = books[key];
                console.log(`[ ${element.Nombre},  ${element.Autor} ]`)
            }
        }
     
    }

    countMascotas(){
        return this.mascotas.length;
    }
}

const usuario2 = new Usuario('Juan', 'Flores',[{Nombre:'El señor de los anillos',Autor:'tolkein'}],['perro','gato','pez']);
const usuario3 = new Usuario('Manuel', 'Farias',[{Nombre:'Algo escribio',Autor:'Manuel caraffa'},{Nombre:'My fullness',Autor:'Anibalito'}],['loro','perro','gato','pez']);

usuario2.addBook('la vida de ana Frank', 'Ana Franck');
usuario2.addPet('peces');
usuario2.addPet('caballo');

console.log(usuario2.getFullName());
console.log(usuario2.getBooksName());
console.log(usuario2.countMascotas());
