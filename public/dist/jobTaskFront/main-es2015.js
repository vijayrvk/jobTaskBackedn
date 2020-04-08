(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/job-list/job-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/job-list/job-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Company</th>\n      <th scope=\"col\">Department</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let job of jobList; index as i\">\n      <th scope=\"row\">{{ (pagination.offset > 1) ? (((pagination.offset - 1) * pagination.limit) +  (i + 1)) : i + 1 }}</th>\n      <td>{{ job.company}} {{pagination.offset}} test {{pagination.limit}}</td>\n      <td> <div innerHTML=\"{{ job.description}}\"></div></td>\n    </tr>\n    </tbody>\n  </table>\n\n  <div class=\"table-pagination-block\" *ngIf=\"jobList.length > 0\">\n    <div class=\"row\">            \n      <div class=\"col-md-12\">\n          <div>\n              <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"pagination.total\"\n                  [(page)]=\"pagination.offset\" [rotate]=\"true\" [maxSize]=\"pagination.maxsize\" [boundaryLinks]=\"true\"\n                  size=\"sm\" (pageChange)=\"pageChange(pagination.offset)\">\n              </ngb-pagination>\n          </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"table-pagination-block\" *ngIf=\"jobList.length === 0\">\n    <div class=\"row\">            \n      <div class=\"col-md-12\">\n          <div>\n            <button class=\"btn btn-primary bd-0\" (click)='syncJob()'>Sync Job</button>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/job-list/job-list.component */ "./src/app/pages/job-list/job-list.component.ts");




const routes = [{
        path: '',
        component: _pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__["JobListComponent"]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'jobTaskFront';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/job-list/job-list.component */ "./src/app/pages/job-list/job-list.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_7__["JobListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/job-list/job-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/job-list/job-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n}\n\n\n.table {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 1rem;\n    background-color: transparent;\n  }\n\n\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n  }\n\n\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6;\n  }\n\n\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6;\n  }\n\n\n.table .table {\n    background-color: #fff;\n  }\n\n\n.table-sm th,\n  .table-sm td {\n    padding: 0.3rem;\n  }\n\n\n.table-bordered {\n    border: 1px solid #dee2e6;\n  }\n\n\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6;\n  }\n\n\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px;\n  }\n\n\n.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n\n.table-hover tbody tr:hover {\n    background-color: rgba(0, 0, 0, 0.075);\n  }\n\n\n.table-primary,\n  .table-primary > th,\n  .table-primary > td {\n    background-color: #b8daff;\n  }\n\n\n.table-hover .table-primary:hover {\n    background-color: #9fcdff;\n  }\n\n\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff;\n  }\n\n\n.table-secondary,\n  .table-secondary > th,\n  .table-secondary > td {\n    background-color: #d6d8db;\n  }\n\n\n.table-hover .table-secondary:hover {\n    background-color: #c8cbcf;\n  }\n\n\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf;\n  }\n\n\n.table-success,\n  .table-success > th,\n  .table-success > td {\n    background-color: #c3e6cb;\n  }\n\n\n.table-hover .table-success:hover {\n    background-color: #b1dfbb;\n  }\n\n\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb;\n  }\n\n\n.table-info,\n  .table-info > th,\n  .table-info > td {\n    background-color: #bee5eb;\n  }\n\n\n.table-hover .table-info:hover {\n    background-color: #abdde5;\n  }\n\n\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5;\n  }\n\n\n.table-warning,\n  .table-warning > th,\n  .table-warning > td {\n    background-color: #ffeeba;\n  }\n\n\n.table-hover .table-warning:hover {\n    background-color: #ffe8a1;\n  }\n\n\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1;\n  }\n\n\n.table-danger,\n  .table-danger > th,\n  .table-danger > td {\n    background-color: #f5c6cb;\n  }\n\n\n.table-hover .table-danger:hover {\n    background-color: #f1b0b7;\n  }\n\n\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7;\n  }\n\n\n.table-light,\n  .table-light > th,\n  .table-light > td {\n    background-color: #fdfdfe;\n  }\n\n\n.table-hover .table-light:hover {\n    background-color: #ececf6;\n  }\n\n\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6;\n  }\n\n\n.table-dark,\n  .table-dark > th,\n  .table-dark > td {\n    background-color: #c6c8ca;\n  }\n\n\n.table-hover .table-dark:hover {\n    background-color: #b9bbbe;\n  }\n\n\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe;\n  }\n\n\n.table-active,\n  .table-active > th,\n  .table-active > td {\n    background-color: rgba(0, 0, 0, 0.075);\n  }\n\n\n.table-hover .table-active:hover {\n    background-color: rgba(0, 0, 0, 0.075);\n  }\n\n\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075);\n  }\n\n\n.table .thead-dark th {\n    color: #fff;\n    background-color: #212529;\n    border-color: #32383e;\n  }\n\n\n.table .thead-light th {\n    color: #495057;\n    background-color: #e9ecef;\n    border-color: #dee2e6;\n  }\n\n\n.table-dark {\n    color: #fff;\n    background-color: #212529;\n  }\n\n\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e;\n  }\n\n\n.table-dark.table-bordered {\n    border: 0;\n  }\n\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05);\n  }\n\n\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075);\n  }\n\n\n.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none;\n    border-radius: 0.25rem;\n  }\n\n\n.page-link {\n    position: relative;\n    display: block;\n    padding: 0.5rem 0.75rem;\n    margin-left: -1px;\n    line-height: 1.25;\n    color: #007bff;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n  }\n\n\n.page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6;\n  }\n\n\n.page-link:focus {\n    z-index: 2;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n\n\n.page-link:not(:disabled):not(.disabled) {\n    cursor: pointer;\n  }\n\n\n.page-item:first-child .page-link {\n    margin-left: 0;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n\n.page-item:last-child .page-link {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n\n\n.page-item.active .page-link {\n    z-index: 1;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n  }\n\n\n.page-item.disabled .page-link {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: auto;\n    background-color: #fff;\n    border-color: #dee2e6;\n  }\n\n\n.pagination-lg .page-link {\n    padding: 0.75rem 1.5rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n  }\n\n\n.pagination-lg .page-item:first-child .page-link {\n    border-top-left-radius: 0.3rem;\n    border-bottom-left-radius: 0.3rem;\n  }\n\n\n.pagination-lg .page-item:last-child .page-link {\n    border-top-right-radius: 0.3rem;\n    border-bottom-right-radius: 0.3rem;\n  }\n\n\n.pagination-sm .page-link {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n  }\n\n\n.pagination-sm .page-item:first-child .page-link {\n    border-top-left-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n  }\n\n\n.pagination-sm .page-item:last-child .page-link {\n    border-top-right-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7OztBQUVBOztJQUVFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7OztBQUVBO0lBQ0UsNkJBQTZCO0VBQy9COzs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7O0FBRUE7O0lBRUUsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7O0FBRUE7O0lBRUUsd0JBQXdCO0VBQzFCOzs7QUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7O0FBRUE7SUFDRSxzQ0FBc0M7RUFDeEM7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7OztBQUVBOzs7SUFHRSxzQ0FBc0M7RUFDeEM7OztBQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDOzs7QUFFQTs7SUFFRSxzQ0FBc0M7RUFDeEM7OztBQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7OztBQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7OztBQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7O0FBRUE7OztJQUdFLHFCQUFxQjtFQUN2Qjs7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7OztBQUVBO0lBQ0UsMkNBQTJDO0VBQzdDOzs7QUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7O0FBQ0E7SUFHRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7OztBQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixnREFBZ0Q7RUFDbEQ7OztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGtDQUFrQztFQUNwQzs7O0FBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0VBQ3JDOzs7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOzs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOzs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7OztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGtDQUFrQztFQUNwQzs7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DOzs7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBa0M7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2ItbGlzdC9qb2ItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cblxuLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLnRhYmxlIHRoLFxuICAudGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICB9XG4gIFxuICAudGFibGUgdGJvZHkgKyB0Ym9keSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XG4gIH1cbiAgXG4gIC50YWJsZSAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC50YWJsZS1zbSB0aCxcbiAgLnRhYmxlLXNtIHRkIHtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgXG4gIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgLnRhYmxlLWJvcmRlcmVkIHRoLFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIH1cbiAgXG4gIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcbiAgLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIH1cbiAgXG4gIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIH1cbiAgXG4gIC50YWJsZS1wcmltYXJ5LFxuICAudGFibGUtcHJpbWFyeSA+IHRoLFxuICAudGFibGUtcHJpbWFyeSA+IHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkYWZmO1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtcHJpbWFyeTpob3ZlciA+IHRkLFxuICAudGFibGUtaG92ZXIgLnRhYmxlLXByaW1hcnk6aG92ZXIgPiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmY2RmZjtcbiAgfVxuICBcbiAgLnRhYmxlLXNlY29uZGFyeSxcbiAgLnRhYmxlLXNlY29uZGFyeSA+IHRoLFxuICAudGFibGUtc2Vjb25kYXJ5ID4gdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ4ZGI7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYmNmO1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLXNlY29uZGFyeTpob3ZlciA+IHRkLFxuICAudGFibGUtaG92ZXIgLnRhYmxlLXNlY29uZGFyeTpob3ZlciA+IHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYmNmO1xuICB9XG4gIFxuICAudGFibGUtc3VjY2VzcyxcbiAgLnRhYmxlLXN1Y2Nlc3MgPiB0aCxcbiAgLnRhYmxlLXN1Y2Nlc3MgPiB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjtcbiAgfVxuICBcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFkZmJiO1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLXN1Y2Nlc3M6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRmYmI7XG4gIH1cbiAgXG4gIC50YWJsZS1pbmZvLFxuICAudGFibGUtaW5mbyA+IHRoLFxuICAudGFibGUtaW5mbyA+IHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVlNWViO1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLWluZm86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmRkZTU7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtaW5mbzpob3ZlciA+IHRkLFxuICAudGFibGUtaG92ZXIgLnRhYmxlLWluZm86aG92ZXIgPiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiZGRlNTtcbiAgfVxuICBcbiAgLnRhYmxlLXdhcm5pbmcsXG4gIC50YWJsZS13YXJuaW5nID4gdGgsXG4gIC50YWJsZS13YXJuaW5nID4gdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlYmE7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtd2FybmluZzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMTtcbiAgfVxuICBcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS13YXJuaW5nOmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtd2FybmluZzpob3ZlciA+IHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGExO1xuICB9XG4gIFxuICAudGFibGUtZGFuZ2VyLFxuICAudGFibGUtZGFuZ2VyID4gdGgsXG4gIC50YWJsZS1kYW5nZXIgPiB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzZjYjtcbiAgfVxuICBcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1kYW5nZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWIwYjc7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWIwYjc7XG4gIH1cbiAgXG4gIC50YWJsZS1saWdodCxcbiAgLnRhYmxlLWxpZ2h0ID4gdGgsXG4gIC50YWJsZS1saWdodCA+IHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZlO1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLWxpZ2h0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2Y2O1xuICB9XG4gIFxuICAudGFibGUtaG92ZXIgLnRhYmxlLWxpZ2h0OmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtbGlnaHQ6aG92ZXIgPiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNmNjtcbiAgfVxuICBcbiAgLnRhYmxlLWRhcmssXG4gIC50YWJsZS1kYXJrID4gdGgsXG4gIC50YWJsZS1kYXJrID4gdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmM4Y2E7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFyazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5YmJiZTtcbiAgfVxuICBcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1kYXJrOmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFyazpob3ZlciA+IHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYmJlO1xuICB9XG4gIFxuICAudGFibGUtYWN0aXZlLFxuICAudGFibGUtYWN0aXZlID4gdGgsXG4gIC50YWJsZS1hY3RpdmUgPiB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIH1cbiAgXG4gIC50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgfVxuICBcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIH1cbiAgXG4gIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgICBib3JkZXItY29sb3I6ICMzMjM4M2U7XG4gIH1cbiAgXG4gIC50YWJsZSAudGhlYWQtbGlnaHQgdGgge1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICB9XG4gIFxuICAudGFibGUtZGFyayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgfVxuICBcbiAgLnRhYmxlLWRhcmsgdGgsXG4gIC50YWJsZS1kYXJrIHRkLFxuICAudGFibGUtZGFyayB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzIzODNlO1xuICB9XG4gIFxuICAudGFibGUtZGFyay50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICAudGFibGUtZGFyay50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIH1cbiAgXG4gIC50YWJsZS1kYXJrLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcbiAgfVxuICAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB9XG4gIFxuICAucGFnZS1saW5rIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB9XG4gIFxuICAucGFnZS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIH1cbiAgXG4gIC5wYWdlLWxpbms6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gIH1cbiAgXG4gIC5wYWdlLWxpbms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIH1cbiAgXG4gIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgfVxuICBcbiAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLWxnIC5wYWdlLWxpbmsge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIFxuICAucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLWxnIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbmsge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24tc20gLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/job-list/job-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/job-list/job-list.component.ts ***!
  \******************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");



let JobListComponent = class JobListComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.jobList = [];
        this.pagination = {
            limit: 5,
            offset: 1,
            total: 0,
            maxsize: 1
        };
    }
    ngOnInit() {
        this.httpService.getApi(`job/jobs?offset=${this.pagination.offset}&limit=${this.pagination.limit}`).subscribe(res => {
            this.jobList = res['data'];
            this.pagination.total = res['count'];
        });
    }
    pageChange(pageNo) {
        this.pagination.offset = pageNo;
        this.httpService.getApi(`job/jobs?offset=${this.pagination.offset}&limit=${this.pagination.limit}`).subscribe(res => {
            this.jobList = res['data'];
            this.pagination.total = res['count'];
        });
    }
    syncJob() {
        this.httpService.postApi('', 'job/sync').subscribe(res => {
            this.httpService.getApi(`job/jobs?offset=${this.pagination.offset}&limit=${this.pagination.limit}`).subscribe(res => {
                this.jobList = res['data'];
                this.pagination.total = res['count'];
            });
        });
    }
};
JobListComponent.ctorParameters = () => [
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"] }
];
JobListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-list',
        template: __webpack_require__(/*! raw-loader!./job-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/job-list/job-list.component.html"),
        styles: [__webpack_require__(/*! ./job-list.component.css */ "./src/app/pages/job-list/job-list.component.css")]
    })
], JobListComponent);



/***/ }),

/***/ "./src/app/services/http-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HttpServiceService = class HttpServiceService {
    constructor(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:3214/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getApi(url) {
        return this.http.get(this.serverUrl + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postApi(json, url) {
        return this.http.post(this.serverUrl + url, json, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error({ error });
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = { message: error.error.message };
        }
        else {
            // server-side error
            errorMessage = { code: error.status, message: error.error.message };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/vijayakumar/A81/workspace/nodeWork/jobTaskFront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map