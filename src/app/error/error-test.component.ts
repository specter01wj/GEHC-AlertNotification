import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.less']
})
export class ErrorTestComponent implements OnInit {
	btnTitle: string = '';
	btnType: string = 'Error';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClicked(message: string): void {
    this.btnTitle = 'Button Color: ' + message;
  }

}
