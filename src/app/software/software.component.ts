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
      detail: 'We support a complete Software Development Lifecycle from concept-to-implementation.'
    },
    {
      img: 'pallete.svg',
      description: 'Project Management',
      detail: 'Our experts can support your existing team with Project Management and product management.'

    },
    {
      img: 'eang-logo-white.svg',
      description: 'Application Architecture',
      detail: 'Complete your project with a high level application architecture, system design, and data modeling.'
    }
  ]

  ngOnInit() {
  }

}
