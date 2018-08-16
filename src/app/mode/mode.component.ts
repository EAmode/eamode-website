import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eamode-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {

  constructor() { }

  consulting = [
    {
      img: 'ongoingAnalytics.svg',
      description: 'Monitoring ',
      detail: 'Continuous KPI monitoring in a BI dashboard'
    },
    {
      img: 'alert.svg',
      description: 'Alerting ',
      detail: 'Real-time alerts and reminders'

    }, 
    {
      img: 'connected.svg',
      description: 'Infrastructure',
      detail: 'Managed infrastructure for system-wide integrations'
    }
  ]

  ngOnInit() {
  }

}
