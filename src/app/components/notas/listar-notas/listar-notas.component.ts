import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {

   this.categoriaService.selecionarTodos().subscribe((categorias:Categoria[])=> {
    this.categorias = categorias;
   });
   this.selecionarTodas();
  }
 
  selecionarTodas(){
    this.notaService.selecionarTodos().subscribe((notas:Nota[])=> {
      this.notas = notas;
     });
  }

  selecionarNotasPorCategoria(categoria: Categoria): void{
    this.notaService.selecionarNotasCategoria(categoria).subscribe((notas:Nota[])=> {
      this.notas = notas;
     });
  }
}
