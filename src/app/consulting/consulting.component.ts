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
      detail: 'Review and of existing standards'
    },
    {
      img: 'standardization.svg',
      description: 'Standardization ',
      detail: 'Organization-wide strategy'

    },
    {
      img: 'target.svg',
      description: 'Measurement',
      detail: 'KPI and implementation plan'
    }
  ]

  expertise = [
    {
      detail: "This is a thing that we do really ",
    },
    {
      detail: "Blockchain and Cryptocurrency "
    },
    {
      detail: "Business Process: TOGAF "
    }
  ]

  ngOnInit() {
  }

}
