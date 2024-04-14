import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Autor } from '../../interfaces/autor';
import { Obras } from '../../interfaces/obras';
import { ObrasAutor } from '../../interfaces/autores';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: Autor[] = [];
  obras: Obras[] = [];
  autorSeleccionado: string = '';
  autoresSeleccionados: Autor[] = []; 

  constructor(private autorservice: AutoresService) {}

  ngOnInit(): void {
    this.mostrarAutores();
  }

  mostrarAutores() {
    this.autorservice.getAutor().subscribe({
      next: (data: Autor) => {
        if (data) {
          this.autores = data.authors.map(author => ({ authors: [author] }));
        }
      }
    });
  }

  mostrarObrasAutor(nombreAutor: string) {
    if (nombreAutor === this.autorSeleccionado) {
      this.autorSeleccionado = '';
      this.obras = [];
    } else {
      this.autorSeleccionado = nombreAutor;
      this.autorservice.getObrasAutor(nombreAutor).subscribe({
        next: (data: Obras[]) => {
          if (data) {
            this.obras = data;
          }
        }
      });
    }
  }
  agregarAFavoritosAutor(autor: Autor) {
    const autorIndex = this.autorservice.autoresSeleccionados.findIndex(a => a.authors[0] === autor.authors[0]);
    if (autorIndex === -1) {
      this.autorservice.autoresSeleccionados.push(autor);
      localStorage.setItem('autoresFavoritos', JSON.stringify(this.autorservice.autoresSeleccionados));
      alert(`Autor ${autor.authors[0]} agregado a favoritos`);
    } else {
      alert(`El autor ${autor.authors[0]} ya está en la lista de favoritos`);
    }
  }

  
}
