import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  ngOnInit() {}
}
