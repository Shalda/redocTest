import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'sw-rdc';
  public text = 'BlackSwan technologies';
  public specFile: string = 'assets/pet.json';
  public specUrl: string =
    'https://petstore.swagger.io/v2/swagger.json';
  public logoUrl: string = 'assets/bst.jpg';
  public rStyle: string = 'focused';
  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.rStyle = 'read';
          console.log('small display');
        } else {
          this.rStyle = 'focused';
        }
      });
  }
}
