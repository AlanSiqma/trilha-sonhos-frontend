import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/models/user';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users'; // api rest fake
  api = environment.apiBase;

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }

  // retornarUsuario(){
  //   this.httpClient.get<any>(this.api + environment.sonho + '1')
  // }

  // entrar(): Observable<any> {


  //   let sonhador: login = {
  //     Email: 'xxx@ttt.com.br',
  //     Password: '123Quatro5'
  //   }

  //   return this.httpClient.post<any>(this.api + environment.sonhador + environment.entrar, sonhador)
  // }

  // registrar(): Observable<any>{
  //   let registrarr = {
  //     Id: '2',
  //     Nome: 'Meu',
  //     Email: 'Liberdade',
  //     Senha: '3',
  //   }

  //   return this.httpClient.post<any>(this.api + environment.sonhador + environment.registrar, registrarr)
  // }

  // Obtem um carro pelo id
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id)
      // .pipe(
      //   retry(2),
      //   catchError(this.handleError)
      // )
  }

  // salva um carro
  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, JSON.stringify(user), this.httpOptions)
      // .pipe(
      //   retry(2),
      //   catchError(this.handleError)
      // )
  }

  // utualiza um carro
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions)
      // .pipe(
      //   retry(1),
      //   catchError(this.handleError)
      // )
  }

  // deleta um carro
  deleteUser(user: User) {
    return this.httpClient.delete<User>(this.url + '/' + user.id, this.httpOptions)
      // .pipe(
      //   retry(1),
      //   catchError(this.handleError)
      // )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };

}
