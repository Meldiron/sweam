webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.activeUser = 0;
        this.isLoaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.api.loaded === true) {
            this.users = this.api.dataFromServer;
            this.isLoaded = true;
        }
        this.api.events.subscribe(function (obj) {
            var type = obj.status;
            if (type === 'newData') {
                _this.isLoaded = true;
                _this.users = obj.val;
                if (_this.users.length - 1 < _this.activeUser) {
                    _this.activeUser = 0;
                }
                if (_this.users.length === 0) {
                    _this.activeUser = 0;
                }
            }
            else if (type === 'disconnected') {
                _this.isLoaded = false;
            }
            else if (type === 'setActive') {
                console.log('new active server');
                _this.activeUser = obj.val;
            }
        });
    };
    AppComponent.prototype.setActiveUser = function (id) {
        this.activeUser = id;
    };
    AppComponent.prototype.getActiveUser = function (id) {
        var usr = this.users[id];
        return usr;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(190),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__git_git_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__body_body_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alert_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__git_git_component__["a" /* GitComponent */],
            __WEBPACK_IMPORTED_MODULE_6__body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__["SweetAlertService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BodyComponent = (function () {
    function BodyComponent(api, alert) {
        var _this = this;
        this.api = api;
        this.alert = alert;
        this.settingsRotate = { value: 0 };
        this.isAnimating = false;
        this.displayOpened = 'block';
        console.log(this.user);
        this.timeNow = Date.now();
        setInterval(function () {
            _this.timeNow = Date.now();
        }, 1000);
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.pass = function (str) {
        if (this.user.showPass === true) {
            return str;
        }
        else {
            return '****';
        }
    };
    BodyComponent.prototype.openSettingsPopup = function (user) {
        var _this = this;
        this.alert.swal({
            type: 'info',
            title: 'Account settings',
            confirmButtonText: 'Save',
            html: '(' + user.displayName + ')<br><br>' +
                '<small>Show password: </small><input id="showPassCheckbox" type="checkbox">',
            onOpen: function () {
                var el = document.getElementById("showPassCheckbox");
                el.checked = _this.user.showPass;
                el.addEventListener('click', function () {
                    user.showPass = !user.showPass;
                });
            },
            preConfirm: function () {
                var el = document.getElementById("showPassCheckbox");
                _this.api.socket.emit('editShowPass', { id: _this.user.id, val: el.checked }, function (data) {
                    if (data.status !== 'success') {
                        _this.alert.swal({
                            type: 'error',
                            title: 'Account settings',
                            text: data.msg
                        });
                    }
                });
                return new Promise(function (resolve) {
                    resolve('');
                });
            }
        });
    };
    BodyComponent.prototype.toggleshowPass = function () {
    };
    BodyComponent.prototype.getDate = function (str) {
        return str.split(' ')[0];
    };
    BodyComponent.prototype.getTime = function (str) {
        return str.split(' ')[1];
    };
    BodyComponent.prototype.removeAccount = function (id) {
        var _this = this;
        this.alert.swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#db524b !important',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            _this.api.socket.emit('removeAccount', id, function (res) {
                if (res.status === 'success') {
                    _this.alert.swal({
                        title: 'Deleted',
                        text: 'Account successfully deleted',
                        type: 'success'
                    });
                }
                else {
                    _this.alert.swal({
                        title: 'Deleted',
                        text: res.msg,
                        type: 'error'
                    });
                }
            });
        });
    };
    BodyComponent.prototype.toggleSettings = function () {
        var _this = this;
        if (this.isAnimating) {
            return;
        }
        this.isAnimating = true;
        if (document.getElementById('settingsContent').style.opacity === '1' ||
            document.getElementById('settingsContent').style.opacity === '') {
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: this.settingsRotate,
                value: 180,
                easing: 'easeInQuad',
                round: 10,
                duration: 300,
                complete: function () {
                    _this.displayOpened = 'none';
                    _this.isAnimating = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#settingsContent',
                easing: 'easeInQuad',
                duration: 300,
                marginTop: '-' + document.getElementById('settingsContent').clientHeight + 'px',
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#settingsContent',
                easing: 'easeInQuad',
                duration: 200,
                opacity: 0
            });
        }
        else {
            this.displayOpened = 'block';
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: this.settingsRotate,
                value: 0,
                easing: 'easeInQuad',
                round: 10,
                duration: 300,
                complete: function () {
                    _this.isAnimating = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#settingsContent',
                easing: 'easeInQuad',
                duration: 300,
                marginTop: '0px',
                opacity: 1
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#settingsContent',
                easing: 'easeInQuad',
                duration: 200,
                offset: 100,
                opacity: 1
            });
        }
    };
    return BodyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('user'),
    __metadata("design:type", Object)
], BodyComponent.prototype, "user", void 0);
BodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], BodyComponent);

var _a, _b;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitComponent = (function () {
    function GitComponent(api) {
        this.api = api;
    }
    GitComponent.prototype.ngOnInit = function () {
    };
    GitComponent.prototype.openUrl = function () {
        this.api.sendOpenUrl('https://github.com/saintusmarcus/sweam');
    };
    return GitComponent;
}());
GitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-git',
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], GitComponent);

var _a;
//# sourceMappingURL=git.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(alert) {
        this.alert = alert;
        this.onmenuClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.isAnimatingMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.showAlert = function () {
        this.alert.alert({
            title: 'Connection',
            text: 'Everything is connected, evenything works just fine.',
            type: 'success'
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        var _this = this;
        if (this.isAnimatingMenu) {
            return;
        }
        this.isAnimatingMenu = true;
        var min = -200;
        var max = 0;
        if (document.getElementById('leftMenu').style.transform === 'translateX(' + max + 'px)') {
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#leftMenu',
                easing: 'easeInQuad',
                duration: 500,
                translateX: min + 'px',
                complete: function () {
                    _this.isAnimatingMenu = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#mainContent',
                easing: 'easeOutQuad',
                duration: 500,
                marginLeft: '0px'
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#leftMenu',
                easing: 'easeInQuad',
                duration: 500,
                translateX: max + 'px',
                complete: function () {
                    _this.isAnimatingMenu = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#mainContent',
                easing: 'easeInQuad',
                duration: 400,
                marginLeft: '200px'
            });
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])('onmenuClick'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "onmenuClick", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(alert, api) {
        this.alert = alert;
        this.api = api;
        this.setActiveUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.isAnimating = false;
        this.arrowRotate = { value: 90 };
        this.displayOpened = 'block';
        this.fileSelectText = 'Select file';
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.isActive = function (id) {
        if (this.activeUser === id) {
            return true;
        }
        else {
            return false;
        }
    };
    MenuComponent.prototype.closeUsers = function () {
        var _this = this;
        if (this.isAnimating) {
            return;
        }
        this.isAnimating = true;
        if (document.getElementById('usersContent').style.opacity === '1' ||
            document.getElementById('usersContent').style.opacity === '') {
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: this.arrowRotate,
                value: -90,
                easing: 'easeInQuad',
                round: 10,
                duration: 300,
                complete: function () {
                    _this.displayOpened = 'none';
                    _this.isAnimating = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#usersContent',
                easing: 'easeInQuad',
                duration: 300,
                marginTop: '-' + document.getElementById('usersContent').clientHeight + 'px',
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#usersContent',
                easing: 'easeInQuad',
                duration: 200,
                opacity: 0
            });
        }
        else {
            this.displayOpened = 'block';
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: this.arrowRotate,
                value: 90,
                easing: 'easeInQuad',
                round: 10,
                duration: 300,
                complete: function () {
                    _this.isAnimating = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#usersContent',
                easing: 'easeInQuad',
                duration: 300,
                marginTop: '0px',
                opacity: 1
            });
            __WEBPACK_IMPORTED_MODULE_1_animejs__({
                targets: '#usersContent',
                easing: 'easeInQuad',
                duration: 200,
                offset: 100,
                opacity: 1
            });
        }
    };
    MenuComponent.prototype.switchToUser = function (id) {
        this.setActiveUser.emit(id);
    };
    MenuComponent.prototype.createAcc = function () {
        var _this = this;
        var info = {
            displayName: '',
            description: '',
            lastLogin: -1,
            createDate: -1,
            name: '',
            password: '',
            img: ''
        };
        var steps = [
            {
                title: 'Account Display info',
                text: 'Enter informations you will see in app',
                html: 'Enter informations you will see in app' +
                    '<input placeholder="Display name" id="swal-input1" class="swal2-input">' +
                    '<input placeholder="Description [optional]" id="swal-input2" class="swal2-input">',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Next',
                cancelButtonText: 'Cancel',
                progressSteps: ['1', '2', '3'],
                onOpen: function () {
                    document.getElementById("swal-input1").focus();
                },
                preConfirm: function () {
                    var el = document.getElementById('swal-input1');
                    info.displayName = el.value;
                    el = document.getElementById('swal-input2');
                    info.description = el.value;
                    return new Promise(function (resolve) {
                        resolve('');
                    });
                }
            },
            {
                title: 'Steam account info',
                html: 'Enter informations app will enter to steam' +
                    '<input placeholder="Steam username" id="swal-input3" class="swal2-input">' +
                    '<input placeholder="Steam password" type="password" id="swal-input4" class="swal2-input">',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Next',
                cancelButtonText: 'Cancel',
                progressSteps: ['1', '2', '3'],
                onOpen: function () {
                    document.getElementById("swal-input3").focus();
                },
                preConfirm: function () {
                    var el = document.getElementById('swal-input3');
                    info.name = el.value;
                    el = document.getElementById('swal-input4');
                    info.password = el.value;
                    return new Promise(function (resolve) {
                        resolve('');
                    });
                }
            },
            {
                title: 'Account photo info',
                html: 'Select photo you want ti see in app<br><br>' +
                    '<label class="btn btn-accent" for="file-selector2">' +
                    '<input id="file-selector2" type="file" style="display: none;">' +
                    '<span id="upload-file-info2" style="cursor: pointer;"> ' + this.fileSelectText + ' </span>' +
                    '</label> <small id="upload-file-info3"> Click to choose file </small>' +
                    '<br><br> <img src="" alt="" style="display: none;  margin-left: calc(50% - 50px); width: 120px; height: 120px; border-radius: 50%;" id="upload-file-img" /> ',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Create',
                cancelButtonText: 'Cancel',
                progressSteps: ['1', '2', '3'],
                onOpen: function () {
                    document.getElementById('file-selector2').addEventListener('change', function (event) {
                        if (event.target.value !== '') {
                            var path = event.target.files[0].path;
                            document.getElementById('upload-file-info2').innerHTML = 'Select another file';
                            document.getElementById('upload-file-info3').innerHTML = path;
                            document.getElementById('upload-file-img').style.display = 'block';
                            document.getElementById('upload-file-img').setAttribute('src', 'file://' + path);
                        }
                        else {
                            document.getElementById('upload-file-info2').innerHTML = 'Select file';
                            document.getElementById('upload-file-info3').innerHTML = 'Click to choose file';
                            document.getElementById('upload-file-img').style.display = 'none';
                        }
                    });
                },
                preConfirm: function () {
                    var el = document.getElementById('file-selector2');
                    if (el.files.length !== 0) {
                        info.img = el.files[0].path;
                    }
                    return new Promise(function (resolve) {
                        resolve('');
                    });
                }
            },
        ];
        this.alert.swal.queue(steps).then(function () {
            info.createDate = Date.now();
            console.log(info);
            _this.api.socket.emit('newUser', info, function (obj) {
                console.log(obj);
                if (obj.status === 'success') {
                    _this.alert.swal({
                        title: 'User added!',
                        html: 'User successfully added :)',
                        confirmButtonText: 'Great!',
                        type: 'success'
                    });
                }
                else {
                    _this.alert.swal({
                        title: 'Error!',
                        html: obj.msg,
                        type: 'error'
                    });
                }
            });
        });
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('users'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "users", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('activeUser'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "activeUser", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])('setActiveUser'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "setActiveUser", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(194),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "a {\n  position: fixed;\n  top: 60px;\n  right: 0;\n  width: 100px;\n  z-index: 1000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"isLoaded\">\n\n  <app-git></app-git>\n\n  <div class=\"wrapper\">\n\n    <app-header\n      (onmenuClick)=\"toggleMenu()\"\n    ></app-header>\n\n    <app-menu\n      (setActiveUser)=\"setActiveUser($event)\"\n      [users]=\"users\"\n      [activeUser]=\"activeUser\"\n    ></app-menu>\n\n    <app-body *ngIf=\"users.length !== 0\" [user]=\"getActiveUser(activeUser)\"></app-body>\n\n  </div>\n\n</div>\n\n<div *ngIf=\"!isLoaded\"> Loading... </div>\n\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<section class=\"content\" id=\"mainContent\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"view-header\">\n          <div class=\"pull-right text-right\" style=\"line-height: 18px; padding-top: 5px;\">\n            <small>\n              {{ timeNow | date:'dd.MM.yyyy' }}<br>\n              <span class=\"c-white\">{{ timeNow | date:'hh : mm : ss' }}</span>\n            </small>\n          </div>\n          <div class=\"header-icon\">\n            <i class=\"pe page-header-icon pe-7s-user\"></i>\n          </div>\n          <div class=\"header-title\">\n            <h3>{{ user.displayName }}</h3>\n            <small>\n              {{ user.description }}\n            </small>\n          </div>\n        </div>\n        <hr>\n      </div>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-7\">\n\n\n        <div class=\"panel panel-filled\" style=\"margin-top: 60px;\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-tools\" (click)=\"openSettingsPopup(user)\">\n              <a class=\"panel-close\" style=\"font-size:25px;\"><i style=\"color: #fff;\" class=\"fa fa-cog\"></i></a>\n            </div>\n          </div>\n\n          <div style=\"width: 100%;\">\n\n            <img style=\"width: 120px; height: 120px; margin-left: calc(50% - 60px); margin-top: -80px; border-radius: 50%;\" [src]=\"user.img\" alt=\"User\">\n          </div>\n\n          <div class=\"panel-body\" style=\"margin-top: 20px; margin-bottom: 30px;\">\n            <h1 style=\"text-align: center; color: #ffffff;\"> {{ user.displayName }} </h1>\n            <h3 style=\"text-align: center; margin-top: -10px;\"> <small>Steam Account</small> </h3>\n\n\n            <div class=\"table-responsive\" style=\"margin-top:30px;\">\n              <table class=\"table table-hover table-striped\">\n                <tbody>\n                <tr>\n                  <td>Description: </td>\n                  <td> {{ user.description }} </td>\n                </tr>\n                <tr>\n                  <td>Username: </td>\n                  <td> {{ user.name }} </td>\n                </tr>\n                <tr>\n                  <td>Password: </td>\n                  <td> {{ pass(user.password) }} </td>\n                </tr>\n\n                <tr>\n                  <td>Last Login: </td>\n                  <td>\n                    <table>\n                      <tr>\n                        <td style=\"width: 70px;\"> {{ user.lastLogin | date:'dd.MM.yyyy' }} </td>\n                        <td style=\"padding-left:10px;\"> | </td>\n                        <td style=\"padding-left:10px\">  {{ user.lastLogin | date:'hh:mm:ss' }} </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td>Create date: </td>\n                  <td>\n                    <table>\n                      <tr>\n                        <td style=\"width: 70px;\"> {{ user.createDate | date:'dd.MM.yyyy' }} </td>\n                        <td style=\"padding-left:10px;\"> | </td>\n                        <td style=\"padding-left:10px\"> {{ user.createDate | date:'hh:mm:ss' }} </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n\n\n        </div>\n\n        <a class=\"btn btn-w-md btn-accent btn-rounded\"\n           style=\"width: 200px; margin-left: calc(50% - 100px); margin-top: -60px; font-size:25px; background: #f6a821; color: #fff;\">LOGIN</a>\n\n      </div>\n\n      <div class=\"col-md-5\">\n\n        <div class=\"panel panel-filled panel-c-accent\" style=\"margin-top: 60px;\">\n          <div class=\"panel-heading\" (click)=\"toggleSettings()\" style=\"cursor: pointer;\">\n            <div class=\"panel-tools\">\n              <a class=\"panel-toggle\"><i class=\"fa fa-chevron-up\" [ngStyle]=\"{ transform: 'rotate(' + settingsRotate.value + 'deg)' }\"></i></a>\n            </div>\n            Settings\n          </div>\n          <div class=\"panel-body\" style=\"text-align: center;\" id=\"settingsContent\" [ngStyle]=\"{ display: displayOpened }\">\n\n            <a class=\"btn btn-w-md btn-info\" style=\"width: 60%;\">Update Informations</a> <br><br>\n            <a class=\"btn btn-w-md btn-danger\" style=\"width: 60%;\" (click)=\"removeAccount(user.id)\">Remove Account</a>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<a (click)=\"openUrl()\">\n  <img src=\"assets/images/git.svg\" alt=\"Git\">\n</a>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <div id=\"mobile-menu\" (click)=\"toggleMenu()\">\n        <div class=\"left-nav-toggle\">\n          <a style=\"cursor: pointer;\">\n            <i class=\"stroke-hamburgermenu\"></i>\n          </a>\n        </div>\n      </div>\n      <a class=\"navbar-brand\" style=\"cursor: default;\">\n        SWEAM\n        <span>v 2.0</span>\n      </a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <div class=\"left-nav-toggle\" (click)=\"toggleMenu()\">\n        <a style=\"cursor: pointer;\">\n          <i class=\"stroke-hamburgermenu\"></i>\n        </a>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\" profil-link\">\n          <a (click)=\"showAlert()\">\n            <span class=\"profile-address\" style=\"cursor: pointer;\">Switch Steam</span>\n            <img src=\"assets/images/steam.svg\" class=\"img-circle\" alt=\"\">\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<aside class=\"navigation\" style=\"position: fixed; z-index: 1;transform: translateX(0px);\" id=\"leftMenu\">\n  <nav>\n    <ul class=\"nav luna-nav\">\n\n      <li class=\"active\">\n        <a (click)=\"closeUsers()\">\n          Accounts\n          <span class=\"sub-nav-icon\" id=\"usersArrow\" [ngStyle]=\"{ transform: 'rotate(' + arrowRotate.value + 'deg)' }\"> <i class=\"stroke-arrow\"></i> </span>\n        </a>\n\n\n        <ul id=\"usersContent\" class=\"nav nav-second\" [ngStyle]=\"{ display: displayOpened }\">\n\n          <li *ngFor=\"let user of users; let id = index\" [ngClass]=\"{ active: isActive(id) }\">\n            <a (click)=\"switchToUser(id)\"> {{ user.displayName }} </a>\n          </li>\n        </ul>\n      </li>\n\n      <li style=\"margin-top: 20px;\">\n        <a (click)=\"createAcc()\" id=\"createAccBtn\" style=\"width: 80%; left: 10%; text-align: center;\" class=\"btn btn-w-md btn-success btn-rounded\">Create Account</a>\n      </li>\n\n\n\n      <li class=\"nav-info\">\n        <div class=\"m-t-xs\">\n          Made with <span class=\"c-white\">love</span> by<br>\n          <span class=\"c-white\">Meldiron</span> & <span class=\"c-white\">saintusmarcus</span>.\n          <br/>\n        </div>\n      </li>\n\n    </ul>\n  </nav>\n</aside>\n"

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService() {
        // this.dataFromServer = [
        //   {
        //     displayName: 'Meldiron',
        //     name: 'meldironsk',
        //     password: 'melpass'
        //   },
        //   {
        //     displayName: 'Vysocina',
        //     name: 'vysjakub',
        //     password: 'neviem'
        //   }
        // ];
        //
        // this.loaded = true;
        // this.events.emit('newData');
        var _this = this;
        this.loaded = false;
        this.dataFromServer = null;
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.socket = new __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('http://localhost:3000/');
        this.socket.on('newData', function (data) {
            _this.dataFromServer = data;
            _this.events.emit({ status: 'newData', val: data });
        });
        this.socket.on('setActive', function (data) {
            console.log('new active API');
            _this.events.emit({ status: 'setActive', val: data });
        });
        this.socket.on('disconnect', function () {
            _this.events.emit({ status: 'disconnected' });
        });
    }
    ApiService.prototype.sendOpenUrl = function (url) {
        this.socket.emit('openUrl', url);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = (function () {
    function AlertService() {
        this.swal = __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a;
    }
    AlertService.prototype.alert = function (obj) {
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()(obj);
    };
    AlertService.prototype.alertWithQuestion = function (obj, obj2) {
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()(obj).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()(obj2);
        });
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map