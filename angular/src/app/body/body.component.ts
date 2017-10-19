import {Component, Input, OnInit, ViewChild} from '@angular/core';

import * as anime from 'animejs';
import {ApiService} from "../api.service";
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input('user') user;

  settingsRotate = { value: 0 };
  isAnimating = false;
  displayOpened = 'block';

  timeNow;

  constructor(private api : ApiService, private alert:AlertService) {
    console.log(this.user);
    this.timeNow = Date.now();
    setInterval(() => {
      this.timeNow = Date.now();
    }, 1000);
  }

  ngOnInit() {
  }

  pass(str) {
    if (this.user.showPass === true) {
      return str;
    } else {
      return '****';
    }
  }

  openSettingsPopup(user) {
    this.alert.swal({
      type: 'info',
      title: 'Account settings',
      confirmButtonText: 'Save',
      html: '(' + user.displayName + ')<br><br>' +
            '<small>Show password: </small><input id="showPassCheckbox" type="checkbox">',
      onOpen: () => {
        const el: any = document.getElementById("showPassCheckbox");
        el.checked = this.user.showPass;
        el.addEventListener('click', () => {
          user.showPass = !user.showPass;
        });
      },

      preConfirm: () => {
        const el: any = document.getElementById("showPassCheckbox");
        this.api.socket.emit('editShowPass', { id: this.user.id, val: el.checked }, (data) => {
          if(data.status !== 'success') {
            this.alert.swal({
              type: 'error',
              title: 'Account settings',
              text: data.msg
            });
          }
        });

        return new Promise(function (resolve) {
          resolve('');
        });
      }
    });
  }

  toggleshowPass() {

  }

  getDate(str) {
    return str.split(' ')[0];
  }

  getTime(str) {
    return str.split(' ')[1];
  }

  removeAccount(id) {
    this.alert.swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#db524b !important',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
      this.api.socket.emit('removeAccount', id, (res) => {
        if (res.status === 'success') {
          this.alert.swal({
            title: 'Deleted',
            text: 'Account successfully deleted',
            type: 'success'
          });
        } else {
          this.alert.swal({
            title: 'Deleted',
            text: res.msg,
            type: 'error'
          });
        }
      });
    });
  }

  toggleSettings() {
    if (this.isAnimating) { return; }

    this.isAnimating = true;
    if (document.getElementById('settingsContent').style.opacity === '1' ||
      document.getElementById('settingsContent').style.opacity === '') {
      anime({
        targets: this.settingsRotate,
        value: 180,
        easing: 'easeInQuad',
        round: 10,
        duration: 300,
        complete: () => {
          this.displayOpened = 'none';
          this.isAnimating = false;
        }
      });

      anime({
        targets: '#settingsContent',
        easing: 'easeInQuad',
        duration: 300,
        marginTop: '-' + document.getElementById('settingsContent').clientHeight + 'px',
      });
      anime({
        targets: '#settingsContent',
        easing: 'easeInQuad',
        duration: 200,
        opacity: 0
      });
    } else {
      this.displayOpened = 'block';
      anime({
        targets: this.settingsRotate,
        value: 0,
        easing: 'easeInQuad',
        round: 10,
        duration: 300,
        complete: () => {
          this.isAnimating = false;
        }
      });

      anime({
        targets: '#settingsContent',
        easing: 'easeInQuad',
        duration: 300,
        marginTop: '0px',
        opacity: 1
      });
      anime({
        targets: '#settingsContent',
        easing: 'easeInQuad',
        duration: 200,
        offset: 100,
        opacity: 1
      });
    }
  }
}
