import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {
  categoria: Categoria;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.categoria = new Categoria(
      '',
      0
    );
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.categoriaService.selecionarPorId(id).subscribe((categoria:Categoria) => {
      this.categoria = categoria;
    });
  }

  excluirCategoria() {
    this.categoriaService.excluir(this.categoria).subscribe(() => {
      this.toastService.success('Categoria deletada com sucesso!','SUCESSO');

      this.router.navigate(['/categorias', 'listar']);
    });
  }
}

