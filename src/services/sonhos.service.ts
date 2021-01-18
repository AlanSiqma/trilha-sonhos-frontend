import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SonhoDto } from 'src/models/sonhoDto';

const apiUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class SonhosService {

  constructor(private httpClient: HttpClient) { }

  listaSonhos(): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.listarSonhos}`);
  }

  listarSonhosPublicos(): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.sonhosPublicos}/Publica`);
  }

  pegarSonho(id): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.pegarSonho}/${id}`);
  }

  listarSonhosPorSonhador(id): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.sonhoSonhador}/${id}`);
  }

  registrarSonho(data: SonhoDto): Observable<any> {
    return this.httpClient.post(`${apiUrl.apiBase}/${apiUrl.cadastrarSonho}`, data);
  }

  alterar(data: SonhoDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.alterarSonho}`, data);
  }

  apagar(id): Observable<any> {
    return this.httpClient.delete(`${apiUrl.apiBase}/${apiUrl.deletarSonho}/${id}`);
  }

  // searchByName(name): Observable<any> {
  //   return this.httpClient.get(`${baseURL}?name=${name}`);
  // }
}
