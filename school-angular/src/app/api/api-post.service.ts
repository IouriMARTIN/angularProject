import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  private api = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<{ posts: any[] }>(this.api);
  }

  getPostsByUser(userId: number) {
    return this.http.get<{ posts: any[] }>(`${this.api}/user/${userId}`);
  }

  getPost(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }
}
