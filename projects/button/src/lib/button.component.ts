import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button mat-raised-button [color]="color">{{label}}</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string;
  @Input() color: string;
  @Input() something: string;

  constructor() {}
}
