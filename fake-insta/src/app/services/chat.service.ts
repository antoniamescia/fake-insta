import { Injectable, Input } from '@angular/core';
import { Chat } from '../models/chat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  @Input() user: User = {
    firstName: 'Valiant',
    lastName: 'Toro',
    username: '@torito10',
    profilePic: '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'
  };
  @Input() user2: User = {
    firstName: 'Ginebra',
    lastName: 'Barrios',
    username: '@ginebra',
    profilePic: '../../assets/profile-pics/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
  };
  @Input() user3: User = {
    firstName: 'Dulas',
    lastName: 'Sarabia',
    username: '@dsarabia',
    profilePic: '../../assets/profile-pics/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'
  };
  @Input() chat: Chat = {
    chatMessage: 'Hello'
  };
  @Input() chat2: Chat = {
    chatMessage: 'Hola (en español)'
  };
  @Input() chat3: Chat = {
    chatMessage: 'El mensaje de referencia de Dulas'
  };
  
  
}
