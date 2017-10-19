import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users;
  activeUser = 0;

  isLoaded = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    if (this.api.loaded === true) {
      this.users = this.api.dataFromServer;
      this.isLoaded = true;
    }

    this.api.events.subscribe((obj) => {
      const type = obj.status;
      if (type === 'newData') {
        this.isLoaded = true;
        this.users = obj.val;

        if(this.users.length -1 < this.activeUser) {
          this.activeUser = 0;
        }
        if(this.users.length === 0) {
          this.activeUser = 0;
        }
      } else if (type === 'disconnected') {
        this.isLoaded = false;
      } else if(type === 'setActive') {
        console.log('new active server');
        this.activeUser = obj.val;
      }
    });
  }

  setActiveUser(id) {
    this.activeUser = id;
  }

  getActiveUser(id) {
    const usr = this.users[id];
    return usr;
  }
}
