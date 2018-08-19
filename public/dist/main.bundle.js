webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\n  background-color: #f7f7f7;\n  /*padding: 2em;*/\n  margin-top: -20px;\n  border-bottom: 1px solid #E5E5E5;\n}\n\nh2{\n  font-size: 5em;\n  margin-bottom: .5em;\n  letter-spacing: -0.1em;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.main-text{\n  font-size: 1.25em;\n  font-family: arial;\n  color: #515151;\n  text-align: left;\n  line-height: 1.6;\n}\n\n.strong-text{\n  font-size: 1.35em;\n  font-weight: 700;\n}\n\nimg{\n  width: 350px;\n}\n\n.img-fix{\n  border-radius: 50%;\n  width: 120px;\n  padding: 10px;\n  border: 1px solid #aaaaaa;\n  background-color: white;\n  margin-top: .6em;\n}\n\nh3{\n  font-family: times;\n  font-size: 1em;\n  color: #c1c1c1;\n  letter-spacing: 0.2em;\n}\n\nh1{\n  font-size: 3em;\n  font-weight: 400;\n  font-family: futura, verdana;\n\n}\n\n.random-title{\n  font-size: 5em;\n  letter-spacing: -0.1em;\n  float: right;\n  font-weight: 500;\n}\n\nsection{\n  background-color: #F7F7F7;\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #e5e5e5;\n  margin-top: -1.5em;\n\n}\n\nul, li{\n  list-style-type: none;\n  font-size: 1.15em;\n  color: #515151;\n  text-align: center;\n  margin: 2em;\n}\n\n.pic2{\n  width: 250px;\n  padding: 1em;\n}\n\n@media only screen and (max-width: 995px) {\n  .pic2 {\n    margin: 0 auto;\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <header class=\"animated fadeIn\">\n    <div class=\"text-center\">\n      <img class=\"img-fix\" src=\"/assets/me2.jpeg\" alt=\"Marleau and I\">\n      <h1>Felipe Mesina</h1>\n      <h3>Full Stack Web Developer</h3>\n      <h3>&amp; Food Network's Chopped addict</h3>\n    </div>\n  </header>\n  <div class=\"container\">\n    <main>\n      <div>\n        <h2 class=\"animated fadeInDown\">about me</h2>\n        <p class=\"main-text animated fadeIn\">Hello, I'm Felipe Mesina, a <span class=\"strong-text\">Full Stack\n        Web Developer</span>.</p>\n        <br />\n        <p class=\"main-text animated fadeIn\">\n          When I am not binge watching Chopped, House Hunters, or spoiling my dog, Marleau,\n          I enjoy spending my time building web pages and applications. I am currently using\n          <span class=\"strong-text\"> HTML5, CSS3, JavaScript, ES6, APIs, Angular 2, jQuery, Bootstrap, </span>\n            and the full <span class=\"strong-text\">MEAN </span>stack.\n          I also have some experience with <span class=\"strong-text\">Python/Django</span> and\n          <span class=\"strong-text\">Ruby On Rails. </span> I equally love the challenges between\n          design and development. This passion pushes me to expand my skill set. I am currently\n          learning React, UI/UX design and expanding my knowledge with Adobe Illustrator.\n          In the future, I would love to learn Java and Android app development.\n        </p>\n      </div>\n    </main>\n        <p class=\"random-title animated fadeInUp\">random facts</p>\n      </div>\n    <section>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div id=\"img-container\" class=\"col-xs-12 col-md-6\">\n            <img class=\"pic2\" src=\"/assets/me.jpeg\" alt=\"marleau and i\">\n          </div>\n          <div class=\"col-xs-12 col-md-6\">\n            <ul class=\"text-center\">\n              <li>I love to cook</li>\n              <li>I'm a Lord of the Rings nerd</li>\n              <li>I'm terrified of heights but love roller coasters</li>\n              <li>I play the guitar and drums</li>\n              <li>I love puzzles</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n   position: absolute;\n   width: 100%;\n   height: 60px;\n   top: 1300px;\n   left: 0px;\n   background-color: #efefef;\n   color: #8e8e8e;\n}\n\n@media only screen and (min-width: 990px) {\n    footer {\n        top: 1340px;\n    }\n}\n\n@media only screen and (max-width: 990px) {\n    footer {\n        top: 1720px;\n    }\n}\n\n@media only screen and (max-width: 660px) {\n    footer {\n        top: 1780px;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    footer {\n        top: 2000px;\n    }\n    ul,li {\n      float: left;\n      font-size: .92em;\n    }\n    p{\n      font-size: .75em;\n    }\n}\n\na{\n  color: black;\n}\n\na:hover{\n  color: #42a4f4;\n}\n\np{\n  display: inline-block;\n  float: right;\n  margin-top: 1.5em;\n}\n\nul, li{\n  display: inline-block;\n  list-style-type: none;\n  padding: .5em 1em 0 3em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"animated fadeInUp\">\n  <div class=\"col-xs-12\">\n    <ul>\n      <li><a href=\"https://www.linkedin.com/in/felipe-mesina/\" target=\"_blank\"><i class=\"fa fa-linkedin fa-2x\" aria-hidden=\"true\"></i></a></li>\n      <li><a href=\"https://github.com/felipemesina\" target=\"_blank\"><i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i></a></li>\n      <li><a href=\"mailto:felipejmesina@gmail.com\" target=\"_blank\"><i class=\"fa fa-envelope-o fa-2x\" aria-hidden=\"true\"></i></a></li>\n    </ul>\n    <p> &copy; 2018 Felipe Mesina </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n  font-size: 1em;\n  font-family: futura, Helvetica, Arial, sans-serif;\n  color: black;\n  text-decoration: none;\n  display: inline-block;\n  padding: 1em;\n}\n\na:hover{\n  color: #42a4f4;\n}\n\n.navbar-brand{\n  font-family: futura, Helvetica, Arial, sans-serif;\n  font-weight: 530;\n  letter-spacing: 0.4em;\n}\n\n.navbar{\n  border-bottom: 1px solid #E5E5E5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand animated fadeInLeft\" [routerLink]=\"['']\">FELIPE MESINA</a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"fa fa-bars\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"links\"><a [routerLink]=\"['']\">ABOUT</a></li>\n        <li class=\"links\"><a [routerLink]=\"['portfolio']\">PORTFOLIO</a></li>\n        <li class=\"links\"><a href=\"mailto:felipejmesina@gmail.com\">CONTACT</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.project-img{\n  width: 240px;\n  height: auto;\n  margin-bottom: 1em;\n}\n\n.box{\n  width: 60%;\n  margin: 0 auto;\n  border-radius: .25em;\n  padding: 2em;\n  margin-bottom: 2em;\n  -webkit-transition: background-color .4s ease-out;\n}\n\np{\n  color: #fff;\n}\n\nh3{\n  color: white;\n}\n\nh1{\n  font-size: 5em;\n  margin-bottom: .5em;\n  letter-spacing: -0.1em;\n  text-align: center;\n}\n\na{\n  color: white;\n  text-decoration: none;\n}\n\n/*p:hover{\n  color: white;\n}*/\n\ndiv.box:hover{\n  background-color: #42a4f4;\n  border-radius: 7px;\n  -webkit-text-decoration-color: white;\n          text-decoration-color: white;\n}\n\n@media only screen and (max-width: 500px) {\n    .project-img {\n        width: 200px;\n        margin-bottom: 1em;\n        padding-right: 1em;\n\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1 class=\"animated fadeInDown\">portfolio</h1>\n      <div class=\"text-center box animated fadeInUp\">\n        <a href=\"#\">\n          <img class=\"project-img\" src=\"/assets/market.png\" alt=\"a macbook\">\n          <h3>FM Marketplace</h3>\n          <p>A \"what if Craigslist used CSS?\" mash-up. Used Bootstrap 4 Cards Class to give\n            the postings a Pinterest-like layout.</p>\n          <p>HTML, CSS, JavaScript, MEAN, Bootstrap</p>\n        </a>\n      </div>\n      <div class=\"text-center box animated fadeInUp\">\n        <a href=\"#\">\n        <img class=\"project-img\" src=\"/assets/recipes.png\" alt=\"a macbook\">\n        <h3>Recipez</h3>\n        <p>A take on web design. Focused on making it responsive and colorful.</p>\n        <p>Ruby On Rails, HTML, CSS</p>\n      </a>\n      </div>\n      <div class=\"text-center box animated fadeInUp\">\n        <a href=\"#\">\n        <img class=\"project-img\" src=\"/assets/macbook.png\" alt=\"a macbook\">\n        <h3>Ninja Gold</h3>\n        <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n           publishing software like Aldus PageMaker.</p>\n        <p>HTML, CSS, JavaScript, MEAN, Bootstrap</p>\n      </a>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map