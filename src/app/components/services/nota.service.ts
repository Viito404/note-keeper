import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';
import { Categoria } from '../models/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root', // App module
})
export class NotaService {
  private API_URL = `${environment.API_URL}/api/notas`;
  private CATEGORIAS_API_URL = `${environment.API_URL}/api/categorias`;
  constructor(private http: HttpClient) {}

  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota) : Observable<Nota>{
    const url = `${this.API_URL}/${nota.id}`;
    return this.http.put<Nota>(url, nota);
  }

  excluir(nota: Nota) {
    const url = `${this.API_URL}/${nota.id}`;
    return this.http.delete<Nota>(url);
  }

  selecionarPorId(id: number): Observable<Nota> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Nota>(url);
  }
  selecionarTodos(): Observable<Nota[]> {
    const url = `${this.API_URL}?arquivada_ne=true`;
    return this.http.get<Nota[]>(url);
  }
  selecionarNotasArquivadas(): Observable<Nota[]> {
    const url = `${this.API_URL}?arquivada=true`;
    return this.http.get<Nota[]>(url);
  }
  selecionarNotasCategoria(categoria:Categoria):Observable<Nota[]>{
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas`;
    return this.http.get<Nota[]>(url);
  }
  selecionarNotasArquivadasCategoria(categoria:Categoria):Observable<Nota[]>{
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas?arquivada=true`;
    return this.http.get<Nota[]>(url);
  }
  arquivar(){

  }
  desarquivar(){

  }
}
