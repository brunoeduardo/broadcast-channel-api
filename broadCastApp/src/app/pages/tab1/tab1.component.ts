import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BroadcastService } from 'src/app/service/broadcast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  messages: string[] = [];
  broadcastChannel = this.broadcastService.newChannel('connection_channel');
  showRedirectedMessage: boolean = false;
  showConnectionClosed: boolean = false;

  constructor(
    private broadcastService: BroadcastService,
    private ngZone: NgZone
    ) {
  }

  ngOnInit(): void {
    this.broadcastChannel.onmessage = (message) => {
      this.ngZone.run(() => this.receiveMessage(message));
    }
  }

  receiveMessage(message: any) {
    if(message.data.type === 'tab1' || message.data.type === 'both' ) {
        this.messages.push(message.data.payload);
    }

    if(message.data.type === 'tab1to2') {
      this.showRedirectedMessage = true;
      this.broadcastService.publish(
        { type: 'tab2',  payload: message.data.payload }
      );
      setInterval(() => {
        this.showRedirectedMessage = false;
      }, 3000);
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
