import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

import { Image } from '../models/image';
import { User } from '../models/user'; 

@Injectable({
  providedIn: 'root'
})


export class InMemoryDataService extends InMemoryDbService {
  createDb()  {
    const users: User[] = [
      {id: 1, firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: 9, profileImages: [1, 2]},
      {id: 2, firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: 13, profileImages: [3, 4]},
      {id: 3, firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: 10, profileImages: [5, 6]},
      {id: 4, firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: 12, profileImages: [7, 8]}
    ];

    const images: Image[] = [
      { id: 1, imageSrc: '../../assets/posts/alan-king-KZv7w34tluA-unsplash.jpg'},
      { id: 2, imageSrc: '../../assets/posts/alvan-nee-9M0tSjb-cpA-unsplash.jpg'},
      { id: 3, imageSrc: '../../assets/posts/brian-mcgowan-P1-6ioOcGNU-unsplash (1).jpg'},
      { id: 4, imageSrc: '../../assets/posts/jaime-dantas-Fpvr7thkAf0-unsplash.jpg'},
      { id: 5, imageSrc: '../../assets/posts/ian-dooley-TLD6iCOlyb0-unsplash.jpg'},
      { id: 6, imageSrc: '../../assets/posts/kelsey-curtis-dIs-MqalSSE-unsplash.jpg'},
      { id: 7, imageSrc: '../../assets/posts/keszthelyi-timi-ezUDjYy17EA-unsplash.jpg'},
      { id: 8, imageSrc: '../../assets/posts/lokesh-paduchuri-xOBGLCETJCo-unsplash.jpg'},
      { id: 9, imageSrc: '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'},
      { id: 10, imageSrc: '../../assets/profile-pics/michael-dam-mEZ3PoFGs_k-unsplash.jpg'},
      { id: 11, imageSrc: '../../assets/profile-pics/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg'},
      { id: 12, imageSrc: '../../assets/profile-pics/podpros-UpiF461EAHU-unsplash.jpg'},
      { id: 13, imageSrc: '../../assets/profile-pics/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'}
    ];

    return {users, images};
  }
}
