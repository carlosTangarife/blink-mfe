import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IButton } from '@blink-mfe/shared-model';

/* eslint-disable */

@Component({
  selector: 'blink-mfe-nx-welcome',
  template: `
    <h1>Hello From sign-in applications</h1>
    <blink-mfe-button [config]="configButton"></blink-mfe-button>
    `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  configButton: IButton = {
    text: 'button from sign-in'
  };
  constructor() {}

  ngOnInit(): void {}
}
