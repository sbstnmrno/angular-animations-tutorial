import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger ('changeState', [
      state ('stateRegister', style({transform: 'translateX(-50%)', opacity: 1})),
      state ('stateLogin', style({transform: 'translateX(-250%)', opacity: 0, display:'none'})),
      transition('stateLogin=>stateRegister', [animate('0.3s ease-in')]),
      transition('stateRegister=>stateLogin', [animate('0.3s ease-out')])
    ])
]

})
export class RegisterComponent implements OnInit {

  @Input() currentState;

  constructor() { }

  ngOnInit() {
  }

}
