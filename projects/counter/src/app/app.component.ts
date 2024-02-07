import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  count:number=0;
  inc(){
    this.count++;
  }
  decr(){
    this.count--;
  }
  reset(){
    this.count=0;
  }
}