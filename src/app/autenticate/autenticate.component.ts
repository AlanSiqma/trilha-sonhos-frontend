import { Component,Inject, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { SonhadorDto } from 'src/models/sonhadorDto';
import { loginDto } from "src/models/loginDto";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/models/user';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { SonhadorService } from 'src/services/sonhador.service';
import { sonhadorLocal } from 'src/models/sonhadorLocal';
import { Renderer2 , EventEmitter, Input,  Output ,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.css']
})
export class AutenticateComponent implements OnInit {

  
  carregando = false;
  isRegistrar = false;
  isChecked = true;
  submitted = false;
  formUser: FormGroup = new FormGroup({});;
  users: User[];
  @Output() authEvent = new EventEmitter();


  constructor(private util: UtilService, private fb: FormBuilder,private sonhadorServ: SonhadorService) {
     console.log("teste constructor")
    this.formUser = fb.group(
      {
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required, Validators.minLength(6)]],
        nome: [''],
        pais: [''],
        idade: [''],
        ehCadastro: [''],
        confirm_password: ['', [Validators.required]]
      },
      {
        validator: ConfirmedValidator('senha', 'confirm_password')
      }
    )


   }

  ngOnInit(): void {
    console.log("teste ngOnInit")
  }
  
  get f() { return this.formUser.controls; }

  onSubmit() {
    console.log('submited');
  }

  Logar(){  
    let usuario: loginDto = {
      Email: this.formUser.get('email').value,
      Password: this.formUser.get('senha').value
    }

    this.carregando = true;
    this.sonhadorServ.Entrar(usuario)
                     .subscribe( (response: sonhadorLocal) =>
                     {
                        if( response != null)
                        {                     
                          let sonhador: sonhadorLocal = {
                            id: response.id,
                            nome: response.nome,
                            email: response.email,
                            temaDoUsuario:response.temaDoUsuario
                          }
                         
                          this.sonhadorServ.GravarUsuarioLocal(JSON.stringify(sonhador));     
                         
                           this.authEvent.emit({tipo: 'dialogRef-close-openLoginTeste', obj:sonhador});
                        }
                        else{
                          this.util.AlertSnack('Senha ou usuário inválido','Atenção');
                        }
                        this.carregando = false;
                      },
                      error =>
                      {
                        console.log('erro', error);
                        this.carregando = false;
                      }
                    )
  }

  Registrar(){
    let usuario: SonhadorDto = {
      Id: '',
      Email: this.formUser.get('email').value,
      Nome: this.formUser.get('nome').value,
      Senha: this.formUser.get('senha').value
    }

    this.sonhadorServ.criarConta(usuario)
                     .subscribe(
                     (response) =>
                        {
                          if(response != null){
                            this.util.AlertSnack('Registro efetuado!','Parabéns!');
                            this.AtualizarStatusRegistrar();
                          }
                          else{
                            this.util.AlertSnack('Não foi possível efetuar registro.','Erro...');
                          }
                        },
                      error =>
                        this.util.AlertSnack('Não foi possível efetuar registro.','Erro...')
                      )
  }

  AtualizarStatusRegistrar(): void {
    this.isRegistrar = !this.isRegistrar;
  }

}
