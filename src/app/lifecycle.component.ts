import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('OnChanges');
  }
  ngDoCheck() {
    this.log('DoCheck');
  }
  ngAfterContentInit() {
    this.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }
  ngOnDestroy() {
    this.log('OnDestroy');
  }
  private log(hook:string){
    console.log(hook);
  }

}
