import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLightMode = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  onSetThemeOne() {
    this.renderer.removeAttribute(this.document.body, 'class');
    this.isLightMode = true;
  }

  onSetThemeTwo() {
    this.renderer.setAttribute(this.document.body, 'class', 'theme-two');
    this.isLightMode = false;
  }
}
