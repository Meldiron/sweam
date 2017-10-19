import {Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import * as anime from 'animejs';
import {AlertService} from '../alert.service';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('users') users;
  @Input('activeUser') activeUser;

  @Output('setActiveUser') setActiveUser = new EventEmitter();

  isAnimating = false;
  arrowRotate = { value: 90 };
  displayOpened = 'block';

  fileSelectText = 'Select file';

  constructor(private alert: AlertService, private api: ApiService) {
  }

  ngOnInit() {
  }

  isActive(id) {
    if (this.activeUser === id) {
      return true;
    } else {
      return false;
    }
  }

  closeUsers() {
    if (this.isAnimating) { return; }

    this.isAnimating = true;
    if (document.getElementById('usersContent').style.opacity === '1' ||
        document.getElementById('usersContent').style.opacity === '') {
      anime({
        targets: this.arrowRotate,
        value: -90,
        easing: 'easeInQuad',
        round: 10,
        duration: 300,
        complete: () => {
          this.displayOpened = 'none';
          this.isAnimating = false;
        }
      });

      anime({
        targets: '#usersContent',
        easing: 'easeInQuad',
        duration: 300,
        marginTop: '-' + document.getElementById('usersContent').clientHeight + 'px',
      });
      anime({
        targets: '#usersContent',
        easing: 'easeInQuad',
        duration: 200,
        opacity: 0
      });
    } else {
      this.displayOpened = 'block';
      anime({
        targets: this.arrowRotate,
        value: 90,
        easing: 'easeInQuad',
        round: 10,
        duration: 300,
        complete: () => {
          this.isAnimating = false;
        }
      });

      anime({
        targets: '#usersContent',
        easing: 'easeInQuad',
        duration: 300,
        marginTop: '0px',
        opacity: 1
      });
      anime({
        targets: '#usersContent',
        easing: 'easeInQuad',
        duration: 200,
        offset: 100,
        opacity: 1
      });
    }
  }

  switchToUser(id) {
    this.setActiveUser.emit(id);
  }

  createAcc() {

    const info = {
      displayName: '',
      description: '',
      lastLogin: -1,
      createDate: -1,
      name: '',
      password: '',
      img: ''
    };

    const steps = [
      {
        title: 'Account Display info',
        text: 'Enter informations you will see in app',
        html: 'Enter informations you will see in app' +
              '<input placeholder="Display name" id="swal-input1" class="swal2-input">' +
              '<input placeholder="Description [optional]" id="swal-input2" class="swal2-input">',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Next',
        cancelButtonText: 'Cancel',
        progressSteps: ['1', '2', '3'],

        onOpen: () => {
          document.getElementById("swal-input1").focus();
        },

        preConfirm: () => {
          let el: any = document.getElementById('swal-input1');
          info.displayName = el.value;
          el = document.getElementById('swal-input2');
          info.description = el.value;

          return new Promise(function (resolve) {
            resolve('');
          });
        }
      },
      {
        title: 'Steam account info',
        html: 'Enter informations app will enter to steam' +
        '<input placeholder="Steam username" id="swal-input3" class="swal2-input">' +
        '<input placeholder="Steam password" type="password" id="swal-input4" class="swal2-input">',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Next',
        cancelButtonText: 'Cancel',
        progressSteps: ['1', '2', '3'],



        onOpen: () => {
          document.getElementById("swal-input3").focus();
        },

        preConfirm: () => {
          let el: any = document.getElementById('swal-input3');
          info.name = el.value;
          el = document.getElementById('swal-input4');
          info.password = el.value;

          return new Promise(function (resolve) {
            resolve('');
          });
        }
      },
      {
        title: 'Account photo info',
        html: 'Select photo you want ti see in app<br><br>' +
              '<label class="btn btn-accent" for="file-selector2">' +
              '<input id="file-selector2" type="file" style="display: none;">' +
              '<span id="upload-file-info2"> ' + this.fileSelectText + ' </span>' +
              '</label> <small id="upload-file-info3"> Click to choose file </small>' +
              '<br><br> <img src="" alt="" style="display: none;  margin-left: calc(50% - 50px); width: 120px; height: 120px; border-radius: 50%;" id="upload-file-img" /> ',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Create',
        cancelButtonText: 'Cancel',
        progressSteps: ['1', '2', '3'],
        onOpen: () => {
          document.getElementById('file-selector2').addEventListener('change', (event: any) => {

            if(event.target.value !== '') {

              const path = event.target.files[0].path;
              document.getElementById('upload-file-info2').innerHTML = 'Select another file';
              document.getElementById('upload-file-info3').innerHTML = path;
              document.getElementById('upload-file-img').style.display = 'block';
              document.getElementById('upload-file-img').setAttribute('src', 'file://' + path);
            } else {
              document.getElementById('upload-file-info2').innerHTML = 'Select file';
              document.getElementById('upload-file-info3').innerHTML = 'Click to choose file';
              document.getElementById('upload-file-img').style.display = 'none';
            }

          });
        },
        preConfirm: () => {
          const el: any = document.getElementById('file-selector2');
          if (el.files.length !== 0) {
            info.img = el.files[0].path;
          }

          return new Promise(function (resolve) {
            resolve('');
          });
        }
      },
    ];

    this.alert.swal.queue(steps).then(() => {

      info.createDate = Date.now();

      console.log(info);

      this.api.socket.emit('newUser', info, (obj) => {
        console.log(obj);
        if (obj.status === 'success') {
          this.alert.swal({
            title: 'User added!',
            html: 'User successfully added :)',
            confirmButtonText: 'Great!',
            type: 'success'
          });
        } else {
          this.alert.swal({
            title: 'Error!',
            html: obj.msg,
            type: 'error'
          });
        }
      });
    });
  }
}
