export class Categoria {
  id?: number;
  titulo: string;
  
  constructor(titulo:string, id:number){
    this.id = id;
    this.titulo = titulo;
  }
}
