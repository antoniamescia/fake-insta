import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../models/chat';
import { User } from '../models/user';
import { InMemoryMessage } from '../services/in-memory-message-data.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

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
 
  @Input() chat: Chat = {
    chatMessage: 'Hello'
  };
  
  
  @Input() chat2: Chat = {
    chatMessage: 'Hola (en español)'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
