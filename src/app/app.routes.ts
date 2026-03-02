import { Routes } from '@angular/router';
import { CrearUsuario } from './pages/crear-usuario/crear-usuario';
import { CrearProducto } from './pages/crear-producto/crear-producto';
import { CrearComentario } from './pages/crear-comentario/crear-comentario';

export const routes: Routes = [
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
    redirectTo: '/crear-producto',
    pathMatch: 'full'
  }
];