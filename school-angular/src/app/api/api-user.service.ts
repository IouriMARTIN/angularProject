import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<{ users: any[] }>(this.api);
  }

  getUser(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }
}