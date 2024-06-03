export class Cliente {
  id?: number;
  nombre: string;
  sharedKey: string;
  email: string;
  telefono?: string;

  constructor(nombre: string, sharedKey: string, email: string, telefono?: string, id?: number) {
    this.id = id;
    this.nombre = nombre;
    this.sharedKey = sharedKey;
    this.email = email;
    this.telefono = telefono;
  }
}
