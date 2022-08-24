import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
/* import { CrearComponent } from './components/crear/crear.component'; */

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listar', component: ListarComponent},
/*   { path: 'crear', component: CrearComponent },
  { path: 'editar-producto/:id', component: CrearComponent }, */
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
