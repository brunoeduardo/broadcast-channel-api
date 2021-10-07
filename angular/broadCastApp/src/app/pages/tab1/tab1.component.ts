import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/service/broadcast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  messages = [];

  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit(): void {
    this.broadcastService.messagesOfType('tab1')
  }
}
