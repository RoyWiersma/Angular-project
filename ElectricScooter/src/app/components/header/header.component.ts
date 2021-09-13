import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  now = new Date();
  nowFormatted: string;

  constructor() {
    this.nowFormatted = formatDate(this.now, 'dd-mm-yyyy', 'en');
  }

  ngOnInit(): void {
  }
}
