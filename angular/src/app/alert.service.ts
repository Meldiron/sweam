import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class AlertService {

  swal = swal;

  constructor() { }

  alert(obj) {
    swal(obj);
  }

  alertWithQuestion(obj, obj2) {
    swal(obj).then(() => {
      swal(obj2);
    });
  }
}
