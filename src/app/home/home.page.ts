import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number;
  num2: number;
  numR: number;


  resta() {
    this.numR= this.num1 - this.num2;
    console.log(this.numR);
  }

  reinicia() {
    this.num1=null;
    this.num2=null;
    this.numR=null;
  }

}