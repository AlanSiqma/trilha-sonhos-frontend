import { VisibilidadeSonhoService } from '../../services/visibilidade-sonho.service';
import { StatusService } from '../../services/status.service';
import { UtilService } from '../../services/util.service';
import { sonhadorLocal } from '../../models/sonhadorLocal';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { SonhosService } from '../../services/sonhos.service';
import { SonhoDto } from 'src/app/models/sonhoDto';

export interface DialogData {
  tipo: string;
  usuarioId: string;
  visibilidade: string;
  descricaoSonho: string;
}

@Component({
  selector: 'dialog-register-dream',
  templateUrl: './dialog-register-dream.component.html',
  styleUrls: ['./dialog-register-dream.component.css']
})
export class DialogRegisterDreamComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>) {   
  }
 
  ngOnInit(): void {
  }
  RegisterEvent(item: any){
   
    this.dialogRef.close(item);
  }
}
