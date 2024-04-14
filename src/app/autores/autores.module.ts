import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutorComponent } from './pages/autor/autor.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    AutorComponent,
    ObrasComponent,
    FavoritosComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    
  ],
  exports:[
    AutorComponent,
    ObrasComponent,
    FavoritosComponent,
    SidemenuComponent
  ]
  
})
export class AutoresModule { }
