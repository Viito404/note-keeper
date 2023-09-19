import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../../services/nota.service';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css'],
})

export class ExcluirNotaComponent implements OnInit {
  nota: Nota;

  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private router: Router,
    private toastService: ToastrService
  ) {
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
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.notaService.selecionarPorId(id).subscribe((nota:Nota) => {
      this.nota = nota;
    });
  }

  excluirNota() {
    this.notaService.excluir(this.nota).subscribe(() => {
      this.toastService.success('Nota deletada com sucesso!','SUCESSO');

      this.router.navigate(['/notas', 'listar']);
    });
  }
}
