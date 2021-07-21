import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

class ButtonComponent {
    constructor() { }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ui-button"]], inputs: { label: "label", color: "color" }, decls: 2, vars: 2, consts: [["mat-raised-button", "", 3, "color"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("color", ctx.color);
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.label);
    } }, directives: [MatButton], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
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

class ButtonModule {
}
ButtonModule.ɵmod = ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [MatButtonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [
                    MatButtonModule
                ],
                exports: [ButtonComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=button.js.map
