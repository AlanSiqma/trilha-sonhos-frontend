import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class VisibilidadeSonhoService {

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<any> {
    return this.httpClient.get(`${apiUrl.apiBase}/${apiUrl.listarVisibilidadeSonho}`);
  }

}
