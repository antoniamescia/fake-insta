import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
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
    return {users};

  }

  
}
