import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../models/chat';
import { User } from '../models/user';
import { ChatService } from '../services/chat.service';
import { InMemoryMessage } from '../services/in-memory-message-data.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 
  user: User = this.chatService.user; 
  user2: User = this.chatService.user2;
  user3: User = this.chatService.user3;
  chat: Chat = this.chatService.chat;
  chat2: Chat = this.chatService.chat2;
  chat3: Chat = this.chatService.chat3;


  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

}
