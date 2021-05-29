import { UtilService } from '../services/util.service';
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
  mode ={value: "side"};
  hasBackdrop = {value:true};
  
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
    this.myEvent.emit({tipo: 'Logoff'});
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
  alterarTema(event ){
    this.myEvent.emit({tipo: 'Alterar-Tema',tema:event});
  }
  EmDesenvolvimento(){

    alert('\n[Futura Funcionalidade] \nEstamos trabalhando em seu desenvolvimento. \nEm breve, ela será liberada.\n:) Obrigado.')
     
    }
}
export class MenuIconsExample {}

