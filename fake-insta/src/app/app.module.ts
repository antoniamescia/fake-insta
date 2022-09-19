import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../app/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { ImageComponent } from './image/image.component';
import { PostComponent } from './post/post.component';
import { UserService } from './services/user.service';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InstaButtonComponent,
    PostComponent,
    ImageComponent
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
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
