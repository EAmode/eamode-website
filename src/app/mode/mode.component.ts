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
      detail: 'Monitor Key Performance Indicators (KPIs) in a BI dashboard of your choice.'
    },
    {
      img: 'alert.svg',
      description: 'Alerting ',
      detail: 'Configure real-time alerts and reminders about critical processes'

    },
    {
      img: 'connected.svg',
      description: 'Infrastructure',
      detail: 'Managed infrastructure for system-wide integrations and configurations.'
    }
  ]

  ngOnInit() {
  }

}
