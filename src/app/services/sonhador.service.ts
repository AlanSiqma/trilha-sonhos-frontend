import { loginDto } from '../models/loginDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SonhadorDto } from 'src/app/models/sonhadorDto';
import { AlterarSonhadorDto } from 'src/app/models/alterarSonhadorDto';
import { sonhadorLocal } from 'src/app/models/sonhadorLocal';
import { AlteracaoSenhaDto } from '../models/alteracaoSenhaDto';
import { ValidarTokenDto } from '../models/validarTokenDto';
import { SolicitarAlteraracaoSenhaDto } from '../models/solicitarAlteraracaoSenhaDto';
const apiUrl = environment;

@Injectable({
  providedIn: 'root'
})
export class SonhadorService {

  constructor(private httpClient: HttpClient) { }

  GravarUsuarioLocal(usuario) {
    localStorage.setItem('usuarioBfd', usuario);
  }

  PegarUsuarioLogado(): sonhadorLocal {
    let sonhador: sonhadorLocal = JSON.parse(localStorage.getItem('usuarioBfd'));
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
  AlterarTema(tema) {
    let usuario = this.PegarUsuarioLogado();

    usuario.temaDoUsuario = tema;
    const dto: AlterarSonhadorDto = {
      Id: usuario.id,
      Email: usuario.email,
      Nome: usuario.nome,
      TemaDoUsuario: usuario.temaDoUsuario
    }

    this.alterarSonhador(dto)
      .subscribe(
        response => {
          console.log('response')
          let sonhador: sonhadorLocal = {
            id: dto.Id,
            nome: dto.Nome,
            email: dto.Email,
            temaDoUsuario: dto.TemaDoUsuario
          }
          this.GravarUsuarioLocal(JSON.stringify(sonhador));
        },
        error => {
          console.log('error')
          console.log(error)
        }
      );
  }

  validarToken(data: ValidarTokenDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.validarToken}`, data);
  }

  alterar(data: SonhadorDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.alterarConta}`, data);
  }
  alterarSonhador(data: AlterarSonhadorDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.alterarConta}`, data);
  }

  solicitarAlteracaoSenhaSonhador(data: AlteracaoSenhaDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.soliitarAlteracaoSenha}`, data);
  }
  alteracaoSenhaSonhador(data: SolicitarAlteraracaoSenhaDto): Observable<any> {
    return this.httpClient.put(`${apiUrl.apiBase}/${apiUrl.alterarSenha}`, data);
  }

  apagar(id): Observable<any> {
    return this.httpClient.delete(`${apiUrl.apiBase}/${apiUrl.deletarSonhador}/${id}`);
  }

}
