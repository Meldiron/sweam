import {Component, EventEmitter, OnInit, Output } from '@angular/core';

import * as anime from 'animejs';
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('onmenuClick') onmenuClick = new EventEmitter();

  isAnimatingMenu = false;

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }

  showAlert() {
    this.alert.alert({
      title: 'Connection',
      text: 'Everything is connected, evenything works just fine.',
      type: 'success'
    });
  }

  toggleMenu() {
    if (this.isAnimatingMenu) { return; }
    this.isAnimatingMenu = true;

    const min = -200;
    const max = 0;

    if (document.getElementById('leftMenu').style.transform === 'translateX(' + max + 'px)') { // Opened
      anime({
        targets: '#leftMenu',
        easing: 'easeInQuad',
        duration: 500,
        translateX: min + 'px',
        complete: () => {
          this.isAnimatingMenu = false;
        }
      });

      anime({
        targets: '#mainContent',
        easing: 'easeOutQuad',
        duration: 500,
        marginLeft: '0px'
      });
    } else {
      anime({
        targets: '#leftMenu',
        easing: 'easeInQuad',
        duration: 500,
        translateX: max + 'px',
        complete: () => {
          this.isAnimatingMenu = false;
        }
      });

      anime({
        targets: '#mainContent',
        easing: 'easeInQuad',
        duration: 400,
        marginLeft: '200px'
      });
    }
  }

}
