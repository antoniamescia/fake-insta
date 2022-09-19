import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

import { Image } from '../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }

}
