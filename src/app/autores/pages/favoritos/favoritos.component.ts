import { Component, OnInit } from '@angular/core';
import { Obras } from '../../interfaces/obras';
import { AutoresService } from '../../services/autores.service';
import { Autor } from '../../interfaces/autor';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{
 
  obrasFavoritas: Obras[] = [];
  autoresFavoritos: Autor[] = [];
  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    const obrasFavoritasString = localStorage.getItem('obrasFavoritas');
    if (obrasFavoritasString) {
      this.obrasFavoritas = JSON.parse(obrasFavoritasString);
    }
    const autoresFavoritosString = localStorage.getItem('autoresFavoritos');
    if (autoresFavoritosString) {
      this.autoresFavoritos = JSON.parse(autoresFavoritosString);
    }
  }
  eliminarObra(obra: Obras) {
    const index = this.obrasFavoritas.indexOf(obra);
    if (index !== -1) {
      this.obrasFavoritas.splice(index, 1);
      localStorage.setItem('obrasFavoritas', JSON.stringify(this.obrasFavoritas));
    }
  }

  eliminarAutor(autor: Autor) {
    const index = this.autoresFavoritos.indexOf(autor);
    if (index !== -1) {
      this.autoresFavoritos.splice(index, 1);
      localStorage.setItem('autoresFavoritos', JSON.stringify(this.autoresFavoritos));
    }
  }
}
