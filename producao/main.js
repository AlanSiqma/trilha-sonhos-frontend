(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projects\before-i-die\src\main.ts */"zUnb");


/***/ }),

/***/ "7APt":
/*!********************************************************!*\
  !*** ./src/register-dream/register-dream.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterDreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDreamComponent", function() { return RegisterDreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class RegisterDreamComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Registrar = false;
        this.isChecked = true;
        this.state = 'Public';
    }
    ngOnInit() {
        this.formUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            myDream: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            isPrivate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.ViewChangeForm();
    }
    ViewChangeForm() {
        this.formUser.valueChanges.subscribe(() => {
            let isPrivate = this.formUser.get('isPrivate').value;
            if (isPrivate)
                this.state = 'Private';
            else
                this.state = 'Public';
        });
    }
    SignIn() {
        console.log(this.formUser.value);
        const user = this.formUser.get('email').value;
        console.log('userr ', user);
        this.dialogRef.close(user);
    }
    onNoClick() {
        this.Registrar = !this.Registrar;
        // console.log(this.formUser.value);
        // this.dialogRef.close();
    }
    Close() {
        this.dialogRef.close();
    }
}
RegisterDreamComponent.ɵfac = function RegisterDreamComponent_Factory(t) { return new (t || RegisterDreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
RegisterDreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterDreamComponent, selectors: [["app-register-dream"]], decls: 23, vars: 1, consts: [[1, "grid", "grid-template-areas-1"], [1, "item", "b"], ["src", "https://www.w3schools.com/howto/img_avatar.png", 1, "circleImg"], [1, "item", "a"], ["mat-dialog-title", "", 1, "subTitle"], ["novalidate", "", 2, "width", "100%", 3, "formGroup"], [1, "fullWidth"], ["matInput", "", "formControlName", "myDream"], [1, "toggle"], [1, "x"], ["formControlName", "isPrivate", "color", "warn"], [1, "buttons"], ["mat-flat-button", "", "color", "primary", 1, "buttons", 3, "click"], [1, "iconRightButton"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"]], template: function RegisterDreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Registro de Sonho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Before I Die");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I Want ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-slide-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterDreamComponent_Template_button_click_19_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Register Dream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formUser);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".extrabold[_ngcontent-%COMP%]{\r\n  font-weight: 520;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-top: 14px;\r\n  margin-bottom: 1px;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n  color: midnightblue;\r\n  font-size: 12px;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n  color: dimgray;\r\n  font-size: 12px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]{\r\n  width: auto;\r\n}\r\n\r\n.fullWidth[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n\r\n.circleImg[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width: 50px;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n\tdisplay: grid;\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n\tgrid-area: a;\r\n  align-self: center;\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  padding-right: 4px;\r\n}\r\n\r\n.b[_ngcontent-%COMP%] {\r\n\tgrid-area: b;\r\n  align-self: center;\r\n  padding-left: 2px;\r\n}\r\n\r\n.grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: 65px auto;\r\n    grid-template-rows: 70px;\r\n  \tgrid-template-areas:\r\n        \"b a\"\r\n\t\t;\r\n}\r\n\r\n\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  color:blueviolet;\r\n\tmargin: 3px;\r\n\t\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n}\r\n\r\n.subTitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.x[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  display: inline;\r\n}\r\n\r\n.iconRightButton[_ngcontent-%COMP%]{\r\n  padding-right: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWRyZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUlBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtHQUN6Qjs7RUFFRDtBQUNGOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSxnQkFBZ0I7Q0FDakIsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyLWRyZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0cmFib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiA1MjA7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4ubGluazpob3ZlcntcclxuICBjb2xvcjogbWlkbmlnaHRibHVlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgY29sb3I6IGRpbWdyYXk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZnVsbFdpZHRoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9nZ2xle1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2lyY2xlSW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uYSB7XHJcblx0Z3JpZC1hcmVhOiBhO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5iIHtcclxuXHRncmlkLWFyZWE6IGI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5ncmlkLXRlbXBsYXRlLWFyZWFzLTEge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NXB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XHJcbiAgXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiYiBhXCJcclxuXHRcdDtcclxufVxyXG5cclxuLyogR3JpZCBJdGVtICovXHJcbi5pdGVtIHtcclxuICBjb2xvcjpibHVldmlvbGV0O1xyXG5cdG1hcmdpbjogM3B4O1xyXG5cdC8qIGJhY2tncm91bmQ6IHRvbWF0bzsgKi9cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0LyogZm9udC1zaXplOiAxLjVlbTsgKi9cclxufVxyXG5cclxuLnJpZ2h0IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnN1YlRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi54e1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uaWNvblJpZ2h0QnV0dG9ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterDreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-dream',
                templateUrl: './register-dream.component.html',
                styleUrls: ['./register-dream.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F6Vh":
/*!**************************************!*\
  !*** ./src/dream/dream.component.ts ***!
  \**************************************/
/*! exports provided: DreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamComponent", function() { return DreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





function DreamComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dream and Dreams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" id: ", ctx_r0.myValue, " ");
} }
function DreamComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" id: ", ctx_r1.myValue, " ");
} }
class DreamComponent {
    constructor() {
        this.isButton = false;
    }
    ngOnInit() {
        this.isButton = this.myValue % 2 === 0;
    }
}
DreamComponent.ɵfac = function DreamComponent_Factory(t) { return new (t || DreamComponent)(); };
DreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DreamComponent, selectors: [["app-dream"]], inputs: { myValue: "myValue" }, decls: 2, vars: 2, consts: [["class", "nbuttonDream", 4, "ngIf"], ["class", "buttonDream", 4, "ngIf"], [1, "nbuttonDream"], [1, "buttonDream"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"]], template: function DreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DreamComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DreamComponent_div_1_Template, 6, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["div[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.nbuttonDream[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  background-color: orange;\r\n  text-align: center;\r\n  padding: 8px;\r\n  margin: 4px;\r\n}\r\n.buttonDream[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  text-align: center;\r\n  background-color: rgb(171, 212, 231);\r\n  padding: 8px;\r\n  margin: 4px;\r\n}\r\n.mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiZHJlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDRweDtcclxufSAqL1xyXG5kaXZ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5uYnV0dG9uRHJlYW17XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uRHJlYW17XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAyMTIsIDIzMSk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dream',
                templateUrl: './dream.component.html',
                styleUrls: ['./dream.component.css']
            }]
    }], function () { return []; }, { myValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ITiG":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class UserService {
    // injetando o HttpClient
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/users'; // api rest fake
        // Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Obtem todos os carros
    getUsers() {
        return this.httpClient.get(this.url);
    }
    // Obtem um carro pelo id
    getUserById(id) {
        return this.httpClient.get(this.url + '/' + id);
        // .pipe(
        //   retry(2),
        //   catchError(this.handleError)
        // )
    }
    // salva um carro
    saveUser(user) {
        return this.httpClient.post(this.url, JSON.stringify(user), this.httpOptions);
        // .pipe(
        //   retry(2),
        //   catchError(this.handleError)
        // )
    }
    // utualiza um carro
    updateUser(user) {
        return this.httpClient.put(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions);
        // .pipe(
        //   retry(1),
        //   catchError(this.handleError)
        // )
    }
    // deleta um carro
    deleteUser(user) {
        return this.httpClient.delete(this.url + '/' + user.id, this.httpOptions);
        // .pipe(
        //   retry(1),
        //   catchError(this.handleError)
        // )
    }
    // Manipulação de erros
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    ;
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KqQ4":
/*!****************************************!*\
  !*** ./src/navbar/navbar.component.ts ***!
  \****************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




function NavbarComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_section_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.Signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sign-in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function NavbarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Dreams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_2_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.name);
} }
function NavbarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.Signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign-in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_12_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.user.name);
} }
class NavbarComponent {
    constructor() {
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Before I Die...";
        this.isLogged = false;
        this.user = {
            name: 'Florinda',
            photo: '../assets/profile3.jpg'
        };
    }
    ngOnInit() {
    }
    toggleLogged(username) {
        this.isLogged = !this.isLogged;
        this.user.name = username;
    }
    Signin() {
        this.btLogin();
    }
    btLogin() {
        this.myEvent.emit('chegouuu');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { myEvent: "myEvent" }, decls: 14, vars: 4, consts: [[1, "nav"], ["class", "grid grid-template-areas-2", 4, "ngIf", "ngIfElse"], ["logged", ""], ["role", "banner", 1, "mtoolbar", 2, "display", "none"], [1, "container"], [1, "divtitle", "vertical-center"], [1, "title"], [1, "rightNav"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf", "ngIfElse"], [1, "grid", "grid-template-areas-2"], [1, "item", "a", "left"], [1, "mt", "title"], [1, "item", "right", "b"], [1, "mt"], ["mat-flat-button", "", "color", "primary", 1, "buttons", 3, "click"], [1, "fa", "fa-sign-in"], [1, "grid", "grid-template-areas-1"], [1, "item", "b"], [1, "mt", "subTitle"], [1, "item", "grdPhoto"], [1, "circleImg", 3, "src", "click"], [1, "item", "grdUser"], [1, "usName"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, ""], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_section_1_Template, 10, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_template_2_Template, 12, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Before I Die...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_button_11_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_ng_template_12_Template, 6, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".mtoolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.divtitle[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  \r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  display: inline;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n  padding: 6px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.vertical-center[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.rightNav[_ngcontent-%COMP%]{\r\n  margin: auto 0px;\r\n  float: right;\r\n}\r\n\r\n.boxUser[_ngcontent-%COMP%]{\r\n  \r\n  width: 80px;\r\n  height: 60px;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n\tdisplay: grid;\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n\tgrid-area: a;\r\n  align-self: center;\r\n  padding-left: 16px;\r\n}\r\n\r\n.b[_ngcontent-%COMP%] {\r\n\tgrid-area: b;\r\n  text-align: right;\r\n  align-self: center;\r\n  padding-right: 16px;\r\n}\r\n\r\n.grdPhoto[_ngcontent-%COMP%] {\r\n  grid-area: grdPhoto;\r\n}\r\n\r\n.grdUser[_ngcontent-%COMP%] {\r\n\tgrid-area: grdUser;\r\n}\r\n\r\n.grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: 260px auto 70px;\r\n    grid-template-rows: 60px 22px;\r\n\t  grid-template-areas:\r\n        \"a b grdPhoto\"\r\n        \"a b grdUser\"\r\n\t\t;\r\n}\r\n\r\n.grid-template-areas-2[_ngcontent-%COMP%] {\r\n  grid-template-columns: 260px auto;\r\n  grid-template-rows: 70px;\r\n  grid-template-areas:\r\n      \"a b\"\r\n  ;\r\n}\r\n\r\n@media (max-width: 479px)\r\n{\r\n  .grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto 66px ;\r\n    grid-template-rows: 60px 28px ;\r\n    grid-template-areas:\r\n        \"a a b grdPhoto\"\r\n        \"a a b grdUser\"\r\n    ;\r\n  }\r\n\r\n  .grdPhoto[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .grdUser[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .b[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n    text-align: left;\r\n    align-self: center;\r\n    padding-left: 16px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 390px)\r\n{\r\n  .title[_ngcontent-%COMP%]{\r\n    font-size: 21px;\r\n  }\r\n\r\n  .grid-template-areas-2[_ngcontent-%COMP%] {\r\n    grid-template-columns: 210px auto;\r\n    grid-template-rows: 70px;\r\n    grid-template-areas:\r\n        \"a b\"\r\n    ;\r\n  }\r\n\r\n  .grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto 66px ;\r\n    grid-template-rows: 60px 28px ;\r\n    grid-template-areas:\r\n        \"a a b grdPhoto\"\r\n        \"a a b grdUser\"\r\n    ;\r\n  }\r\n\r\n  .grdPhoto[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .grdUser[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .b[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n    text-align: left;\r\n    align-self: center;\r\n    padding-left: 16px;\r\n  }\r\n\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  color: white;\r\n\t\r\n\t\r\n  font-size: 12px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  color: rgb(36, 36, 36);\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  letter-spacing: 4px;\r\n  animation-name: fade;\r\n  animation-duration: 4s;\r\n}\r\n\r\n@keyframes fade {\r\n  0%   {color: rgb(255, 255, 255)}\r\n  100%   {color: rgb(46, 46, 46)}\r\n}\r\n\r\n.title[_ngcontent-%COMP%]:hover {\r\n  letter-spacing: 4px;\r\n  font-weight: 700;\r\n  \r\n  animation-name: fadeBlue;\r\n  animation-duration: 3s;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes fadeBlue {\r\n  0%   {\r\n    transform: translate(0);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n  100%   {color: rgb(74, 22, 196)}\r\n}\r\n\r\n.circleImg[_ngcontent-%COMP%]{\r\n  border-radius: 50%;\r\n  width: 54px;\r\n  height: 54px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.subTitle[_ngcontent-%COMP%]{\r\n  color: rgb(36, 36, 36);\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  padding-right: 30px;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n\tmax-width: 1254px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n  box-shadow: 0 0 1em rgba(46, 46, 46, 0.534);\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  padding-left: 2px;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  color:#00FA9A;\r\n  margin-left: 2px;\r\n}\r\n\r\n.usName[_ngcontent-%COMP%]{\r\n  color:rgb(82, 45, 117);\r\n}\r\n\r\n@media (max-width: 479px)\r\n{\r\n  .title[_ngcontent-%COMP%]{\r\n    font-size: 21px;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto 66px ;\r\n    grid-template-rows: 60px 28px ;\r\n    grid-template-areas:\r\n        \"a a b grdPhoto\"\r\n        \"a a b grdUser\"\r\n    ;\r\n  }\r\n\r\n  .grdPhoto[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .grdUser[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .b[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n    text-align: right;\r\n    align-self: center;\r\n    padding-left: 16px;\r\n  }\r\n\r\n  .subTitle[_ngcontent-%COMP%]{\r\n    color: rgb(36, 36, 36);\r\n    font-size: 19px;\r\n    font-weight: 500;\r\n    padding-right: 0px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 390px)\r\n{\r\n  .title[_ngcontent-%COMP%]{\r\n    font-size: 21px;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .grid-template-areas-2[_ngcontent-%COMP%] {\r\n    grid-template-columns: 210px auto;\r\n    grid-template-rows: 70px;\r\n    grid-template-areas:\r\n        \"a b\"\r\n    ;\r\n  }\r\n\r\n  .grid-template-areas-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto 66px ;\r\n    grid-template-rows: 60px 28px ;\r\n    grid-template-areas:\r\n        \"a a b grdPhoto\"\r\n        \"a a b grdUser\"\r\n    ;\r\n  }\r\n  .b[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n\r\n  .subTitle[_ngcontent-%COMP%]{\r\n    color: rgb(36, 36, 36);\r\n    font-size: 19px;\r\n    font-weight: 500;\r\n    padding-right: 0px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUVSLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDZCQUE2QjtHQUM5Qjs7O0VBR0Q7QUFDRjs7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEI7O0VBRUE7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUI7OztJQUdBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUY7O0FBQ0E7O0VBRUU7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4Qjs7SUFFQTtFQUNGOztFQUVBO0lBQ0UsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5Qjs7O0lBR0E7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjs7QUFFQTtFQUNFLFlBQVk7Q0FDYixpQkFBaUI7Q0FDakIsd0JBQXdCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE1BQU0seUJBQXlCO0VBQy9CLFFBQVEsc0JBQXNCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkI7RUFDRjtFQUNBLFFBQVEsdUJBQXVCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTs7RUFFRTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCOzs7SUFHQTtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGOztBQUNBOztFQUVFO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEI7O0lBRUE7RUFDRjs7RUFFQTtJQUNFLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUI7OztJQUdBO0VBQ0Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZGl2dGl0bGV7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cclxufVxyXG5cclxucHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uaW5saW5le1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBwYWRkaW5nOiA2cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ucmlnaHROYXZ7XHJcbiAgbWFyZ2luOiBhdXRvIDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5ib3hVc2Vye1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uYSB7XHJcblx0Z3JpZC1hcmVhOiBhO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5iIHtcclxuXHRncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmRQaG90byB7XHJcbiAgZ3JpZC1hcmVhOiBncmRQaG90bztcclxufVxyXG5cclxuLmdyZFVzZXIge1xyXG5cdGdyaWQtYXJlYTogZ3JkVXNlcjtcclxufVxyXG5cclxuLmdyaWQtdGVtcGxhdGUtYXJlYXMtMSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4IGF1dG8gNzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAyMnB4O1xyXG5cdCAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcImEgYiBncmRQaG90b1wiXHJcbiAgICAgICAgXCJhIGIgZ3JkVXNlclwiXHJcblx0XHQ7XHJcbn1cclxuXHJcblxyXG4uZ3JpZC10ZW1wbGF0ZS1hcmVhcy0yIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiYSBiXCJcclxuICA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzlweClcclxue1xyXG4gIC5ncmlkLXRlbXBsYXRlLWFyZWFzLTEge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byA2NnB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAyOHB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJhIGEgYiBncmRQaG90b1wiXHJcbiAgICAgICAgXCJhIGEgYiBncmRVc2VyXCJcclxuICAgIDtcclxuICB9XHJcblxyXG4gIC5ncmRQaG90byB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ3JkVXNlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYiB7XHJcbiAgICBncmlkLWFyZWE6IGI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KVxyXG57XHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtdGVtcGxhdGUtYXJlYXMtMiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiYSBiXCJcclxuICAgIDtcclxuICB9XHJcblxyXG4gIC5ncmlkLXRlbXBsYXRlLWFyZWFzLTEge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byA2NnB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAyOHB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJhIGEgYiBncmRQaG90b1wiXHJcbiAgICAgICAgXCJhIGEgYiBncmRVc2VyXCJcclxuICAgIDtcclxuICB9XHJcblxyXG4gIC5ncmRQaG90byB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ3JkVXNlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYiB7XHJcbiAgICBncmlkLWFyZWE6IGI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBjb2xvcjogd2hpdGU7XHJcblx0LyogbWFyZ2luOiAzcHg7ICovXHJcblx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIDAlICAge2NvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSl9XHJcbiAgMTAwJSAgIHtjb2xvcjogcmdiKDQ2LCA0NiwgNDYpfVxyXG59XHJcblxyXG4udGl0bGU6aG92ZXIge1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAvKiBhbmltYXRpb246IGluIDNzIGVhc2Utb3V0IGZvcndhcmRzIGluZmluaXRlOyAqL1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlQmx1ZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlQmx1ZSB7XHJcbiAgMCUgICB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSlcclxuICB9XHJcbiAgMTAwJSAgIHtjb2xvcjogcmdiKDc0LCAyMiwgMTk2KX1cclxufVxyXG5cclxuLmNpcmNsZUltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDU0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnN1YlRpdGxle1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuXHRtYXgtd2lkdGg6IDEyNTRweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5hdntcclxuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoNDYsIDQ2LCA0NiwgMC41MzQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmJ1dHRvbnMgc3BhbntcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmJ1dHRvbnM6aG92ZXIgc3BhbntcclxuICAvKiBjb2xvcjojMDBGRkZGICovXHJcbiAgLyogY29sb3I6I0ZGRjhEQyAqL1xyXG4gIC8qIGNvbG9yOiNGRkQ3MDAgKi9cclxuICAvKiBjb2xvcjojRkZGQUNEICovXHJcbiAgLyogY29sb3I6Izg3Q0VGQSAqL1xyXG4gIC8qIGNvbG9yOiM0OEQxQ0MgKi9cclxuICBjb2xvcjojMDBGQTlBO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi51c05hbWV7XHJcbiAgY29sb3I6cmdiKDgyLCA0NSwgMTE3KTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzlweClcclxue1xyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC10ZW1wbGF0ZS1hcmVhcy0xIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gNjZweCA7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMjhweCA7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiYSBhIGIgZ3JkUGhvdG9cIlxyXG4gICAgICAgIFwiYSBhIGIgZ3JkVXNlclwiXHJcbiAgICA7XHJcbiAgfVxyXG5cclxuICAuZ3JkUGhvdG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdyZFVzZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmIge1xyXG4gICAgZ3JpZC1hcmVhOiBiO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuc3ViVGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweClcclxue1xyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC10ZW1wbGF0ZS1hcmVhcy0yIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjEwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJhIGJcIlxyXG4gICAgO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtdGVtcGxhdGUtYXJlYXMtMSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIDY2cHggO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDI4cHggO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcImEgYSBiIGdyZFBob3RvXCJcclxuICAgICAgICBcImEgYSBiIGdyZFVzZXJcIlxyXG4gICAgO1xyXG4gIH1cclxuICAuYiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5zdWJUaXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, { myEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/navbar/navbar.component */ "KqQ4");
/* harmony import */ var src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/register-dream/register-dream.component */ "7APt");
/* harmony import */ var src_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/sign-in/sign-in.component */ "pShM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.listDreams = [
            { id: "0", position: 2, description: "Comer farofa rindo ao lado de um furacão!", private: false, status: 1, user: "adriana" },
            { id: "1", position: 4, description: "Correr na Stock Car com meu Fuscão 1600!", private: false, status: 0, user: "joão" },
            { id: "2", position: 5, description: "Pilotar um Planador", private: false, status: 0, user: "fernando" },
            { id: "3", position: 0, description: "Pular de um avião sem paraquedas!", private: false, status: 1, user: "suzy" },
            { id: "4", position: 7, description: "Reunir todos os chatos e chatas em um submarino conversível numa mega tempestade!...", private: false, status: 0, user: "fernando" },
            { id: "5", position: 10, description: "Dar a volta ao mundo a pé para testar a durabilidade da minha nova havainas!", private: false, status: 1, user: "suzy" },
            { id: "6", position: 11, description: "Conhecer um Submarino furado!", private: false, status: 0, user: "suzy" },
            { id: "7", position: 15, description: "Comer umas galinhas de raça por aí", private: false, status: 1, user: "patricia" },
            { id: "8", position: 16, description: "Beber que nem um Viking, comer que nem um esfomeado maluco!", private: false, status: 0, user: "mariana" }
        ];
        this.values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.values2 = [1, 4, 3, 5, 8, 6, 9, 10, 11, 12, 13, 14, 2, 0];
        this.values3 = [0, 4, 3, 1, 8, 6, 7, 9, 2, 10, 11, 12, 13, 14, 5];
        this.values4 = [0, 1, 2, 3];
        this.title = 'before-i-die';
    }
    UpdateNavBar(user) {
        this.navbar.toggleLogged(user);
    }
    Recebi(x) {
        console.log(x);
        this.openDialog();
    }
    openDialog() {
        // const dialogRef = this.dialog.open(RegisterDreamComponent, {
        const dialogRef = this.dialog.open(src_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], {
            width: '350px'
            // data: {name: 'Hugoo', animal: 'Jumentoo'}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result != null) {
                this.UpdateNavBar(result);
            }
        });
    }
    openC() {
        const dialogRef = this.dialog.open(src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_2__["RegisterDreamComponent"], {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result != null) {
                this.UpdateNavBar(result);
            }
        });
    }
    openAddDream() {
        const dialogRef = this.dialog.open(src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_2__["RegisterDreamComponent"], {
            width: '350px'
            // data: {name: 'Hugoo', animal: 'Jumentoo'}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result != null) {
                this.UpdateNavBar(result);
            }
        });
    }
    OpenAdd(item) {
        // console.log('Abrir id: ', item);
        this.openAddDream();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
    } }, decls: 4, vars: 1, consts: [[3, "myEvent"], [3, "listDreams", "openEvent"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myEvent", function AppComponent_Template_app_navbar_myEvent_0_listener($event) { return ctx.Recebi($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-dreams-wall", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openEvent", function AppComponent_Template_app_dreams_wall_openEvent_1_listener($event) { return ctx.OpenAdd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listDreams", ctx.listDreams);
    } }, styles: [".gd[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-auto-rows: minmax(-webkit-min-content, -webkit-max-content);\r\n  grid-auto-rows: minmax(min-content, max-content);\r\n}\r\n\r\n.containerDreamWall[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: scroll;\r\n  background-image: url('fundoPrincipal.jpg');\r\n  height: 90vh;\r\n}\r\n\r\n.contain[_ngcontent-%COMP%]{\r\n\r\ndisplay: grid;\r\nheight: 100%;\r\nwidth: 900px;\r\ngrid-gap: 15px;\r\ngrid-template-columns: 350px 350px 350px 350px;\r\ngrid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(100px, auto) minmax(100px, auto);\r\ngrid-auto-rows: auto;\r\ngrid-auto-flow: column;\r\ngrid-auto-columns: 350px;\r\n}\r\n\r\n@media only screen and (max-height: 550px) {\r\n  .contain[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  height: 100%;\r\n  width: 900px;\r\n  grid-gap: 15px;\r\n  grid-template-columns: 350px 350px 350px 350px;\r\n  grid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(100px, auto);\r\n  \r\n  grid-auto-rows: auto;\r\n  grid-auto-flow: column;\r\n  grid-auto-columns: 350px;\r\n  }\r\n}\r\n\r\n.item-[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\ntext-align: center;\r\nborder: 1px solid #bbbbbb36;\r\nborder-radius: 3px;\r\nfont-size: 1em;\r\nfont-family: sans-serif;\r\nfont-weight: bold;\r\nbackground-color: #8b8b8b1a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixnRUFBZ0Q7RUFBaEQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQ0FBcUQ7RUFDckQsWUFBWTtBQUNkOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCw4Q0FBOEM7QUFDOUMsbUdBQW1HO0FBQ25HLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCOztBQUVBO0VBQ0U7RUFDQSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsOENBQThDO0VBQzlDLCtFQUErRTtFQUMvRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEI7QUFDRjs7QUFHQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ2R7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KG1pbi1jb250ZW50LCBtYXgtY29udGVudCk7XHJcbn1cclxuXHJcbi5jb250YWluZXJEcmVhbVdhbGx7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvZnVuZG9QcmluY2lwYWwuanBnXCIpO1xyXG4gIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuXHJcbi5jb250YWlue1xyXG4vKiBoZWlnaHQ6IDgwdmg7ICovXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IDkwMHB4O1xyXG5ncmlkLWdhcDogMTVweDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAzNTBweCAzNTBweCAzNTBweDtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pIG1pbm1heCgxMDBweCwgYXV0bykgbWlubWF4KDEwMHB4LCBhdXRvKSBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG5ncmlkLWF1dG8tcm93czogYXV0bztcclxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuZ3JpZC1hdXRvLWNvbHVtbnM6IDM1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NTBweCkge1xyXG4gIC5jb250YWlue1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBncmlkLWdhcDogMTVweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDM1MHB4IDM1MHB4IDM1MHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwMHB4LCBhdXRvKSBtaW5tYXgoMTAwcHgsIGF1dG8pIG1pbm1heCgxMDBweCwgYXV0byk7XHJcbiAgLyogZ3JpZC1hdXRvLXJvd3M6IDE0MHB4OyAqL1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pdGVtLXtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyOiAxcHggc29saWQgI2JiYmJiYjM2O1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbmZvbnQtc2l6ZTogMWVtO1xyXG5mb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICM4YjhiOGIxYTtcclxufVxyXG5cclxuIl19 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _dreams_wall_dreams_wall_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dreams-wall/dreams-wall.component */ "oIWq");
/* harmony import */ var _dream_dream_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dream/dream.component */ "F6Vh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/navbar/navbar.component */ "KqQ4");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var src_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/sign-in/sign-in.component */ "pShM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/register-dream/register-dream.component */ "7APt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_18__["RegisterDreamComponent"],
        src_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"],
        _dream_dream_component__WEBPACK_IMPORTED_MODULE_1__["DreamComponent"],
        _dreams_wall_dreams_wall_component__WEBPACK_IMPORTED_MODULE_0__["DreamsWallComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    src_register_dream_register_dream_component__WEBPACK_IMPORTED_MODULE_18__["RegisterDreamComponent"],
                    src_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"],
                    _dream_dream_component__WEBPACK_IMPORTED_MODULE_1__["DreamComponent"],
                    _dreams_wall_dreams_wall_component__WEBPACK_IMPORTED_MODULE_0__["DreamsWallComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
    _dreams_wall_dreams_wall_component__WEBPACK_IMPORTED_MODULE_0__["DreamsWallComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"]], []);


/***/ }),

/***/ "oIWq":
/*!**************************************************!*\
  !*** ./src/dreams-wall/dreams-wall.component.ts ***!
  \**************************************************/
/*! exports provided: DreamsWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamsWallComponent", function() { return DreamsWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




function DreamsWallComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.item.description, " ");
} }
function DreamsWallComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DreamsWallComponent_div_2_ng_template_2_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.EmitterAdd(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DreamsWallComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DreamsWallComponent_div_2_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DreamsWallComponent_div_2_ng_template_2_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.x)("ngIfElse", _r4);
} }
class DreamsWallComponent {
    constructor() {
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listDreams = [];
        this.list = new Array(56).fill(1);
    }
    ;
    ngOnInit() {
    }
    haveDescription(item) {
        let haveDesc = item.description.length > 0;
        console.log('item', item, haveDesc);
        return haveDesc;
    }
    test() {
        let l = [];
        if (this.listDreams.length > 0) {
            this.list.forEach((element, i) => {
                let localized = this.listDreams.filter(x => x.position == i).length;
                if (localized > 0) {
                    l.push({ x: true, item: this.listDreams.find(x => x.position == i) });
                }
                else {
                    l.push({ x: false, item: "" });
                }
            });
        }
        else {
            l.push({ x: false, item: "" });
        }
        return l;
    }
    EmitterAdd(id) {
        // console.log('DreamsWallComponent -> ', id);
        this.openEvent.emit(id);
    }
}
DreamsWallComponent.ɵfac = function DreamsWallComponent_Factory(t) { return new (t || DreamsWallComponent)(); };
DreamsWallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DreamsWallComponent, selectors: [["app-dreams-wall"]], inputs: { listDreams: "listDreams" }, outputs: { openEvent: "openEvent" }, decls: 3, vars: 1, consts: [[1, "dreams-wall"], [1, "contain"], ["class", "item-", 3, "id", 4, "ngFor", "ngForOf"], [1, "item-", 3, "id"], ["class", "descriptionText", 4, "ngIf", "ngIfElse"], ["clean", ""], [1, "descriptionText"], [1, "btAddDream", "rad", 3, "click"]], template: function DreamsWallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DreamsWallComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.test());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".dreams-wall[_ngcontent-%COMP%] {\r\n  border: solid 1px rgb(184, 184, 184);\r\n  overflow-x: auto;\r\n  \r\n  background-color: rgb(236, 236, 232);\r\n}\r\n\r\n\r\n.gd[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-auto-rows: minmax(-webkit-min-content, -webkit-max-content);\r\n  grid-auto-rows: minmax(min-content, max-content);\r\n}\r\n\r\n\r\n.dreams-wall[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: scroll;\r\n  background-image: url('muroN1.jpg');\r\n  height: 90vh;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #f2f2f2;\r\n  background: #0a0a0ad8;\r\n  font-size: 16px;\r\n  line-height: 16px;\r\n  font-weight: 500;\r\n  margin: 0 5px 24px;\r\n  float: left;\r\n  padding: 10px;\r\n  margin: 0 5px 24px;\r\n  font-family: 'Libre Baskerville', serif;\r\n}\r\n\r\n\r\n.punchline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { background: #f2f2f2; color: #0a0a0ad8; }\r\n\r\n\r\n.contain[_ngcontent-%COMP%]{\r\n\r\ndisplay: grid;\r\nheight: 100%;\r\nwidth: 900px;\r\ngrid-gap: 15px;\r\ngrid-template-columns: 350px 350px 350px 350px;\r\ngrid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(100px, auto) minmax(100px, auto);\r\ngrid-auto-rows: auto;\r\ngrid-auto-flow: column;\r\ngrid-auto-columns: 350px;\r\n}\r\n\r\n\r\n@media only screen and (max-height: 550px) {\r\n  .contain[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  height: 100%;\r\n  width: 900px;\r\n  grid-gap: 15px;\r\n  grid-template-columns: 350px 350px 350px 350px;\r\n  grid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(100px, auto);\r\n  \r\n  grid-auto-rows: auto;\r\n  grid-auto-flow: column;\r\n  grid-auto-columns: 350px;\r\n  }\r\n}\r\n\r\n\r\n.item-[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\ntext-align: center;\r\nborder: 1px solid #bbbbbb18;\r\nborder-radius: 3px;\r\nfont-size: 1em;\r\nfont-family: sans-serif;\r\nfont-weight: bold;\r\nbackground-color: #8b8b8b14;\r\n}\r\n\r\n\r\n.descriptionText[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  line-height: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.descriptionText[_ngcontent-%COMP%]:hover{\r\n  max-width: 100%;\r\n  line-height: 24px;\r\n  color: rgb(253, 232, 206);\r\n  letter-spacing: 1.5px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.btAddDream[_ngcontent-%COMP%]:hover{\r\n  color: #ffe371;\r\n}\r\n\r\n\r\n.rad[_ngcontent-%COMP%]{\r\n  border-radius: 51%;\r\n  background-color: rgb(4 3 6 / 64%);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.sucessIcon[_ngcontent-%COMP%]{\r\n  clear: both;\r\n    border-radius: 50%;\r\n    background-color: black;\r\n    color: wheat;\r\n    position: absolute;\r\n    margin-left: -10px;\r\n    margin-top: -10px;\r\n    padding: 2px;\r\n    height: 25px;\r\n    width: 25px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.descriptionText[_ngcontent-%COMP%]:hover   .sucessIcon[_ngcontent-%COMP%]{\r\n  color:#cddc39\r\n}\r\n\r\n\r\n.descriptionText[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\r\n  color: rgb(253, 232, 206);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyZWFtcy13YWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGdFQUFnRDtFQUFoRCxnREFBZ0Q7QUFDbEQ7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQ0FBNkM7RUFDN0MsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7O0FBR0EsZUFBZSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRTs7O0FBR3REO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCw4Q0FBOEM7QUFDOUMsbUdBQW1HO0FBQ25HLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCOzs7QUFFQTtFQUNFO0VBQ0EsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLDhDQUE4QztFQUM5QywrRUFBK0U7RUFDL0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFdBQVc7SUFDVCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztBQUVBO0VBQ0U7QUFDRjs7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZHJlYW1zLXdhbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmVhbXMtd2FsbCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzMik7XHJcbn1cclxuXHJcblxyXG4uZ2R7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KG1pbi1jb250ZW50LCBtYXgtY29udGVudCk7XHJcbn1cclxuXHJcbi5kcmVhbXMtd2FsbHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9tdXJvTjEuanBnXCIpO1xyXG4gIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIGJhY2tncm91bmQ6ICMwYTBhMGFkODtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDAgNXB4IDI0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAgNXB4IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuLnB1bmNobGluZSBwIHsgYmFja2dyb3VuZDogI2YyZjJmMjsgY29sb3I6ICMwYTBhMGFkODsgfVxyXG5cclxuXHJcbi5jb250YWlue1xyXG4vKiBoZWlnaHQ6IDgwdmg7ICovXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IDkwMHB4O1xyXG5ncmlkLWdhcDogMTVweDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAzNTBweCAzNTBweCAzNTBweDtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pIG1pbm1heCgxMDBweCwgYXV0bykgbWlubWF4KDEwMHB4LCBhdXRvKSBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG5ncmlkLWF1dG8tcm93czogYXV0bztcclxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuZ3JpZC1hdXRvLWNvbHVtbnM6IDM1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NTBweCkge1xyXG4gIC5jb250YWlue1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBncmlkLWdhcDogMTVweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDM1MHB4IDM1MHB4IDM1MHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwMHB4LCBhdXRvKSBtaW5tYXgoMTAwcHgsIGF1dG8pIG1pbm1heCgxMDBweCwgYXV0byk7XHJcbiAgLyogZ3JpZC1hdXRvLXJvd3M6IDE0MHB4OyAqL1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pdGVtLXtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyOiAxcHggc29saWQgI2JiYmJiYjE4O1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbmZvbnQtc2l6ZTogMWVtO1xyXG5mb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICM4YjhiOGIxNDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uVGV4dHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25UZXh0OmhvdmVye1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogcmdiKDI1MywgMjMyLCAyMDYpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRBZGREcmVhbTpob3ZlcntcclxuICBjb2xvcjogI2ZmZTM3MTtcclxufVxyXG4ucmFke1xyXG4gIGJvcmRlci1yYWRpdXM6IDUxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCAzIDYgLyA2NCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN1Y2Vzc0ljb257XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvblRleHQ6aG92ZXIgLnN1Y2Vzc0ljb257XHJcbiAgY29sb3I6I2NkZGMzOVxyXG59XHJcbi5kZXNjcmlwdGlvblRleHQ6aG92ZXIgcHtcclxuICBjb2xvcjogcmdiKDI1MywgMjMyLCAyMDYpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DreamsWallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dreams-wall',
                templateUrl: './dreams-wall.component.html',
                styleUrls: ['./dreams-wall.component.css']
            }]
    }], function () { return []; }, { openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], listDreams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pShM":
/*!******************************************!*\
  !*** ./src/sign-in/sign-in.component.ts ***!
  \******************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "ITiG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function SignInComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nome de exibi\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pa\u00EDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Alemanha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Brasil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sui\u00E7a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portugal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sui\u00E7a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Idade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_18_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmar senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_span_18_mat_form_field_1_Template, 4, 0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.Registrar);
} }
function SignInComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_span_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.SignIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_span_21_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forgot your password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_ng_template_22_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo no Before I Die? Crie sua conta gratuitamente aqui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(dialogRef, data, userServ) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userServ = userServ;
        this.Registrar = false;
        this.isChecked = true;
        this.submitted = false;
    }
    ngOnInit() {
        this.formUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            apelido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            ehCadastro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        // this.ViewChangeForm();
    }
    get f() { return this.formUser.controls; }
    onSubmit() {
        console.log('submited');
        this.submitted = true;
        if (this.formUser.invalid) {
            return;
        }
        this.SignIn();
        this.GetUserById(2);
        this.GetUsers();
    }
    GetUsers() {
        this.userServ.getUsers().subscribe(ret => {
            console.log('Retorno todos usuarios', ret);
        });
    }
    GetUserById(id) {
        this.userServ.getUserById(id).subscribe(ret => {
            console.log('Retorno por id', ret);
        });
    }
    ViewChangeForm() {
        this.formUser.valueChanges.subscribe(() => {
            console.log(this.formUser.value);
        });
    }
    SignIn() {
        console.log('SignIn Success!! :-\n\n' + JSON.stringify(this.formUser.value));
        let user = this.formUser.get('email').value;
        user = user.substring(0, user.indexOf('@'));
        console.log('userr ', user);
        this.dialogRef.close(user);
    }
    onNoClick() {
        this.Registrar = !this.Registrar;
        // console.log(this.formUser.value);
        // this.dialogRef.close();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 24, vars: 8, consts: [["mat-dialog-title", "", "class", "extrabold inline titleRegister", 4, "ngIf", "ngIfElse"], ["register", ""], ["mat-dialog-content", ""], ["novalidate", "", 2, "width", "100%", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "fullWidth"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "type", "password", "formControlName", "senha"], [2, "margin-top", "12px"], ["mat-flat-button", "", "color", "primary", "class", "buttons", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["btLogar", ""], ["mat-dialog-title", "", 1, "extrabold", "inline", "titleRegister"], [1, "iconRightButton"], ["aria-hidden", "true", 1, "fa", "fa-user-o", "fa-1x"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", "fa-2x"], ["matInput", "", "formControlName", "apelido"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["value", "portugal"], ["value", "suica"], ["matInput", "", "type", "number", "formControlName", "idade", "min", "7", "max", "99"], ["class", "fullWidth", 4, "ngIf"], ["matInput", "", "type", "password"], ["mat-flat-button", "", "color", "primary", 1, "buttons"], ["aria-hidden", "true", 1, "fa", "fa-sign-in"], ["mat-flat-button", "", "color", "primary", 1, "buttons", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check-square-o"], ["mat-dialog-actions", ""], [1, "center", "link", 3, "click"], [1, "buttons"], [1, "center", "link"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignInComponent_h1_0_Template, 4, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignInComponent_span_5_Template, 23, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email incorret");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Minimum 6 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignInComponent_span_18_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignInComponent_button_20_Template, 4, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignInComponent_span_21_Template, 8, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignInComponent_ng_template_22_Template, 6, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Registrar)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Registrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Registrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Registrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Registrar)("ngIfElse", _r7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"]], styles: [".extrabold[_ngcontent-%COMP%]{\r\n  font-weight: 520;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n  color: midnightblue;\r\n  \r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n  color: dimgray;\r\n  font-size: 12px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]{\r\n  width: auto;\r\n}\r\n\r\n.fullWidth[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.iconRightButton[_ngcontent-%COMP%]{\r\n  padding-right: 2px;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  color:#00FA9A;\r\n  margin-right: 2px;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\n\r\n.titleRegister[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYWJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDUyMDtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubGluazpob3ZlcntcclxuICBjb2xvcjogbWlkbmlnaHRibHVlO1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiA1MDA7IGxldHRlci1zcGFjaW5nOjAuNXB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gIGNvbG9yOiBkaW1ncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmZ1bGxXaWR0aHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmljb25SaWdodEJ1dHRvbntcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5idXR0b25zOmhvdmVyIHNwYW57XHJcbiAgLyogY29sb3I6IzAwRkZGRiAqL1xyXG4gIC8qIGNvbG9yOiNGRkY4REMgKi9cclxuICAvKiBjb2xvcjojRkZENzAwICovXHJcbiAgLyogY29sb3I6I0ZGRkFDRCAqL1xyXG4gIC8qIGNvbG9yOiM4N0NFRkEgKi9cclxuICAvKiBjb2xvcjojNDhEMUNDICovXHJcbiAgY29sb3I6IzAwRkE5QTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmlubGluZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50aXRsZVJlZ2lzdGVye1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map