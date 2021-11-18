import { Curso } from 'src/app/Shared/curso.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44327/Curso';
  formData: Curso = new Curso();
  list: Curso[] = [];

  postCurso() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCurso() {
    return this.http.put(`${this.baseURL}/${this.formData.cursoID}`, this.formData);
  }

  deleteCurso(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Curso[]);
  }

  readonly baseURLCategoria = 'https://localhost:44327/Categoria';
  formDataCategoria: Categoria = new Categoria();
  listCategoria: Categoria[] = [];

  postCategoria() {
    return this.http.post(this.baseURLCategoria, this.formDataCategoria);
  }

  putCategoria() {
    return this.http.put(`${this.baseURLCategoria}/${this.formDataCategoria.categoriaID}`, this.formDataCategoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${this.baseURLCategoria}/${id}`);
  }

  refreshListCategoria() {
    this.http.get(this.baseURLCategoria)
      .toPromise()
      .then(res =>this.listCategoria = res as Categoria[]);
  }

}
