(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button')) :
  typeof define === 'function' && define.amd ? define('button', ['exports', '@angular/core', '@angular/material/button'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.button = {}, global.ng.core, global.ng.material.button));
}(this, (function (exports, i0, i1) { 'use strict';

  var ButtonComponent = /** @class */ (function () {
      function ButtonComponent() {
      }
      return ButtonComponent;
  }());
  ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
  ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ui-button"]], inputs: { label: "label", color: "color" }, decls: 2, vars: 2, consts: [["mat-raised-button", "", 3, "color"]], template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵelementStart(0, "button", 0);
              i0.ɵɵtext(1);
              i0.ɵɵelementEnd();
          }
          if (rf & 2) {
              i0.ɵɵproperty("color", ctx.color);
              i0.ɵɵadvance(1);
              i0.ɵɵtextInterpolate(ctx.label);
          }
      }, directives: [i1.MatButton], encapsulation: 2, changeDetection: 0 });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(ButtonComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'ui-button',
                      template: "\n    <button mat-raised-button [color]=\"color\">{{label}}</button>\n  ",
                      styles: [],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush
                  }]
          }], function () { return []; }, { label: [{
                  type: i0.Input
              }], color: [{
                  type: i0.Input
              }] });
  })();

  var ButtonModule = /** @class */ (function () {
      function ButtonModule() {
      }
      return ButtonModule;
  }());
  ButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonModule });
  ButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
              i1.MatButtonModule
          ]] });
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [i1.MatButtonModule], exports: [ButtonComponent] }); })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(ButtonModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [ButtonComponent],
                      imports: [
                          i1.MatButtonModule
                      ],
                      exports: [ButtonComponent]
                  }]
          }], null, null);
  })();

  /*
   * Public API Surface of button
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ButtonComponent = ButtonComponent;
  exports.ButtonModule = ButtonModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=button.umd.js.map
