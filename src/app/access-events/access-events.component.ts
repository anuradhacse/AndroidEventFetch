import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccessEventService} from "../access-event.service";
import {AccessEvent} from "../access-event";
import {Successor} from "../successor";
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-access-events',
  templateUrl: './access-events.component.html',
  styleUrls: ['./access-events.component.css']
})
export class AccessEventsComponent implements OnInit, OnDestroy {

  constructor(private accessEventService: AccessEventService ) { }

  events: AccessEvent[];
  selectedEvent: AccessEvent;
  successors: Successor[];
  timerSubscription: Observable;

  ngOnInit() {
  this.getFileAccessEvents();
  }

  getFileAccessEvents(): void {
    this.accessEventService.getPrefetcherList().subscribe(
      events => {
        console.log('component ' + events[0].successor_list[0].name);
        this.events = events;
        this.refreshData();

      },
      err => {
        console.log(err);
      }
    );

  }

  private refreshData(): void {

    this.accessEventService.getPrefetcherList().subscribe(
      events => {
        this.events = events;
        this.subscribeToData();
      },
      err => {
        console.log(err);
      }
    );
  }

  private subscribeToData(): void{
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  }

  public ngOnDestroy(): void {

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
