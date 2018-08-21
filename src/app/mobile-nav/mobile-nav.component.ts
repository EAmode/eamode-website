import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eamode-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  constructor() { }

  navOpen: boolean = false;

  toggleMenu() {
    // tslint:disable-next-line:no-unused-expression
   const toggle = this.navOpen = !this.navOpen;
}

toggleOpen() {
  if(this.navOpen) {
    return "23rem";
  } else {
    return "0%";
  }
}


  ngOnInit() {
  }

}
