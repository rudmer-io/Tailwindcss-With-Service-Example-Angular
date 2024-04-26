import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { VentasComponent } from './features/ventas/ventas.component';
import { ContainerComponent } from './componentes/container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  { path: 'ventas', component: VentasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
