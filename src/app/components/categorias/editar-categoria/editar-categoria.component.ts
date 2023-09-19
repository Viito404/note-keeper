import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{
  categoria: Categoria;

  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute, private toastService: ToastrService) {
this.categoria = new Categoria('',0);

  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.categoriaService.selecionarPorId(id).subscribe((categoria: Categoria) => {
      this.categoria = categoria;
    });
  }

  editarCategoria() {
    this.categoriaService.editar(this.categoria).subscribe((categoria:Categoria) => {
      this.toastService.success('Categoria editada com sucesso!','SUCESSO');

      this.router.navigate(['/categorias','listar']);
    });
  }
}
