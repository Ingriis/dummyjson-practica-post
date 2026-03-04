import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-usuario.html',
  styleUrls: ['./login-usuario.css']
})
export class LoginUsuario {
  credentials = {
    username: '',
    password: ''
  };

  loginResponse: any = null;
  mostrarToast = false;
  loading = false;
  enviado = false;
  errorMessage = '';

  async iniciarSesion(form: any) {
    this.enviado = true;
    this.errorMessage = '';

    if (form.invalid) return;

    this.loading = true;

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.credentials.username,
          password: this.credentials.password,
          expiresInMins: 30
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error en login');
      }

      console.log('Login exitoso:', data);
      this.loginResponse = data;
      this.loading = false;
      
      this.mostrarToast = true;
      setTimeout(() => this.mostrarToast = false, 2500);
      
      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data));
      }

      form.resetForm();
      this.enviado = false;
      
    } catch (error: any) {
      console.error('Error:', error);
      this.loading = false;
      this.errorMessage = error.message || 'Error al conectar';
      this.loginResponse = { 
        error: true, 
        message: this.errorMessage 
      };
    }
  }
}