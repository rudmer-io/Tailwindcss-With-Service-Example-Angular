import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
})
export class VentasComponent {
  subtotal: number = 250;
  vat: number = 25;
  discount: number = 20;
  total: number = 250;
}
