import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './crear-usuario.html',
  styleUrls: ['./crear-usuario.css']
})
export class CrearUsuario {
  // Campos del formulario
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  birthDate: string = '';

  successMessage: string = '';
  usuarioCreado: any = null;

  // Errores de validación
  errors: any = {};

  // Validar todo el formulario
  validateForm(): boolean {
    this.errors = {};
    let isValid = true;

    // Validar nombre (solo letras)
    if (!this.firstName) {
      this.errors.firstName = 'El nombre es requerido';
      isValid = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(this.firstName)) {
      this.errors.firstName = 'El nombre debe contener solo letras (mínimo 2 caracteres)';
      isValid = false;
    }

    // Validar apellido (solo letras)
    if (!this.lastName) {
      this.errors.lastName = 'El apellido es requerido';
      isValid = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(this.lastName)) {
      this.errors.lastName = 'El apellido debe contener solo letras (mínimo 2 caracteres)';
      isValid = false;
    }

    // Validar email (dominios comunes)
    if (!this.email || this.email.trim() === '') {
      this.errors.email = 'El email es requerido';
      isValid = false;
    } else {
      const emailTrimmed = this.email.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|icloud\.com|live\.com|msn\.com)$/i;
      if (!emailRegex.test(emailTrimmed)) {
        this.errors.email = 'El email debe ser de dominios válidos: gmail.com, hotmail.com, outlook.com, yahoo.com, icloud.com';
        isValid = false;
      }
    }

    // Validar username (letras, números y guión bajo)
    if (!this.username) {
      this.errors.username = 'El username es requerido';
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(this.username)) {
      this.errors.username = 'El username debe tener entre 3 y 20 caracteres (solo letras, números y guión bajo)';
      isValid = false;
    }

    // Validar contraseña (segura)
    if (!this.password) {
      this.errors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/.test(this.password)) {
      this.errors.password = 'La contraseña debe tener entre 8 y 20 caracteres, incluir mayúscula, minúscula y número';
      isValid = false;
    }

    // Validar que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      this.errors.confirmPassword = 'Las contraseñas no coinciden';
      isValid = false;
    }

    // Validar teléfono (solo números)
    if (this.phone && !/^\d{7,15}$/.test(this.phone)) {
      this.errors.phone = 'El teléfono debe contener solo números (7-15 dígitos)';
      isValid = false;
    }

    // Validar fecha de nacimiento (mayor de edad)
    if (this.birthDate) {
      const birthDateObj = new Date(this.birthDate);
      const today = new Date();
      const minDate = new Date('1900-01-01');
      const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

      if (birthDateObj > today) {
        this.errors.birthDate = 'La fecha de nacimiento no puede ser futura';
        isValid = false;
      } else if (birthDateObj < minDate) {
        this.errors.birthDate = 'La fecha de nacimiento no puede ser anterior a 1900';
        isValid = false;
      } else if (birthDateObj > maxDate) {
        this.errors.birthDate = 'Debes ser mayor de 18 años para registrarte';
        isValid = false;
      }
    }

    return isValid;
  }

  // Enviar formulario
  async submitUser() {
    if (!this.validateForm()) {
      console.log('Errores de validación:', this.errors);
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      phone: this.phone || undefined,
      birthDate: this.birthDate || undefined
    };

    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log('Usuario creado:', data);

      this.usuarioCreado = data;
      this.successMessage = 'Usuario creado con éxito';

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      this.successMessage = 'Error al crear usuario';
    }
  }

  // Limpiar formulario
  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.phone = '';
    this.birthDate = '';
    this.usuarioCreado = null;
    this.errors = {};
  }
}