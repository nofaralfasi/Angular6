import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }

  resetUserName() {
    this.userName = '';
  }

}
