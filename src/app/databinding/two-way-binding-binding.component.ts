import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-data-binding',
  template: `
  <p>{{person.name}}</p>
    <input type="text" [(ngModel)]="person.name" [value]="person.name" />
  `,
  styles: []
})
export class TwoWayBindingBindingComponent{
    person={
      name: 'Maximilian',
      id: 10
    };
}
