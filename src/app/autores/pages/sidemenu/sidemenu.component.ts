import { Component } from '@angular/core';
interface MenuItem{
  texto:string;
  ruta:string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  constructor() { }
  Menu:MenuItem[] =[
    {texto:'Autores', ruta:'/autor/autor'},
    {texto:'favoritos', ruta:'/autor/favoritos'},
    
  ]
}
