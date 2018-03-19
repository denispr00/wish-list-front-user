import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `
    <app-wish></app-wish>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OWish User';

  constructor(){
    
  }
}
