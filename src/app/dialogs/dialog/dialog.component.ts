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

}
export class MenuIconsExample {}
