import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './pages/autor/autor.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'autor', component:AutorComponent},
      {path:'obras', component:ObrasComponent},
      {path:'favoritos', component:FavoritosComponent},
      {path:'**', redirectTo:'autor'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
