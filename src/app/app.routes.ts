import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client-list.component';
import { ClienteFormComponent } from './components/cliente-form.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  {path: 'clientes', component: ClientListComponent},
  { path: 'clientes/nuevo', component: ClienteFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
