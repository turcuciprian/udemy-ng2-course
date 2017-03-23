import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `

  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result: number = 0;
}
