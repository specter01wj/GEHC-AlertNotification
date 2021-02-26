import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
	btnTitle: string = '';
	btnType: string = 'Success';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClicked(message: string): void {
    this.btnTitle = 'Button Color: ' + message;
  }

}
