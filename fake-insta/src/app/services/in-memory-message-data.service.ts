import { Injectable } from '@angular/core';

import { Chat } from '../models/chat';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})

export class InMemoryMessage extends InMemoryDbService{
  static mensaje: string[];
  createDb() {
    const messages: Chat[] = [];[
      { username: '@torito10', messageDate1: 'Este es el primer mensaje de torito.', destination: '@ginebra', responseDate1: 'Es el mensaje 2'},
      { username: '@dsarabia', messageDate1: 'Este es el tercer mensaje', destination: '@reyrincon', responseDate: 'esta es la segunda respuesta.'}
      
    ];
    return { messages };
  }
  
  mensajes: string[] = [
    'Mensaje de torito para ginebra', 
    'Esta es la respuesta de ginebra.',
    'Como estas torito?',
    'Trabajando en el ejercicio de DWM.'

  ];
}
