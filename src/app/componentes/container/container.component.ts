import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { products } from '../productos';
import { ApiFetchService } from '../../services/api-fetch.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  nombre = 'Pepito Perez';
  searchText: string = '';
  filteredProducts: any[] = [];
  filteredPlayers: any[] = [];
  products = products;

  constructor(private api: ApiFetchService) {}

  ngOnInit(): void {
    this.filteredProducts = this.products.slice();
    this.getPlayers();
  }

  jugadores: any[] = [];
  getPlayers() {
    this.api.getPlayers().subscribe((data) => {
      this.jugadores = data['data'];
      this.filteredPlayers = this.jugadores.slice();
      this.filterTable();
    });
  }

  /* filterTable() {
    const searchText = this.searchText.toLowerCase().trim();
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.color.toLowerCase().includes(searchText),
    );
  } */

  filterTable() {
    const searchText = this.searchText.toLowerCase().trim();
    this.filteredPlayers = this.jugadores.filter(
      (jugador) =>
        jugador.first_name.toLowerCase().includes(searchText) ||
        jugador.last_name.toLowerCase().includes(searchText) ||
        jugador.college.toLowerCase().includes(searchText) ||
        jugador.country.toLowerCase().includes(searchText),
    );
  }
}
