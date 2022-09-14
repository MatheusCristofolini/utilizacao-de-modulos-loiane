import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-primeiro-nivel><app-primeiro-nivel>
  `
})
export class AppComponent {
  title = 'utilizacao-de-modulos-loiane';
}
