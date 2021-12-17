import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-challenges';

  greet(name: string) {
    alert('Hello' + name);
  }

  onomatopoeias: Array<string> = [];

  onReceiveNewOnomatopia(newItem: string) {
    this.onomatopoeias.push(newItem);
  }
}
