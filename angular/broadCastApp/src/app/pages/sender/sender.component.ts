import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BroadcastService } from 'src/app/service/broadcast.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})

export class SenderComponent implements OnInit {
  messageForm = new FormGroup({
   messageText: new FormControl(),
   messageTextTo: new FormControl('tab1')
  });

  constructor(
    private broadcastService: BroadcastService
  ) {
  }

  ngOnInit(): void {
    this.broadcastService.newChannel('connection_channel')
  }

  sendMessage() {
    this.broadcastService.publish({
      type: this.messageForm.value.messageTextTo,
      payload: this.messageForm.value.messageText
    })
  }


}
