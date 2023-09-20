import { Component } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../models/nota';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-notas-arquivadas',
  templateUrl: './listar-notas-arquivadas.component.html',
  styleUrls: ['./listar-notas-arquivadas.component.css']
})
export class ListarNotasArquivadasComponent {
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
    this.notaService.selecionarNotasArquivadas().subscribe((notas:Nota[])=> {
      this.notas = notas;
     });
  }

  selecionarNotasPorCategoria(categoria: Categoria): void{
    this.notaService.selecionarNotasArquivadasCategoria(categoria).subscribe((notas:Nota[])=> {
      this.notas = notas;
     });
  }

  reativarNota(nota:Nota):void{
    nota.arquivada = false;

    this.notaService.editar(nota).subscribe((nota:Nota) =>{
      this.toastService.success('Nota reativada com sucesso', 'Sucesso');

    this.notaService.selecionarNotasArquivadas().subscribe((notas:Nota[]) => (this.notas = notas));
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
