import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from './product';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-producto.html',
  styleUrl: './crear-producto.css'
})
export class CrearProducto {

  categorias = [
    { label: 'Smartphones', value: 'smartphones' },
    { label: 'Laptops', value: 'laptops' },
    { label: 'Fragrances', value: 'fragrances' },
    { label: 'Skincare', value: 'skincare' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Home Decoration', value: 'home-decoration' },
    { label: 'Frutas', value: 'fruit' },
    { label: 'Electrónica', value: 'electronics' },
    { label: 'Ropa', value: 'clothing' },
    { label: 'Deportes', value: 'sports' }
  ];

  producto = {
    title: '',
    description: '',
    price: null as number | null,
    brand: '',
    category: ''
  };

  productoCreado: any = null;
  mostrarToast = false;
  loading = false;
  enviado = false;

  constructor(private productoService: ProductoService) {}

  crearProducto(form: any) {
    this.enviado = true;

    if (form.invalid) return;

    this.loading = true;

    this.productoService.addProducto(this.producto)
      .subscribe({
        next: (res: any) => {
          this.productoCreado = res;
          this.loading = false;

          this.mostrarToast = true;
          setTimeout(() => this.mostrarToast = false, 2500);

          form.resetForm();
          this.enviado = false;
        },
        error: (err) => {
          this.loading = false;
          console.error(err);
        }
      });
  }
}