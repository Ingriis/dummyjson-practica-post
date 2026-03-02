import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'https://dummyjson.com/comments/add';

  constructor(private http: HttpClient) {}

  createComment(body: string, postId: number, userId: number) {
    return this.http.post<any>(this.apiUrl, {
      body,
      postId,
      userId
    });
  }
}
