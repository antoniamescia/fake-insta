import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User = {
    firstName: 'Valiant',
    lastName: 'Toro',
    username: '@torito10',
    profilePic: '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => console.log(users));
  }

}
