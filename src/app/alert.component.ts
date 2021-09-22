import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>This is a message : {{message}}</div>',
  styles: [`
  div{
    border: 1px solid black;
    background: salamon;
    padding: 10px;
    font-family: sans-sherif
  }
  `
  ]
})

export class AlertComponent{
  @Input() message:string;
}