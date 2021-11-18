import { CursoService } from './../../Shared/curso.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']


})
export class CategoriasComponent implements OnInit {

  public categoria: any;

  service: CursoService;
  constructor(private http: HttpClient, service: CursoService) {

    this.service = service;

  }

  ngOnInit(): void {

    this.service.refreshListCategoria();

  }
}
