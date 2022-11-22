!function(n){var e={};function t(c){if(e[c])return e[c].exports;var Q=e[c]={i:c,l:!1,exports:{}};return n[c].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(c,Q,function(e){return n[e]}.bind(null,Q));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return menuIconWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return menuIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return ymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return selection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"j\", function() { return selectionLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"l\", function() { return tempId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"k\", function() { return spoilersWrappers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return scrollUpButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return footerText; });\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar ymap = document.querySelector('#map');\nvar selection = document.querySelector('.selection');\nvar selectionLink = document.querySelectorAll('.selection__link');\nvar tempId = document.getElementById('temp');\nvar spoilersWrappers = document.querySelectorAll('.spoiler__wrapper');\nvar scrollUpButton = document.querySelector('.scroll-up');\nvar footer = document.querySelector('.footer__text');\nvar footerText = 'Quarta. Все права защищены';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwieW1hcCIsInNlbGVjdGlvbiIsInNlbGVjdGlvbkxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGVtcElkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzcG9pbGVyc1dyYXBwZXJzIiwic2Nyb2xsVXBCdXR0b24iLCJmb290ZXIiLCJmb290ZXJUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQixPQUFuQixDQUFiO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCxJQUFJLENBQUNELGFBQUwsQ0FBbUIscUJBQW5CLENBQW5CO0FBQ0EsSUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCO0FBQ0EsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxJQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTU0sU0FBUyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNTyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXRCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHVixRQUFRLENBQUNXLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBLElBQU1DLGdCQUFnQixHQUFHWixRQUFRLENBQUNTLGdCQUFULENBQTBCLG1CQUExQixDQUF6QjtBQUNBLElBQU1JLGNBQWMsR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXZCO0FBQ0EsSUFBTWEsTUFBTSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNBLElBQU1jLFVBQVUsR0FBRyw0QkFBbkIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpO1xyXG5jb25zdCBwYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IG1lbnVJY29uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24td3JhcHBlcicpO1xyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuY29uc3QgeW1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpO1xyXG5jb25zdCBzZWxlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGlvbl9fbGluaycpO1xyXG5jb25zdCB0ZW1wSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xyXG5jb25zdCBzcG9pbGVyc1dyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwb2lsZXJfX3dyYXBwZXInKTtcclxuY29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXVwJyk7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3RleHQnKTtcclxuY29uc3QgZm9vdGVyVGV4dCA9ICdRdWFydGEuINCS0YHQtcKg0L/RgNCw0LLQsMKg0LfQsNGJ0LjRidC10L3Riyc7XHJcblxyXG5cclxuZXhwb3J0IHsgcm9vdCwgcGFnZSwgbmF2aWdhdGlvbiwgbWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgeW1hcCwgc2VsZWN0aW9uLCBzZWxlY3Rpb25MaW5rLCB0ZW1wSWQsIHNwb2lsZXJzV3JhcHBlcnMsIHNjcm9sbFVwQnV0dG9uLCBmb290ZXIsIGZvb3RlclRleHQgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(menuIconWrapper, menuIcon, navigation, page, root) {\n    _classCallCheck(this, Header);\n\n    this.menuIconWrapper = menuIconWrapper;\n    this.menuIcon = menuIcon;\n    this.navigation = navigation;\n    this.page = page;\n    this.root = root;\n  }\n\n  _createClass(Header, [{\n    key: \"_menuOpened\",\n    value: function _menuOpened() {\n      var menuState = this.menuIconWrapper.querySelector('.menu-icon__active');\n\n      if (menuState === this.menuIcon) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.menuIcon.classList.add('menu-icon__active');\n      this.navigation.classList.add('header__navigation_opened');\n      this.page.classList.add('background_black');\n      this.root.classList.add('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Закрыть меню';\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      this.menuIcon.classList.remove('menu-icon__active');\n      this.navigation.classList.remove('header__navigation_opened');\n      this.page.classList.remove('background_black');\n      this.root.classList.remove('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Открыть меню';\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        if (!_this._menuOpened()) {\n          _this._openMenu();\n        } else _this._closeMenu();\n      });\n      this.page.addEventListener('click', function (event) {\n        if (event.target === _this.page && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n      this.page.addEventListener('keydown', function (event) {\n        if (event.keyCode === 27 && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanM/NmMxZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm5hdmlnYXRpb24iLCJwYWdlIiwicm9vdCIsIm1lbnVTdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcmlhTGFiZWwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX21lbnVPcGVuZWQiLCJfb3Blbk1lbnUiLCJfY2xvc2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxlQUFaLEVBQTZCQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osVUFBSUMsU0FBUyxHQUFHLEtBQUtMLGVBQUwsQ0FBcUJNLGFBQXJCLENBQW1DLG9CQUFuQyxDQUFoQjs7QUFDQSxVQUFJRCxTQUFTLEtBQUssS0FBS0osUUFBdkIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtBLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsbUJBQTVCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLFdBQUtMLElBQUwsQ0FBVUksU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCO0FBQ0EsV0FBS0osSUFBTCxDQUFVRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixpQkFBeEI7QUFDQSxXQUFLUixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtSLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CO0FBQ0EsV0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLDJCQUFqQztBQUNBLFdBQUtQLElBQUwsQ0FBVUksU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQSxXQUFLVixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS1QsZUFBTCxDQUFxQlcsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSSxDQUFDLEtBQUksQ0FBQ0MsV0FBTCxFQUFMLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ0MsU0FBTDtBQUNELFNBRkQsTUFFTyxLQUFJLENBQUNDLFVBQUw7QUFDUixPQUpEO0FBTUEsV0FBS1gsSUFBTCxDQUFVUSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDSSxLQUFELEVBQVc7QUFDN0MsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLEtBQUksQ0FBQ2IsSUFBdEIsSUFBOEIsS0FBSSxDQUFDUyxXQUFMLEVBQWxDLEVBQXNEO0FBQ3BELGVBQUksQ0FBQ0UsVUFBTDtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUtYLElBQUwsQ0FBVVEsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsVUFBQ0ksS0FBRCxFQUFXO0FBQy9DLFlBQUlBLEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUFsQixJQUF3QixLQUFJLENBQUNMLFdBQUwsRUFBNUIsRUFBZ0Q7QUFDOUMsZUFBSSxDQUFDRSxVQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbmF2aWdhdGlvbiwgcGFnZSwgcm9vdCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIgPSBtZW51SWNvbldyYXBwZXI7XHJcbiAgICB0aGlzLm1lbnVJY29uID0gbWVudUljb247XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICBfbWVudU9wZW5lZCgpIHtcclxuICAgIGxldCBtZW51U3RhdGUgPSB0aGlzLm1lbnVJY29uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIGlmIChtZW51U3RhdGUgPT09IHRoaXMubWVudUljb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX29wZW5NZW51KCkge1xyXG4gICAgdGhpcy5tZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlTWVudSgpIHtcclxuICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9vcGVuTWVudSgpO1xyXG4gICAgICB9IGVsc2UgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLnBhZ2UgJiYgdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiB0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZU1lbnUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map(ymap, classPrompt) {\n    _classCallCheck(this, Map);\n\n    this.ymap = ymap;\n    this.classPrompt = classPrompt;\n  }\n\n  _createClass(Map, [{\n    key: "setEventListener",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.ymap.addEventListener(\'touchmove\', function (event) {\n        if (_this.ymap.contains(event.target) && event.targetTouches.length < 2) {\n          _this.ymap.classList.add(_this.classPrompt);\n        }\n      }, {\n        passive: true\n      });\n      this.ymap.addEventListener(\'touchend\', function (event) {\n        if (_this.ymap.contains(event.target)) {\n          _this.ymap.classList.remove(_this.classPrompt);\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYXAuanM/MGRjOSJdLCJuYW1lcyI6WyJNYXAiLCJ5bWFwIiwiY2xhc3NQcm9tcHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNzaXZlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxHO0FBQ25CLGVBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS0QsSUFBTCxDQUFVRSxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDakQsWUFBSSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixLQUFxQ0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUF0RSxFQUEwRTtBQUN4RSxlQUFJLENBQUNQLElBQUwsQ0FBVVEsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsS0FBSSxDQUFDUixXQUE3QjtBQUNEO0FBQ0YsT0FKRCxFQUlHO0FBQUVTLGVBQU8sRUFBRTtBQUFYLE9BSkg7QUFNQSxXQUFLVixJQUFMLENBQVVFLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUNDLEtBQUQsRUFBVztBQUNoRCxZQUFJLEtBQUksQ0FBQ0gsSUFBTCxDQUFVSSxRQUFWLENBQW1CRCxLQUFLLENBQUNFLE1BQXpCLENBQUosRUFBc0M7QUFDcEMsZUFBSSxDQUFDTCxJQUFMLENBQVVRLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLEtBQUksQ0FBQ1YsV0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3Rvcih5bWFwLCBjbGFzc1Byb21wdCkge1xyXG4gICAgdGhpcy55bWFwID0geW1hcDtcclxuICAgIHRoaXMuY2xhc3NQcm9tcHQgPSBjbGFzc1Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLnltYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy55bWFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer(footer, text) {\n    _classCallCheck(this, Footer);\n\n    this.footer = footer;\n    this.text = text;\n  }\n\n  _createClass(Footer, [{\n    key: "setContent",\n    value: function setContent() {\n      this.footer.textContent = "1992-".concat(this._getСurrentYear(), " ").concat(this.text);\n    }\n  }, {\n    key: "_get\\u0421urrentYear",\n    value: function _getСurrentYear() {\n      var year = new Date().getFullYear();\n\n      if (year >= 2021) {\n        return year;\n      } else return 2021;\n    }\n  }]);\n\n  return Footer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb290ZXIuanM/ZjkwMiJdLCJuYW1lcyI6WyJGb290ZXIiLCJmb290ZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJfZ2V00KF1cnJlbnRZZWFyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFxQkEsTTtBQUNuQixrQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7V0FFRCxzQkFBYTtBQUNYLFdBQUtELE1BQUwsQ0FBWUUsV0FBWixrQkFBbUMsS0FBS0MsZUFBTCxFQUFuQyxjQUE2RCxLQUFLRixJQUFsRTtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsVUFBSUcsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFYOztBQUNBLFVBQUlGLElBQUksSUFBSSxJQUFaLEVBQW1CO0FBQ2pCLGVBQU9BLElBQVA7QUFDRCxPQUZELE1BR0ssT0FBTyxJQUFQO0FBQ04iLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IoZm9vdGVyLCB0ZXh0KSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IGZvb3RlcjtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KCkge1xyXG4gICAgdGhpcy5mb290ZXIudGV4dENvbnRlbnQgPSAoYDE5OTItJHt0aGlzLl9nZXTQoXVycmVudFllYXIoKX0gJHt0aGlzLnRleHR9YCk7XHJcbiAgfVxyXG5cclxuICBfZ2V00KF1cnJlbnRZZWFyKCkge1xyXG4gICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZiAoeWVhciA+PSAyMDIxICkge1xyXG4gICAgICByZXR1cm4geWVhcjtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIDIwMjE7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_kadry_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);\n/* harmony import */ var _pages_kadry_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_kadry_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);\n\n\n\n\n\nvar header = new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* menuIconWrapper */ "d"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* menuIcon */ "c"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* navigation */ "e"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* page */ "f"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* root */ "g"]);\nvar map = new _components_Map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* ymap */ "m"], \'contacts__map_cover\');\nvar footer = new _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* footer */ "a"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* footerText */ "b"]);\nheader.setEventListener();\nmap.setEventListener();\nfooter.setContent();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMva2FkcnkuanM/M2M0ZCJdLCJuYW1lcyI6WyJoZWFkZXIiLCJIZWFkZXIiLCJjb25zdGFudHMiLCJtYXAiLCJNYXAiLCJmb290ZXIiLCJGb290ZXIiLCJzZXRFdmVudExpc3RlbmVyIiwic2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLHFFQUFKLENBQVdDLCtFQUFYLEVBQXNDQSx3RUFBdEMsRUFBMERBLDBFQUExRCxFQUFnRkEsb0VBQWhGLEVBQWdHQSxvRUFBaEcsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxrRUFBSixDQUFRRixvRUFBUixFQUF3QixxQkFBeEIsQ0FBWjtBQUNBLElBQU1HLE1BQU0sR0FBRyxJQUFJQyxxRUFBSixDQUFXSixzRUFBWCxFQUE2QkEsMEVBQTdCLENBQWY7QUFFQUYsTUFBTSxDQUFDTyxnQkFBUDtBQUNBSixHQUFHLENBQUNJLGdCQUFKO0FBQ0FGLE1BQU0sQ0FBQ0csVUFBUCIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vcGFnZXMva2FkcnkuY3NzJztcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL2pzL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIuanMnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vY29tcG9uZW50cy9NYXAuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXIuanMnO1xyXG5cclxuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihjb25zdGFudHMubWVudUljb25XcmFwcGVyLCBjb25zdGFudHMubWVudUljb24sIGNvbnN0YW50cy5uYXZpZ2F0aW9uLCBjb25zdGFudHMucGFnZSwgY29uc3RhbnRzLnJvb3QpO1xyXG5jb25zdCBtYXAgPSBuZXcgTWFwKGNvbnN0YW50cy55bWFwLCAnY29udGFjdHNfX21hcF9jb3ZlcicpO1xyXG5jb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKGNvbnN0YW50cy5mb290ZXIsIGNvbnN0YW50cy5mb290ZXJUZXh0KTtcclxuXHJcbmhlYWRlci5zZXRFdmVudExpc3RlbmVyKCk7XHJcbm1hcC5zZXRFdmVudExpc3RlbmVyKCk7XHJcbmZvb3Rlci5zZXRDb250ZW50KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n')},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMva2FkcnkuY3NzPzU1ODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n")}]);