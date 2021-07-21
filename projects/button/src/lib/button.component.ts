import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button mat-raised-button [disabled]="disabled" [color]="color">{{label}}</button>
  `,
  styleUrls: [
    '../../../../node_modules/@angular/material/prebuilt-themes/purple-green.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() color: 'primary' | 'accent' | 'warn' | '';
  @Input() something: string;

  constructor() {}
}
