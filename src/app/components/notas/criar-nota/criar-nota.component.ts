import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],
})
export class CriarNotaComponent implements OnInit{
  nota: Nota;
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService, private categoriaService: CategoriaService, private router: Router, private toastService: ToastrService) {
    this.nota = new Nota(
      '',
      '',
      'dark',
      0,
      '',
      0
    );
    
  }
  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe((categorias:Categoria[])=> {
      this.categorias = categorias;
     });
  }

  criarNota() {
    this.notaService.criar(this.nota).subscribe(nota=> {

      this.toastService.success('Nota criada com sucesso!','SUCESSO');
      this.router.navigate(['/notas', 'listar']);
    });
  }
  }

