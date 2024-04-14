import { Component, Input, OnInit } from '@angular/core';

import { AutoresService } from '../../services/autores.service';
import { Obras } from '../../interfaces/obras';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {
 
  @Input() obras: Obras[] = [];
  obrasSeleccionadas: Obras[] = [];
  constructor(private autoresService: AutoresService) {}
  ngOnInit(): void {
    
  }
  agregarAFavoritosObra(obra: Obras) {
    const obraIndex = this.autoresService.obrasSeleccionadas.findIndex(o => o.title === obra.title);
    if (obraIndex === -1) {
      this.autoresService.obrasSeleccionadas.push(obra);
      localStorage.setItem('obrasFavoritas', JSON.stringify(this.autoresService.obrasSeleccionadas));
      alert(`Obra "${obra.title}" agregada a favoritos.`);
    } else {
      alert(`La obra "${obra.title}" ya está en la lista de favoritos.`);
    }
  }
  
  
}
