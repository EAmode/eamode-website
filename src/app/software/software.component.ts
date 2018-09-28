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
      detail: 'Our experts can support and monitor your existing team custom Jira workflows and tracking.'

    },
    {
      img: 'eang-logo-white.svg',
      description: 'Application Architecture',
      detail: 'We give you a roadmap for your development with application architectures and system design.'
    }
  ]

  ngOnInit() {
  }

}
