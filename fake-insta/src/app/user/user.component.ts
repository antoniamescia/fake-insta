import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../models/image';
import { User } from '../models/user';

import { UserService } from './../services/user.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input() user!: User;

  imageProfile!: Image;

  constructor(private userService: UserService, private imageService: ImageService) { }

  ngOnInit(): void {
    //this.getUser();
    this.getImage();
  }

  // getUser(): void {
  //   this.userService.getUser(this.user.id)
  //     .subscribe(user => this.user = user);
  // }

  getImage(): void {
    this.imageService.getImage(this.user.profilePic)
      .subscribe(image => this.imageProfile = image);
  }
}