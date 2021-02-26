import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from './alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() type: string = 'default-alert';
	@Input() alert: string = '';
	@Output() btnClicked: EventEmitter<string> = new EventEmitter<string>();

	toggleAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy() {
  }

  onClick(): void {
  	this.toggleAlert = !this.toggleAlert;
  	this.btnClicked.emit(`${this.type}`);
  }

  alertClass(alert) {
      if (!alert) return;

      const classes = ['alert', 'alert-dismissable'];
              
      const alertTypeClass = {
          Success: 'alert alert-success',
          Error: 'alert alert-danger',
          Info: 'alert alert-info',
          Warning: 'alert alert-warning'
      }

      classes.push(alertTypeClass[alert]);

      return classes.join(' ');
  }

}
