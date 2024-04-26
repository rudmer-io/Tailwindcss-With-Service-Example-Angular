import { Component, OnInit } from '@angular/core';
import { MensajeComponent } from '../../componentes/mensaje/mensaje.component';
import { DialogComponent } from '../../componentes/dialog/dialog.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  providers: [MensajeComponent, DialogComponent, MensajeComponent],
})
export class UsuariosComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  isSubscribed: boolean = false;
  isSubmited: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  logButtonStatus() {
    console.log('Estado del botón:', this.isSubscribed);
  }

  onSubmit() {
    this.isSubmited = true;
    // Loguear los datos del formulario en la consola
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Is Subscribed:', this.isSubscribed);
  }
}
