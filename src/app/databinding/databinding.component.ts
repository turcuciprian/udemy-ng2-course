import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'this is string interpolation';
  numberInterpolation = 2;
  onTest(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
