import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('changeState', [
      state ('stateLogin', style({transform: 'translateX(-50%)', opacity: 1})),
      state ('stateRegister', style({transform: 'translateX(150%)', opacity: 0, display: 'none'})),
      transition('stateRegister=>stateLogin', [animate('0.3s ease-in')]),
      transition('stateLogin=>stateRegister', [animate('0.3s ease-out')])
    ])
]

})
export class LoginComponent implements OnInit {

  @Input() currentState; 

  constructor() { }

  ngOnInit() {
  }

}
