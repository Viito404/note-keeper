import { Categoria } from "./categoria";

export class Nota {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  categoriaTitulo?: string;
  categoriaId: number;

  constructor(titulo: string, conteudo: string, tema: Tema, categoriaId: number, categoriaTitulo?: string, id?: number) {
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema;
    this.categoriaTitulo = categoriaTitulo;
    this.categoriaId = categoriaId;
  }
}

type Tema = 'info' | 'warning' | 'danger' | 'dark';
