import { Component, OnInit } from '@angular/core';
import { Obras } from '../../interfaces/obras';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{
 
  obrasFavoritas: Obras[] = [];
  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    const obrasFavoritasString = localStorage.getItem('obrasFavoritas');
    if (obrasFavoritasString) {
      this.obrasFavoritas = JSON.parse(obrasFavoritasString);
    }
  }

}
