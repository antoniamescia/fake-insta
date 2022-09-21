import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';

import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { InMemoryDataService } from './services/in-memory-data.service';

import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavbarDiscoverButtonComponent } from './navbar-discover-button/navbar-discover-button.component';
import { NavbarProfileButtonComponent } from './navbar-profile-button/navbar-profile-button.component';
import { NavbarSearchButtonComponent } from './navbar-search-button/navbar-search-button.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ChatListComponent } from './chat-list/chat-list.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UserService } from './services/user.service';
import { ImageService } from './services/image.service';
import { ChatService } from './services/chat.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'chats', component: ChatListComponent },
];

@NgModule({
  declarations: [
    AppComponent,

    MessagesComponent,
    ChatComponent,

    UserComponent,
    InstaButtonComponent,
    SearchBarComponent,
    SearchViewComponent,    
    BottomNavbarComponent,
    TopNavbarComponent,
    NavbarDiscoverButtonComponent,
    NavbarProfileButtonComponent,
    NavbarSearchButtonComponent,
    ChatListComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    UserService,
    ImageService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
