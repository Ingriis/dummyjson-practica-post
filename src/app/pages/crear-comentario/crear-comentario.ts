import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommentService } from '../../services/comment';

@Component({
  selector: 'app-crear-comentario',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './crear-comentario.html',
  styleUrls: ['./crear-comentario.css']
})
export class CrearComentario {

  body: string = '';
  postId: number = 1;
  userId: number = 1;

  successMessage: string = '';  
  constructor(private commentService: CommentService) {}

  submitComment() {
    this.commentService.createComment(this.body, this.postId, this.userId)
      .subscribe({
        next: (response) => {
          console.log('Comentario creado:', response);

          this.successMessage = '✔ Creado con éxito';

          this.clearForm();

          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: (error) => {
          console.error('Error al enviar comentario:', error);
        }
      });
  }

  clearForm() {
    this.body = '';
    this.postId = 1;
    this.userId = 1;
  }
}



