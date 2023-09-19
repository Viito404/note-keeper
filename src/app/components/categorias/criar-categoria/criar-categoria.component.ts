import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent{
categoria: Categoria;

  constructor(private categoriaService: CategoriaService, private router: Router, private toastService: ToastrService) {
this.categoria = new Categoria('',0);

  }


  criarCategoria() {
    this.categoriaService.criar(this.categoria).subscribe(categoria=> {

      this.toastService.success('Categoria criada com sucesso!','SUCESSO');
      this.router.navigate(['/categorias', 'listar']);
    });
  }
}
