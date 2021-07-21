import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class ButtonComponent {
    constructor() { }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ui-button"]], inputs: { label: "label", color: "color" }, decls: 2, vars: 2, consts: [["mat-raised-button", "", 3, "color"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.label);
    } }, directives: [i1.MatButton], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ui-button',
                template: `
    <button mat-raised-button [color]="color">{{label}}</button>
  `,
                styles: [],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9idXR0b24vc3JjLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVaEcsTUFBTSxPQUFPLGVBQWU7SUFJMUIsZ0JBQWUsQ0FBQzs7OEVBSkwsZUFBZTtvREFBZixlQUFlO1FBTHhCLGlDQUEwQztRQUFBLFlBQVM7UUFBQSxpQkFBUzs7UUFBbEMsaUNBQWU7UUFBQyxlQUFTO1FBQVQsK0JBQVM7O2tEQUsxQyxlQUFlO2NBUjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOztHQUVUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2dCQUNWLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gW2NvbG9yXT1cImNvbG9yXCI+e3tsYWJlbH19PC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19