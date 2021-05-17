import { UtilService } from '../../services/util.service';
import { sonhadorLocal } from '../../models/sonhadorLocal';
import { Component, Inject, OnInit,EventEmitter,Output ,Renderer2} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { SonhosService } from '../../services/sonhos.service';
import { SonhoDto } from 'src/app/models/sonhoDto';
import { Trilha } from 'src/app/models/Trilhadto';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


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
  editId: string | null = null;
  public isEmojiPickerVisible: boolean;
  @Output() registerEvent = new EventEmitter(); 
  arayTrilha:Trilha[]=[];
  descricaoTrilha:string= "";
  i = 0;
  progressBarTrail ():number{
    let result = 0;
    if( this.arayTrilha.length>0){
      let valueTrue = this.arayTrilha.filter( d => d.Valor == true).length;
      let lengthArayTrilha = this.arayTrilha.length;
      result = (valueTrue/lengthArayTrilha)*100;
    }
    return result;
  } 

  status = { Realizado: null, Em_Progresso: null };
  tipoVisbibilidade = { Publica: null, Privada: null };

  usuario: sonhadorLocal = JSON.parse(localStorage.getItem('usuarioBfd'));

  public addEmoji(event) {
    var descricaoSonho = this.formUser.get('descricaoSonho').value;
    this.formUser.get('descricaoSonho').setValue(`${descricaoSonho} ${event.emoji.native}`) ;
    this.isEmojiPickerVisible = false;
 }

  constructor(
    private renderer: Renderer2,
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
  startEdit(id: string): void {
    this.editId = id;
  }
  stopEdit(): void {
    this.editId = null;
  }
  PopularForm(model){
    let sonho = JSON.parse(model.data);
    this.i = sonho.trilha.length;
    for(var interation = 0; interation <  sonho.trilha.length;interation++ ){
      var interationId = interation.toString();
      this.arayTrilha.push(
                            {
                             Id:interationId,
                             Descricao:sonho.trilha[interation].descricao,
                             Valor:sonho.trilha[interation].valor
                            })
    }
    this.formUser.patchValue(
      {
        id: sonho.id,
        descricaoSonho: sonho.descricaoSonho,
        usuarioId: sonho.idSonhador,
        visibilidade: sonho.private,
        isPrivate: sonho.private,
        status: sonho.Status == this.status.Realizado,
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
      status: new FormControl(),
      descricaoTrilha: new FormControl()
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
    this.registerEvent.emit(user);
  }

  Close = (msg = null) =>  this.registerEvent.emit(msg); //this.dialogRef.close(msg);

  getSonho(): SonhoDto {

    let sonho: SonhoDto = {
      Id: this.formUser.get('id').value,
      DescricaoSonho: this.formUser.get('descricaoSonho').value,
      IdSonhador: this.usuario.id,
      Visibilidade: this.PopularTipoVisibilidade(this.visibilidade),
      Status: this.getIdStatus(),
      Trilhas:this.arayTrilha,  
      Sonho: ''
    };

    return sonho;
  }

  getIdStatus(){
    return this.formUser.get('status').value == true ? this.status.Realizado : this.status.Em_Progresso;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arayTrilha, event.previousIndex, event.currentIndex);
  } 
  AdicionarTrilha(){   
    var descricaoTrilha = this.descricaoTrilha;
    if(descricaoTrilha != null && descricaoTrilha != "" && descricaoTrilha.length > 4){       
      this.arayTrilha = [... this.arayTrilha,{
            Id: `${this.i}`,
            Descricao:descricaoTrilha,
            Valor:false
        }
    ];
    this.i++;
      
    }
    this.descricaoTrilha = "";   
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
                                this.registerEvent.emit(result); 
                              }
                          },
                          error =>
                          {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");                             
                            this.registerEvent.emit();
                          }
                         );
    }

  }
  RemoveElement(id: string){

    if(confirm('Tem certeza que deseja apagar este passo da trilha?')){
      this.arayTrilha =this.arayTrilha.filter(d => d.Id !== id);
    }
  }

  EditarSonho(){
    this.sonhosService.alterar(this.getSonho())
                      .subscribe(
                        response =>
                        {
                            if(response != null){
                              this.util.AlertSnack("Sonho registrado!","CADASTRADO!");
                              // this.Close('atualizarListaMeusSonhos');
                               var result={idSonhoDestaque:response.idSonhoDestaque,msg:'atualizarListaMeusSonhos' }
                              this.registerEvent.emit(result);
                            }
                        },
                        error =>
                        {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");
                           this.registerEvent.emit();
                        }
                       );
  }
}
