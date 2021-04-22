import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  logoBfd = './assets/logo-bfd-2.png';
 
  constructor(public dialogRef: MatDialogRef<AppComponent>) {   
  }
 
  ngOnInit(): void {
  }
  EventAuthEvent(item: any){
    this.dialogRef.close(item.obj);
  }
}
