import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private http: HttpClient) {}

  getCommentsByPost(postId: number) {
    return this.http.get<{ comments: any[] }>(
      `https://dummyjson.com/comments/post/${postId}`
    );
  }
}
