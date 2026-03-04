import { Routes } from '@angular/router';
import { CrearUsuario } from './pages/crear-usuario/crear-usuario';
import { CrearProducto } from './pages/crear-producto/crear-producto';
import { CrearComentario } from './pages/crear-comentario/crear-comentario';
import { LoginUsuario } from './pages/login-usuario/login-usuario';

export const routes: Routes = [
  {
    path: 'login-usuario',
    component: LoginUsuario
  },
  {
    path: 'crear-producto',
    component: CrearProducto
  },
  {
    path: 'crear-usuario',
    component: CrearUsuario
  },
  {
    path: 'crear-comentario',
    component: CrearComentario
  },
  {
    path: '',
    redirectTo: '/login-usuario',
    pathMatch: 'full'
  }
];