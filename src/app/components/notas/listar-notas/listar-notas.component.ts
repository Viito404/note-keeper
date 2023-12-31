import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService, private categoriaService: CategoriaService, private toastService: ToastrService) {}

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
  arquivarNota(nota:Nota):void{
    nota.arquivada = true;

    this.notaService.editar(nota).subscribe((nota:Nota) =>{
      this.toastService.success('Nota arquivada com sucesso', 'Sucesso');

    this.notaService.selecionarTodos().subscribe((notas:Nota[]) => (this.notas = notas));
    });
  }
  filtrarNotasCategoria(categoria: Categoria | null): void{
    if(categoria == null){
      this.selecionarTodas();
      return;
    }

    this.selecionarNotasPorCategoria(categoria);
  }
}
