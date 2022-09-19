import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';
import { InMemoryMessage } from './in-memory-message-data.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = InMemoryMessage.mensaje;
  static messages: string;

  add(message: string)
  {
    this.messages.push(message);
  }
  
  clear()
  {
    this.messages = [];
  }
  
}
