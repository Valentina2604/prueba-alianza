// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list.component';
import { ClienteFormComponent } from './components/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    [ClientListComponent],
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ClienteFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
