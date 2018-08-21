import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eamode-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() {}

  services = [
    {
      name: 'Consulting',
      image: '',
      url: 'consulting',
      description: [
        {
          text: 'Business Process',
        },
        {
          text: 'Enterprise Architecture'
        },
        {
          text: 'Solution Architecture'
        }
      ],
    },
    {
      name: 'Software Development',
      image: '',
      url: 'software',
      description: [
        {
          text: 'Concept to Production'
        },
        {
          text: 'Managed SDLC'
        },
        {
          text: 'Open Source'
        }
      ],
    },
    {
      name: 'MODE Platform',
      image: '',
      url: 'mode',
      description: [
        {
          text: 'Process Analytics'
        },
        {
          text: 'Process Repository'
        },
        {
          text: 'OLAP-as-a-Service'
        }
      ],
    }
  ]


  ngOnInit() {}
}
