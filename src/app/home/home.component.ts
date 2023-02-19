import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public name = 'Hau';
public age = 15;
public resetName(): void {
  console.log('resetName');
  this.name = 'Hau';
}
}
