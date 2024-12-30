import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL da API no Spring Boot

  constructor(private http: HttpClient) { }

  // Método para cadastrar usuário
  registerUser(user: User): Observable<User> {
    console.log('Enviando dados para o backend:', user);
    return this.http.post<User>(`${this.apiUrl}`, user,{
      headers: { 'Content-Type': 'application/json' } // Garanta que o cabeçalho esteja correto
    });
  }


  // Método para realizar login
  loginUser(credentials: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials);
  }
}
