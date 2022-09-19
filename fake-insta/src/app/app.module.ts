import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavbarDiscoverButtonComponent } from './navbar-discover-button/navbar-discover-button.component';
import { NavbarProfileButtonComponent } from './navbar-profile-button/navbar-profile-button.component';
import { NavbarSearchButtonComponent } from './navbar-search-button/navbar-search-button.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InstaButtonComponent,
    BottomNavbarComponent,
    TopNavbarComponent,
    NavbarDiscoverButtonComponent,
    NavbarProfileButtonComponent,
    NavbarSearchButtonComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
