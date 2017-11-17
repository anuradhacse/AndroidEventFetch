import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataServiceService } from './in-memory-data-service.service';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { AccessEventsComponent } from './access-events/access-events.component';
import { AccessEventService } from './access-event.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AccessEventsComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,

  ],
  providers: [HeroService, MessageService, InMemoryDataServiceService, AccessEventService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
