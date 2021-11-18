import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CategoriasComponent } from './Pages/categorias/categorias.component';

import { NavbarComponent } from './Components/navbar/navbar.component';


import { CursoCreateComponent } from './Pages/Cursos/curso-create/curso-create.component';
import { CursoEditComponent } from './Pages/Cursos/curso-edit/curso-edit.component';
import { CursoListComponent } from './Pages/Cursos/curso-list/curso-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,

    CategoriasComponent,

    NavbarComponent,

    CursoCreateComponent,
    CursoEditComponent,
    CursoListComponent,

  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
