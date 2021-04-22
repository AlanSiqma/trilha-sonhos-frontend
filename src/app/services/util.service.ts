import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { sonhadorLocal } from 'src/app/models/sonhadorLocal';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private _snackBar: MatSnackBar) { }

  AlertSnack(msg, titulo = ''){
    const h: MatSnackBarHorizontalPosition = 'center'
    const v: MatSnackBarVerticalPosition = 'bottom';

    this._snackBar.open(msg, titulo, {
      duration: 3500,
      horizontalPosition: h,
      verticalPosition: v,
    });
  }

  LimitarTexto(msg: string, qtdCaractere: number): string{

    if( msg != null && msg.length > qtdCaractere )
      msg = msg.substr(0, qtdCaractere).concat("...");

    return msg;
  }

  PegarUsuarioLogado(): sonhadorLocal{
    let sonhador: sonhadorLocal = JSON.parse( localStorage.getItem('usuarioBfd') );
    return sonhador;
  }

  IsLoggin(): boolean{
   
    var result = false;
   
    if(localStorage.getItem('usuarioBfd') != null){
      result = true;
    }
   
    return result;
  }

}
