import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  openUrl() {
    this.api.sendOpenUrl('https://github.com/saintusmarcus/sweam');
  }

}
