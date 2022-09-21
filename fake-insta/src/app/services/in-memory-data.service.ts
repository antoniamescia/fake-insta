import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

import { Image } from '../models/image';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        firstName: 'Valiant',
        lastName: 'Toro',
        username: '@torito10',
        profilePic:
          '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg',
      },
      {
        firstName: 'Ginebra',
        lastName: 'Barrios',
        username: '@ginebra',
        profilePic:
          '../../assets/profile-pics/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      },
      {
        firstName: 'Dulas',
        lastName: 'Sarabia',
        username: '@dsarabia',
        profilePic:
          '../../assets/profile-pics/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg',
      },
      {
        firstName: 'Reynaldo',
        lastName: 'Rincón',
        username: '@reyrincon',
        profilePic:
          '../../assets/profile-pics/podpros-UpiF461EAHU-unsplash.jpg',
      },
    ];


    const images: Image[] = [
      {
        id: 1,
        imageSrc: '../../assets/posts/alan-king-KZv7w34tluA-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 2,
        imageSrc: '../../assets/posts/alvan-nee-9M0tSjb-cpA-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 3,
        imageSrc: '../../assets/posts/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 4,
        imageSrc: '../../assets/posts/hannah-lim-U6nlG0Y5sfs-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 5,
        imageSrc: '../../assets/posts/jamie-street-uNNCs5kL70Q-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 6,
        imageSrc: '../../assets/posts/joshua-j-cotten-g1XMkqwN4po-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 7,
        imageSrc: '../../assets/posts/klaus-steinberg-hcjG82lNTwg-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 8,
        imageSrc: '../../assets/posts/karen-lau-2EmW_HIy6Ns-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 9,
        imageSrc: '../../assets/posts/svitlana-kg7gcQtp4N8-unsplash.jpg',
        description: 'dessert'
      },
      {
        id: 10,
        imageSrc: '../../assets/posts/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg',
        description: 'dessert'
      },
      {
        id: 11,
        imageSrc: '../../assets/posts/kelsey-curtis-dIs-MqalSSE-unsplash.jpg', 
        description: 'dessert'
      },
      {
        id: 12,
        imageSrc: '../../assets/posts/kenta-kikuchi-LZ6BTZnizD8-unsplash.jpg',
        description: 'dessert'
      }
    ];

    const imagesByCategory = {
      dog: [1,2,3,4],
      capybara: [5,6,7,8],
      dessert: [9,10,11,12]
    }




    return { users, images, imagesByCategory};
  }
}
