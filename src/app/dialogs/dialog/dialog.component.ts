import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  sonho: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.sonho = JSON.parse(data)
    
   }
  ngOnInit(): void {
  }
 
  EmDesenvolvimento(){

    alert('\n[Futura Funcionalidade] \nEstamos trabalhando em seu desenvolvimento. \nEm breve, ela será liberada.\n:) Obrigado.')
     
    }
}
export class MenuIconsExample {}
