import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Autor } from '../interfaces/autor';
import { Observable } from 'rxjs';
import { Obras } from '../interfaces/obras';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private urlApi: string = environment.baseUrl;
  obrasSeleccionadas: Obras[] =[];

  constructor(private http:HttpClient) { }

  getAutor(): Observable<Autor>{
    return this.http.get<Autor>(`${this.urlApi}/author`)
  }

  getObrasAutor(nombre: string): Observable<Obras[]>{
    return this.http.get<Obras[]>(`${this.urlApi}/author/${nombre}`)
  }
 
  seleccionarObra(obra: Obras) {
    if (!this.obrasSeleccionadas.includes(obra)) {
      this.obrasSeleccionadas.push(obra);
      localStorage.setItem('obrasFavoritas', JSON.stringify(this.obrasSeleccionadas));
    }
  }
  
}
