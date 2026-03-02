import { Routes } from '@angular/router';
import { CrearUsuario } from './pages/crear-usuario/crear-usuario';

export const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuario
  },
  {
    path: '',
    redirectTo: '/crear-usuario',
    pathMatch: 'full'
  }
];