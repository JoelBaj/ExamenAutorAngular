import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { }

  Menu:MenuItem[] =[
    {texto:'Autores', ruta:'/autor/autor'},
    {texto:'favoritos', ruta:'/autor/favoritos'},
    
  ]
 logout() { 
      this.router.navigate(['./login'])
    
     
   }
}
