import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  addProducto(producto: any) {
    return this.http.post(`${this.apiUrl}/add`, producto);
  }
}