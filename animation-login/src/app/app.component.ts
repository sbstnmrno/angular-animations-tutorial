import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animation-login';

  toState = 'stateLogin';

  login(){
      this.toState = 'stateLogin'
  }

  register(){
      this.toState = 'stateRegister'
  }

}
