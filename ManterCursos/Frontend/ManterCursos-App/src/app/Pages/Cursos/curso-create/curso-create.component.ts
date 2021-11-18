import { CursoService } from './../../../Shared/curso.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/Shared/categoria.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Shared/curso.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

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
