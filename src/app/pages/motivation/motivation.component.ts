import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  logoBfd = './assets/logo-bfd-2.png';
 
  constructor() { }

  ngOnInit(): void {
  }

}
