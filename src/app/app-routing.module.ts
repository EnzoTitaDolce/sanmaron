import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreparadosComponent } from './preparados/preparados.component';
import { PerfumeriaComponent } from './perfumeria/perfumeria.component';
import { BijouterieComponent } from './bijouterie/bijouterie.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'perfumeria', component:PerfumeriaComponent },
  { path: 'bijouterie', component: BijouterieComponent },
  { path: 'contactos', component: ContactoComponent },
  { path: 'nosotros', component:NosotrosComponent},
  { path: 'preparados', component:PreparadosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirecciona a Home por defecto
  { path: '**', redirectTo: '/home' }  // Redirecciona a Home si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
