import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eamode-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  constructor() { }


  software = [
    {
      img: 'gitflow.svg',
      description: 'Managed SDLC',
      detail: 'Automated Development Pipeline'
    },
    {
      img: 'pallete.svg',
      description: 'Project Management',
      detail: 'Easily themeable and composeable web components library'

    },
    {
      img: 'eang-logo-white.svg',
      description: 'Application Architecture',
      detail: 'Get started with our Components library, Eang'
    }
  ]

  ngOnInit() {
  }

}
