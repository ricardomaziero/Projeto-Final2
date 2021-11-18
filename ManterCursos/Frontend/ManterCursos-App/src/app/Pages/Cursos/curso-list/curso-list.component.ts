import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/Shared/curso.model';
import { Categoria } from 'src/app/Shared/categoria.model';
import { CursoService } from 'src/app/Shared/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  public cursos: Curso[] = [];

  filter: string = '';

  service: CursoService;
  constructor(private http: HttpClient, service: CursoService) {

    this.service = service;

   }

  ngOnInit(): void {

    this.service.refreshList();
    this.service.refreshListCategoria();

  }

  deletarCurso(cursoID: number): void {
    this.service.deleteCurso(cursoID)
    .subscribe(res => this.service.refreshList());

  }

  editarCurso(curso: Curso): void {
    this.service.formData = Object.assign({}, curso)
  }
}


