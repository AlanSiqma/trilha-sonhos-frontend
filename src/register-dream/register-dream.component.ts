import { VisibilidadeSonhoService } from './../services/visibilidade-sonho.service';
import { StatusService } from './../services/status.service';
import { UtilService } from './../app/services/util.service';
import { sonhadorLocal } from './../models/sonhadorLocal';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { SonhosService } from 'src/services/sonhos.service';
import { SonhoDto } from 'src/models/sonhoDto';

export interface DialogData {
  tipo: string;
  usuarioId: string;
  visibilidade: string;
  descricaoSonho: string;
}

@Component({
  selector: 'app-register-dream',
  templateUrl: './register-dream.component.html',
  styleUrls: ['./register-dream.component.css']
})
export class RegisterDreamComponent implements OnInit {

  btRealizar = false;
  formUser: FormGroup;
  idSonhoDestaque;
  public isEmojiPickerVisible: boolean;

  status = { Realizado: null, Em_Progresso: null };
  tipoVisbibilidade = { Publica: null, Privada: null };

  usuario: sonhadorLocal = JSON.parse(localStorage.getItem('usuarioBfd'));

  public addEmoji(event) {
    var descricaoSonho = this.formUser.get('descricaoSonho').value;
    this.formUser.get('descricaoSonho').setValue(`${descricaoSonho} ${event.emoji.native}`) ;
    this.isEmojiPickerVisible = false;
 }

  constructor(
        private sonhosService: SonhosService,
        public dialogRef: MatDialogRef<AppComponent>,
        private util: UtilService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData)
        {
          this.validarBtRealizar(data);
          this.Startup(data);
        };

  Startup(data){
    this.PopularTipoStatus();
    this.PopularTipoVisibilidade(false);
    this.GerarForm();
    if(data) this.PopularForm(data);    
  }

  validarBtRealizar(data){
    if(data)
      this.btRealizar = true;
    else
      this.btRealizar = false;
  }

  PopularForm(model){
    let sonho = JSON.parse(model.data);
    this.formUser.patchValue(
      {
        id: sonho.id,
        descricaoSonho: sonho.descricaoSonho,
        usuarioId: sonho.idSonhador,
        visibilidade: sonho.private,
        isPrivate: sonho.private,
        status: sonho.Status == this.status.Realizado
      });
    }

  ngOnInit(): void {
  }

  get visibilidade(): boolean {
    return this.formUser.get('isPrivate').value;
  }

  GerarForm(){
    this.formUser = new FormGroup({
      id: new FormControl(),
      usuarioId: new FormControl(),
      descricaoSonho: new FormControl('', [Validators.required, Validators.minLength(6)]),
      visibilidade: new FormControl(),
      isPrivate: new FormControl(false),
      status: new FormControl()
    });
  }

  PopularTipoStatus(){
    this.status.Realizado = "Realizado";
    this.status.Em_Progresso = "Em Progresso";
  }

  PopularTipoVisibilidade(ehPrivado: boolean){
    return ehPrivado ?
              this.tipoVisbibilidade.Privada = "Privada":
              this.tipoVisbibilidade.Publica = "Publica";
  }

  SignIn(){
    const user = this.formUser.get('email').value;
    this.dialogRef.close(user);
  }

  Close = (msg = null) => this.dialogRef.close(msg);

  getSonho(): SonhoDto {

    let sonho: SonhoDto = {
      Id: this.formUser.get('id').value,
      DescricaoSonho: this.formUser.get('descricaoSonho').value,
      IdSonhador: this.usuario.id,
      Visibilidade: this.PopularTipoVisibilidade(this.visibilidade),
      Status: this.getIdStatus(),
      Sonho: ''
    };

    return sonho;
  }

  getIdStatus(){
    return this.formUser.get('status').value == true ? this.status.Realizado : this.status.Em_Progresso;
  }

  RegitrarSonho(){
    if(this.data != null && this.data.tipo =='editar')
      this.EditarSonho();
    else{
      this.sonhosService.registrarSonho(this.getSonho())
                        .subscribe(
                          response =>
                          {
                              this.idSonhoDestaque=response.idSonhoDestaque;
                              var result={idSonhoDestaque:response.idSonhoDestaque,msg:'atualizarListaMeusSonhos' }
                              if(response != null){
                                this.util.AlertSnack("Sonho registrado!","CADASTRADO!");
                                this.Close(result);
                              }
                          },
                          error =>
                          {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");
                              this.Close();
                          }
                         );
    }

  }

  EditarSonho(){
    this.sonhosService.alterar(this.getSonho())
                      .subscribe(
                        response =>
                        {
                            if(response != null){
                              this.util.AlertSnack("Sonho registrado!","CADASTRADO!");
                              this.Close('atualizarListaMeusSonhos');
                            }
                        },
                        error =>
                        {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");
                            this.Close();
                        }
                       );
  }
}
