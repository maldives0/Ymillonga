webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signup),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeMenuKey),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(ignore),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(leave),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unIgnore),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignup),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeMenuKey),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchIgnore),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLeave),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnIgnore),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked24 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovefollower),
    _marked25 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked26 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked27 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function loadMyInfo() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadMyInfoAPI);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user/".concat(data));
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function login(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function logoutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function logout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logoutAPI);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function signupAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function signup(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signup$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(signupAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

;

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function changeNickname(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
            error: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

;

function changeMenuKeyAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/menuKey', {
    currentKey: data
  });
}

function changeMenuKey(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeMenuKey$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(changeMenuKeyAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_MENUKEY_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_MENUKEY_FAILURE"],
            error: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

;

function ignoreAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/ignore"));
}

function ignore(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function ignore$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(ignoreAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["IGNORE_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 13;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          _context8.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["IGNORE_FAILURE"],
            error: _context8.t0.response.data
          });

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

function leaveAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/leave");
}

function leave(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function leave$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(leaveAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LEAVE_SUCCESS"]
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LEAVE_FAILURE"],
            error: _context9.t0.response.data
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function unIgnoreAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](" /user/".concat(data, "/ignore"));
}

function unIgnore(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unIgnore$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(unIgnoreAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNIGNORE_SUCCESS"]
          });

        case 6:
          _context10.next = 13;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNIGNORE_FAILURE"],
            error: _context10.t0.response.data
          });

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(followAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context11.t0.response.data
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unfollow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context12.sent;
          _context12.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context12.next = 13;
          break;

        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          _context12.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context12.t0.response.data
          });

        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12, null, [[0, 8]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/follower/".concat(data));
}

function removeFollower(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_FAILURE"],
            error: _context13.t0.response.data
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 8]]);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchSignup() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignup$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signup);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchChangeMenuKey() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeMenuKey$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_MENUKEY_REQUEST"], changeMenuKey);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchIgnore() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchIgnore$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["IGNORE_REQUEST"], ignore);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchLeave() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLeave$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LEAVE_REQUEST"], leave);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchUnIgnore() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnIgnore$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNIGNORE_REQUEST"], unIgnore);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

function watchRemovefollower() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovefollower$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], login);

        case 2:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logout);

        case 2:
        case "end":
          return _context26.stop();
      }
    }
  }, _marked26);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSignup), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchChangeMenuKey), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchIgnore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLeave), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnIgnore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovefollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogout)]);

        case 2:
        case "end":
          return _context27.stop();
      }
    }
  }, _marked27);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2FkTXlJbmZvIiwibG9hZFVzZXIiLCJsb2dpbiIsImxvZ291dCIsInNpZ251cCIsImNoYW5nZU5pY2tuYW1lIiwiY2hhbmdlTWVudUtleSIsImlnbm9yZSIsImxlYXZlIiwidW5JZ25vcmUiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsInJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoU2lnbnVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoQ2hhbmdlTWVudUtleSIsIndhdGNoSWdub3JlIiwid2F0Y2hMZWF2ZSIsIndhdGNoVW5JZ25vcmUiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaFJlbW92ZWZvbGxvd2VyIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0IiwidXNlclNhZ2EiLCJsb2FkTXlJbmZvQVBJIiwiYXhpb3MiLCJnZXQiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2FkVXNlckFQSSIsImFjdGlvbiIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJsb2dpbkFQSSIsInBvc3QiLCJkZWxheSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dvdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJzaWdudXBBUEkiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsInBhdGNoIiwibmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiY2hhbmdlTWVudUtleUFQSSIsImN1cnJlbnRLZXkiLCJDSEFOR0VfTUVOVUtFWV9TVUNDRVNTIiwiQ0hBTkdFX01FTlVLRVlfRkFJTFVSRSIsImlnbm9yZUFQSSIsIklHTk9SRV9TVUNDRVNTIiwiSUdOT1JFX0ZBSUxVUkUiLCJsZWF2ZUFQSSIsIkxFQVZFX1NVQ0NFU1MiLCJMRUFWRV9GQUlMVVJFIiwidW5JZ25vcmVBUEkiLCJVTklHTk9SRV9TVUNDRVNTIiwiVU5JR05PUkVfRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9NRU5VS0VZX1JFUVVFU1QiLCJJR05PUkVfUkVRVUVTVCIsIkxFQVZFX1JFUVVFU1QiLCJVTklHTk9SRV9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQStDVUEsVTttR0FvQkFDLFE7bUdBb0JBQyxLO21HQW1CQUMsTTttR0FtQkFDLE07bUdBa0JBQyxjO21HQW1CQUMsYTttR0FtQkFDLE07bUdBbUJBQyxLO29HQWtCQUMsUTtvR0FrQkFDLE07b0dBbUJBQyxRO29HQW1CQUMsYztvR0FnQkFDLGU7b0dBR0FDLGE7b0dBSUFDLFc7b0dBR0FDLG1CO29HQUdBQyxrQjtvR0FHQUMsVztvR0FJQUMsVTtv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QTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MTEzYzJkYmE5N2QzZjI2MjA2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICBDSEFOR0VfTUVOVUtFWV9GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX01FTlVLRVlfUkVRVUVTVCxcclxuICAgIENIQU5HRV9NRU5VS0VZX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIElHTk9SRV9GQUlMVVJFLFxyXG4gICAgSUdOT1JFX1JFUVVFU1QsXHJcbiAgICBJR05PUkVfU1VDQ0VTUyxcclxuICAgIFVOSUdOT1JFX0ZBSUxVUkUsXHJcbiAgICBVTklHTk9SRV9SRVFVRVNULFxyXG4gICAgVU5JR05PUkVfU1VDQ0VTUyxcclxuICAgIExFQVZFX0ZBSUxVUkUsXHJcbiAgICBMRUFWRV9SRVFVRVNULFxyXG4gICAgTEVBVkVfU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbG9nb3V0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gY2hhbmdlTWVudUtleUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL21lbnVLZXknLCB7IGN1cnJlbnRLZXk6IGRhdGEgfSk7XHJcbn1cclxuZnVuY3Rpb24qIGNoYW5nZU1lbnVLZXkoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTWVudUtleUFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTUVOVUtFWV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTUVOVUtFWV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGlnbm9yZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vaWdub3JlYCk7XHJcbn1cclxuZnVuY3Rpb24qIGlnbm9yZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChpZ25vcmVBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogSUdOT1JFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IElHTk9SRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbGVhdmVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvbGVhdmVgKTtcclxufVxyXG5mdW5jdGlvbiogbGVhdmUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGVhdmVBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTEVBVkVfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMRUFWRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdW5JZ25vcmVBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAgL3VzZXIvJHtkYXRhfS9pZ25vcmVgKTtcclxufVxyXG5mdW5jdGlvbiogdW5JZ25vcmUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5JZ25vcmVBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5JR05PUkVfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTklHTk9SRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU1lbnVLZXkoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9NRU5VS0VZX1JFUVVFU1QsIGNoYW5nZU1lbnVLZXkpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaElnbm9yZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoSUdOT1JFX1JFUVVFU1QsIGlnbm9yZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExlYXZlKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMRUFWRV9SRVFVRVNULCBsZWF2ZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5JZ25vcmUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOSUdOT1JFX1JFUVVFU1QsIHVuSWdub3JlKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZWZvbGxvd2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWdudXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU1lbnVLZXkpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hJZ25vcmUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMZWF2ZSksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuSWdub3JlKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVmb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nb3V0KSxcclxuICAgIF0pO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=