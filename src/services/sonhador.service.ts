import { loginDto } from './../models/loginDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { SonhadorDto } from 'src/models/sonhadorDto';
import { sonhadorLocal } from 'src/models/sonhadorLocal';

const apiUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class SonhadorService {

  constructor(private httpClient: HttpClient) { }

  GravarUsuarioLocal(usuario){
    localStorage.setItem('usuarioBfd', usuario);
  }

  PegarUsuarioLogado(): sonhadorLocal{
    let sonhador : sonhadorLocal = JSON.parse(localStorage.getItem('usuarioBfd'));
    return sonhador;
  }

  listaSonhadores(): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}${apiUrl.listarSonhador}`);
  }

  pegarSonhador(id): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.pegarSonhador}/${id}`);
  }

  criarConta(data: SonhadorDto): Observable<any> {
    const _headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(
      `${apiUrl.apiBase}/${apiUrl.registrar}`, data, { headers: _headers });
  }

  Entrar(data: loginDto): Observable<any> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    // console.log('path ', `${apiUrl.apiBase}/${apiUrl.entrar}`, data);
    // return this.httpClient.post(`${apiUrl.apiBase}/${apiUrl.entrar}`, data, {headers: headers});
    return this.httpClient.post(`${apiUrl.apiBase}/${apiUrl.entrar}`, data);
  }

  alterar(data: SonhadorDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.registrar}`, data);
  }

  apagar(id): Observable<any> {
    return this.httpClient.delete(`${apiUrl.apiBase}/${apiUrl.deletarSonhador}/${id}`);
  }

}
