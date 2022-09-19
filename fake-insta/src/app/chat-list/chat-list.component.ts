import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Chat } from '../models/chat';
import { User } from '../models/user';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  public chatService = new ChatService();
  user: User = this.chatService.user; 
  user2: User = this.chatService.user2;
  user3: User = this.chatService.user3;
  chat: Chat = this.chatService.chat;
  chat2: Chat = this.chatService.chat2;
  chat3: Chat = this.chatService.chat3;
  constructor() { }

  ngOnInit(): void {
  }
  
}
