import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CrearComentario } from './pages/crear-comentario/crear-comentario';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'crear-comentario',
    component: CrearComentario
  }
];
