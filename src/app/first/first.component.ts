import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  // standalone: true,
  // imports: [CommonModule, SecondComponent],
  template: `
    <p>
      first works!
      added the second
    </p>
    <h1>{{msg}}</h1>  
    <app-second></app-second>
    <app-third>
  `,
  styles: [
  ]
})
export class FirstComponent {

  //to dynamically render
  msg: String="No message"

  constructor(){
    setTimeout(()=>{
      this.msg="Now it is changed after 3 seconds"
    }, 3000)
  }

}
