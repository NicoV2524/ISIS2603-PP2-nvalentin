export class Nave {
    id: number;
    nombre: string;
    empresa_fabricacion: string;
    raza_origen: string;
    imagen: string;
    costo: string;
    descripcion: string


    constructor( id:number, nombre: string, empresa_fabricacion: string,raza_origen: string, imagen: string,costo: string,descripcion: string){
        this.id=id
        this.nombre=nombre
        this.empresa_fabricacion=empresa_fabricacion
        this.raza_origen=raza_origen
        this.imagen=imagen
        this.costo = costo
        this.descripcion=descripcion
    }
}


