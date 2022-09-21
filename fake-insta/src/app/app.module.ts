import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';

import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ChatListComponent } from './chat-list/chat-list.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UserService } from './services/user.service';
import { ImageService } from './services/image.service';
import { ChatService } from './services/chat.service';



@NgModule({
  declarations: [
    AppComponent,

    MessagesComponent,
    ChatComponent,

    UserComponent,
    InstaButtonComponent,
    ChatListComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    UserService,
    ImageService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
