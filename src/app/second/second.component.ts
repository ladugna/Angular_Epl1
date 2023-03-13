import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  // standalone: true,
  // imports: [CommonModule],
  template: `
    <p>
      second works!
    </p>
    <h1 *ngFor="let n of data"> {{n}}</h1>
    
  `,
  styles: [
  ]
})
export class SecondComponent {
data :number[]= [1,2,3]
}
