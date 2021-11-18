import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Shared/categoria.model';
import { Curso } from 'src/app/Shared/curso.model';
import { CursoService } from 'src/app/Shared/curso.service';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  public categorias: Categoria[] = [];

  router: Router;
  service: CursoService;

  constructor(private http: HttpClient, router: Router, service: CursoService) {

    this.router = router;
    this.service = service;

   }

  ngOnInit(): void {

    this.service.refreshList();
  }


  onSubmit(form: NgForm) {
    console.log(this.service.formData);
    this.service.postCurso().subscribe(
      response => {
        this.resetForm(form);

        this.router.navigate(["/app-curso-list"]);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Curso();
  }
}
