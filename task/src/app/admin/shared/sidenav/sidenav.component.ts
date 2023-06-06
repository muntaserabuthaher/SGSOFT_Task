import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ListSidebar = [
    {
      path: 'home',
      iconSrc: 'home',
    },
    {
      path: 'energy-meters',
      iconSrc: 'wb_incandescent',
    },
  ];
}
