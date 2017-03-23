import { Component } from '@angular/core';
// import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test = 'lifecycle start';
  title = 'app works!';
  delete = false;
}
