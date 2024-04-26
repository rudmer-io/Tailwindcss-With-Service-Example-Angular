import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css',
})
export class MensajeComponent implements OnInit {
  messages: Message[] = [];

  constructor() {}

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'success',
        summary: 'Excelente ',
        detail: 'Usuario registrado',
      },
    ];
  }
}
