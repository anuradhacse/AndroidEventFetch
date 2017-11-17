import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public because we are using messege service directly in messge.component.html
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
