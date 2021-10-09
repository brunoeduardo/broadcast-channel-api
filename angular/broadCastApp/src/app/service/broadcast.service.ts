import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BroadcastMessage } from '../models/broadcast-message';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BroadcastService {

  constructor() {
  }

  public broadcastChannel!: BroadcastChannel;

  newChannel(nameChannel: string) {
    this.broadcastChannel = new BroadcastChannel(nameChannel);
    return this.broadcastChannel;
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

}
