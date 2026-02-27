import { Routes } from '@angular/router';
import { CrearProducto } from './features/crear-producto/crear-producto';

export const routes: Routes = [
  { path: '', redirectTo: 'crear-producto', pathMatch: 'full' },
  { path: 'crear-producto', component: CrearProducto }
];