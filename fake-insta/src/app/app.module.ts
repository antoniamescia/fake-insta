import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';

import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMessage } from './services/in-memory-message-data.service';



@NgModule({
  declarations: [
    AppComponent,

    MessagesComponent,
    ChatComponent,

    UserComponent,
    InstaButtonComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    InMemoryWebApiModule.forRoot(InMemoryMessage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
