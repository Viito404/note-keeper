import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.css']
})
export class FiltroCategoriaComponent {
@Input({required: true}) categorias: Categoria[] = [];

@Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

constructor(){
  this.onFiltroSelecionado = new EventEmitter();
}

selecionarTodas() : void{
this.onFiltroSelecionado.emit(null);
}
selecionarNotasPorCategoria(categoria: Categoria){
  this.onFiltroSelecionado.emit(categoria);
}
}
