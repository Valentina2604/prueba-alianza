// src/app/components/cliente-form/cliente-form.component.ts
import { Component,OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../model/cliente.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  Cliente!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Inicializa el formulario y define las validaciones
    this.Cliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      sharedKey: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['']
    });
  }

  onSubmit(): void {
    // Envía los datos del formulario al backend
    const clienteData = this.Cliente.value;
    this.http.post<any>('URL_DEL_BACKEND', clienteData).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Manejar la respuesta del servidor según sea necesario
      },
      error => {
        console.error('Error al enviar los datos:', error);
        // Manejar el error según sea necesario
      }
    );
  }
}
