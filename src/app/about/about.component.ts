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
      description: [
        {
          text: 'Business Process'
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

  consulting = [
    {
      img: 'e2e.svg',
      description: 'Review and documentation of existing standards'
    },
    {
      img: 'standardization.svg',
      description: 'Organization-wide standardization strategy'
    },
    {
      img: 'target.svg',
      description: 'KPI measurement and implementation plan'
    }
  ]

  ngOnInit() {}
}
