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

  updateAcc() {

    const info = {
      displayName: '',
      description: '',
      lastLogin: -1,
      createDate: -1,
      name: '',
      password: '',
      img: this.user.img
    };

    let modalThreeHtml = 'Select photo you want ti see in app<br><br>' +
      '<label class="btn btn-accent" for="file-selector2">' +
      '<input id="file-selector2" type="file" style="display: none;">';

      if(this.user.img.indexOf('assets/images/steam.svg') != -1) {
        modalThreeHtml += '<span id="upload-file-info2" style="cursor: pointer;"> Select file </span>' +
          '</label> <small id="upload-file-info3"> Click to choose file </small>';
        modalThreeHtml += '<br><br> <img src="" alt="" style="display: none;  margin-left: calc(50% - 50px); width: 120px; height: 120px; border-radius: 50%;" id="upload-file-img" /> ';

      } else {
        modalThreeHtml += '<span id="upload-file-info2" style="cursor: pointer;"> Select another file </span>' +
          '</label> <small id="upload-file-info3"> Click to choose file </small>';
        modalThreeHtml += '<br><br> <img src="' + this.user.img  + '" alt="" style="display: block;  margin-left: calc(50% - 50px); width: 120px; height: 120px; border-radius: 50%;" id="upload-file-img" /> ';

        modalThreeHtml += '<br><a id="clearImageBtn" class="btn btn-w-md btn-danger" style="width: 60%;">Clear Image</a>';
      }

    const steps = [
      {
        title: 'Account Display info',
        text: 'Enter informations you will see in app',
        html: 'Enter informations you will see in app' +
        '<input placeholder="Display name" value="' + this.user.displayName + '" id="swal-input1" class="swal2-input">' +
        '<input placeholder="Description [optional]" value="' + this.user.description + '" id="swal-input2" class="swal2-input">',
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
        '<input placeholder="Steam username" id="swal-input3" value="' + this.user.name + '" class="swal2-input">' +
        '<input placeholder="Steam password" type="password" value="' + this.user.password + '" id="swal-input4" class="swal2-input">',
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
        html: modalThreeHtml,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Create',
        cancelButtonText: 'Cancel',
        progressSteps: ['1', '2', '3'],
        onOpen: () => {
          if(document.getElementById('clearImageBtn') !== null) {
            document.getElementById('clearImageBtn').addEventListener('click', () => {
              document.getElementById('upload-file-info2').innerHTML = 'Select file';
              document.getElementById('upload-file-info3').innerHTML = 'Click to choose file';
              document.getElementById('upload-file-img').style.display = 'none';
              document.getElementById('clearImageBtn').style.display = 'none';
              let el: any = document.getElementsByClassName('swal2-modal')[0];
              el.style.minHeight = '0';

              info.img = '';
            });
          }

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

      this.api.socket.emit('updateUser', { oldUser: this.user.id, newData: info }, (obj) => {
        console.log(obj);
        if (obj.status === 'success') {
          this.alert.swal({
            title: 'User edited!',
            html: 'User successfully edited :)',
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
