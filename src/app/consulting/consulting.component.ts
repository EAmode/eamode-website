import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eamode-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor() { }


  consulting = [
    {
      img: 'e2e.svg',
      description: 'Documentation ',
      detail: 'Review and document your existing standards. This serves as the basis for different value added services'
    },
    {
      img: 'standardization.svg',
      description: 'Standardization ',
      detail: 'Identify bottlenecks and inefficiencies in your process. Begin eliminating inefficiencies with a standrziation plan.'

    },
    {
      img: 'target.svg',
      description: 'Measurement',
      detail: 'Lay the groundwork for a process performance measurement plan of custom KPIs.'
    }
  ]

  expertise = [
    {
      detail: "IT Consulting",
      subdetail: [
        {
          text: "IT Integrations"
        },
        {
          text: "JIRA Reporting"
        }
      ]

    },
    {
      detail: "Blockchain and Cryptocurrency",
      subdetail: [
        {
          text: "Ethereum dApp Development"
        },
        {
          text: "1000+ Hrs of Blockchain Operations experience"
        }
      ]
    },
    {
      detail: "Business Process",
      subdetail: [
        {
          text: "Enterprise Architecture"
        },
        {
          text: "Business Process Modeling"
        }
      ]
    }
  ]

  ngOnInit() {
  }

}
