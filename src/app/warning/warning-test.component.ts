import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-test',
  templateUrl: './warning-test.component.html',
  styleUrls: ['./warning-test.component.less']
})
export class WarningTestComponent implements OnInit {
	btnTitle: string = '';
	btnType: string = 'Warning';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClicked(message: string): void {
    this.btnTitle = 'Button Color: ' + message;
  }

}
