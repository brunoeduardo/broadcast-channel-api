import { Component, NgZone, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/service/broadcast.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

  messages: string[] = [];
  broadcastChannel = this.broadcastService.newChannel('connection_channel');
  showConnectionClosed: boolean = false;

  constructor(
    private broadcastService: BroadcastService,
    private ngZone: NgZone
    ) {
  }

  ngOnInit(): void {
    this.broadcastChannel.onmessage = (message: any) => {
      if(message.data.type === 'tab2' || message.data.type === 'both' ) {
        this.ngZone.run(() => {this.messages.push(message.data.payload)});
      }
    }
  }


  closeConnection( ) {
    this.broadcastChannel.close();
    this.showConnectionClosed = true;
    setInterval(() => {
      this.showConnectionClosed = false;
    }, 3000);
  }
}
