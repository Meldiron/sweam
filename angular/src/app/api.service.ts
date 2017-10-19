import {EventEmitter, Injectable} from '@angular/core';
import * as io from 'socket.io-client';


@Injectable()
export class ApiService {

  socket;
  loaded = false;
  dataFromServer = null;
  events = new EventEmitter();

  constructor() {
    // this.dataFromServer = [
    //   {
    //     displayName: 'Meldiron',
    //     name: 'meldironsk',
    //     password: 'melpass'
    //   },
    //   {
    //     displayName: 'Vysocina',
    //     name: 'vysjakub',
    //     password: 'neviem'
    //   }
    // ];
    //
    // this.loaded = true;
    // this.events.emit('newData');

    this.socket = new io('http://localhost:3000/');

    this.socket.on('newData', (data) => {
      this.dataFromServer = data;
      this.events.emit({ status: 'newData', val: data });
    });

    this.socket.on('setActive', (data) => {

      console.log('new active API');
      this.events.emit({status: 'setActive', val: data});
    });

    this.socket.on('disconnect', () => {
      this.events.emit({ status: 'disconnected' });
    });
  }

  sendOpenUrl(url) {
    this.socket.emit('openUrl', url);
  }

}
