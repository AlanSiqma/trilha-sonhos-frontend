import { UtilService } from './../app/services/util.service';
import { SonhadorDto } from './../models/sonhadorDto';
import { loginDto } from './../models/loginDto';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/models/user';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { SonhadorService } from 'src/services/sonhador.service';
import { sonhadorLocal } from 'src/models/sonhadorLocal';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  carregando = false;
  isRegistrar = false;
  isChecked = true;
  submitted = false;
  formUser: FormGroup = new FormGroup({});;
  users: User[];

  constructor( public dialogRef: MatDialogRef<AppComponent>,
               private util: UtilService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private sonhadorServ: SonhadorService,
               private fb: FormBuilder
  )
  {
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
                          
                          this.dialogRef.close(response);
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
