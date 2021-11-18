import { CursoEditComponent } from './Pages/Cursos/curso-edit/curso-edit.component';
import { CursoListComponent } from './Pages/Cursos/curso-list/curso-list.component';
import { CursoCreateComponent } from './Pages/Cursos/curso-create/curso-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: "app-curso-create", component: CursoCreateComponent },
  {path: "app-curso-list", component: CursoListComponent },
  {path: "app-curso-edit", component: CursoEditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
