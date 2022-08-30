import { Component, Input } from '@angular/core';
import { IButton } from '@blink-mfe/shared-model';

@Component({
  selector: 'blink-mfe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  config?: IButton;
}
