import { UtilService } from './../app/services/util.service';
import { AppComponent } from 'src/app/app.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  title = "Before I Die...";
  isLogged: boolean = false;
  logoBfd = './assets/logo-bfd-2.png'

  user = {
    name: 'Florinda',
    photo: './assets/avatar_v1.png'
  }


  showDelay = new FormControl(500);
  hideDelay = new FormControl(200);

  constructor( private util: UtilService) { }

  ngOnInit(): void {
    this.ValidarUsuarioLogado();
  }

  ValidarUsuarioLogado(){
    let usuario = this.util.PegarUsuarioLogado();
    if(usuario != null)
      this.toggleLogged(usuario.nome);
  }

  toggleLogged(username){
    this.isLogged = !this.isLogged;
    this.AtualizarNomeUsuario(username)
  }

  AtualizarNomeUsuario(usuario){
    this.user.name = this.util.LimitarTexto(usuario,12);
  }

  logOff(){
    if(confirm("Deseja deslogar?")){
      this.Deslogar();
    }
  }

  Deslogar(){
    this.isLogged = false;
    localStorage.removeItem("usuarioBfd");
    this.IrParaHome();
  }

  IrParaMeusSonhos(){
    this.myEvent.emit({tipo: 'MeusSonhos'});
  }

  IrParaHome(){
    this.myEvent.emit({tipo: 'Home'});
  }

  Logar(){
    this.myEvent.emit({tipo: 'Login'});
  }
}
