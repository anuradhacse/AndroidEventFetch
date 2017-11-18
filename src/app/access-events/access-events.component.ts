import { Component, OnInit } from '@angular/core';
import {AccessEventService} from "../access-event.service";
import {AccessEvent} from "../access-event";
import {Successor} from "../successor";

@Component({
  selector: 'app-access-events',
  templateUrl: './access-events.component.html',
  styleUrls: ['../heroes/heroes.component.css']
})
export class AccessEventsComponent implements OnInit {

  constructor(private accessEventService: AccessEventService ) { }

  events: AccessEvent[];
  selectedEvent: AccessEvent;
  successors: Successor[];

  ngOnInit() {
  this.getFileAccessEvents();
  }

  getFileAccessEvents(): void {
    this.accessEventService.getPrefetcherList().subscribe(
      events => {
        console.log('component ' + events[0].successor_list[0].name);
        this.events = events;
      },
      err => {
        console.log(err);
      }
    );

  }

}
