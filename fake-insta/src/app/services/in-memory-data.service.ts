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
      { firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg' },
      { firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: '../../assets/profile-pics/michael-dam-mEZ3PoFGs_k-unsplash.jpg' },
      { firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: '../../assets/profile-pics/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg' },
      { firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: '../../assets/profile-pics/podpros-UpiF461EAHU-unsplash.jpg' }
    ];

    const images: Image[] = [
      { user: users[0], postImage: '../../assets/posts/alan-king-KZv7w34tluA-unsplash.jpg'},
      { user: users[0], postImage: '../../assets/posts/alvan-nee-9M0tSjb-cpA-unsplash.jpg'},
      { user: users[1], postImage: '../../assets/posts/brian-mcgowan-P1-6ioOcGNU-unsplash (1).jpg'},
      { user: users[1], postImage: '../../assets/posts/jaime-dantas-Fpvr7thkAf0-unsplash.jpg'},
      { user: users[2], postImage: '../../assets/posts/ian-dooley-TLD6iCOlyb0-unsplash.jpg'},
      { user: users[2], postImage: '../../assets/posts/kelsey-curtis-dIs-MqalSSE-unsplash.jpg'},
      { user: users[3], postImage: '../../assets/posts/keszthelyi-timi-ezUDjYy17EA-unsplash.jpg'},
      { user: users[3], postImage: '../../assets/posts/lokesh-paduchuri-xOBGLCETJCo-unsplash.jpg'}
    ];

    return {users, images};
  }
}
