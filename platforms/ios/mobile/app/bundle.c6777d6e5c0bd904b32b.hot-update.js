webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ProductDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Bedroom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Bedroom.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedProduct", "$delegate"],
  methods: {
    onButtonTap(id) {
      return _asyncToGenerator(function* () {
        console.log(id);
        var result = yield confirm({
          title: "Are you sure?",
          message: "to move in this appartment?",
          okButtonText: "Yes ",
          cancelButtonText: "No "
        });

        if (result) {
          var response = yield fetch(global.rootURL + "/user/2/renting/add/" + id, {
            method: "POST",
            credentials: "same-origin"
          });
          console.log(response);

          if (response.ok) {
            var data = yield response.json();
            alert(data.message);
            window.location = data.url;
            location.reload(true);
          } else {
            alert(response.status + ": " + response.statusText);
          }
        } else {
          alert("cancelled");
        }
      })();
    }

  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var home = yield fetch(global.rootURL + "/rent/jhome", {
        method: "GET",
        credentials: "same-origin"
      });
      _this.homes = yield home.json();
      var estate = yield fetch(global.rootURL + "/rent/json", {
        method: "GET",
        credentials: "same-origin"
      });
      _this.estates = yield estate.json();
    })();
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ProductDetail.vue?vue&type=template&id=a9735e56&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "form",
              attrs: { orientation: "vertical", margin: "10" }
            },
            [
              _c("Image", {
                attrs: {
                  src: _vm.selectedProduct.url,
                  height: "300",
                  stretch: "aspectFill"
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: { text: _vm.selectedProduct.title, margin: "10" }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: {
                  text: "Estate: " + _vm.selectedProduct.estate,
                  margin: "3"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: {
                  text: "Bedroom: " + _vm.selectedProduct.bedroom,
                  margin: "3"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: {
                  text: "Rent: $" + _vm.selectedProduct.rent,
                  margin: "3"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: {
                  text: "Tenant: " + _vm.selectedProduct.tenant,
                  margin: "3"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: {
                  text: "Area: " + _vm.selectedProduct.area,
                  margin: "3"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: "Address:", margin: "3" }
              }),
              _c("WebView", {
                attrs: {
                  src: _vm.selectedProduct.map,
                  height: "300",
                  stretch: "aspectFill"
                }
              }),
              _c("Button", {
                staticClass: "btn btn-primary btn-rounded-lg",
                attrs: { text: "Move-in" },
                on: {
                  tap: function($event) {
                    return _vm.onButtonTap(_vm.selectedProduct.id)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwudnVlPzU1ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGdEQUZBO0FBR0EsOEJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0EscUNBQ0EsMENBQ0EsRUFGQSxFQUVBO0FBQ0EsMEJBREE7QUFFQTtBQUZBLFdBRkE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FMQSxNQUtBO0FBQ0Esb0RBQ0EsVUFEQTtBQUVBO0FBQ0EsU0FsQkEsTUFrQkE7QUFDQTtBQUNBO0FBNUJBO0FBNkJBOztBQTlCQSxHQUZBOztBQWtDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBSUE7QUFWQTtBQVdBOztBQTdDQSxHOzs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDBCQUEwQixFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5jNjc3N2Q2ZTVjMGJkOTA0YjMyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIG1hcmdpbj1cIjEwXCIgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJzZWxlY3RlZFByb2R1Y3QudXJsXCIgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNlbGVjdGVkUHJvZHVjdC50aXRsZVwiIG1hcmdpbj1cIjEwXCIgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0VzdGF0ZTogJyArIHNlbGVjdGVkUHJvZHVjdC5lc3RhdGVcIiBjbGFzcz1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0JlZHJvb206ICcgKyBzZWxlY3RlZFByb2R1Y3QuYmVkcm9vbVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDNcIiBtYXJnaW49XCIzXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInUmVudDogJCcgKyBzZWxlY3RlZFByb2R1Y3QucmVudFwiIGNsYXNzPVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCIzXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInVGVuYW50OiAnICsgc2VsZWN0ZWRQcm9kdWN0LnRlbmFudFwiIGNsYXNzPVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCIzXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInQXJlYTogJyArIHNlbGVjdGVkUHJvZHVjdC5hcmVhXCIgY2xhc3M9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIjNcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidBZGRyZXNzOidcIiBjbGFzcz1cImgzXCIgbWFyZ2luPVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgPFdlYlZpZXcgOnNyYz1cInNlbGVjdGVkUHJvZHVjdC5tYXBcIiBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTW92ZS1pblwiIEB0YXA9XCJvbkJ1dHRvblRhcChzZWxlY3RlZFByb2R1Y3QuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIiAvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEJlZHJvb20gZnJvbSBcIi4vQmVkcm9vbVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcInNlbGVjdGVkUHJvZHVjdFwiLCBcIiRkZWxlZ2F0ZVwiXSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXN5bmMgb25CdXR0b25UYXAoaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwidG8gbW92ZSBpbiB0aGlzIGFwcGFydG1lbnQ/XCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXMgXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8gXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnJvb3RVUkwgKyBcIi91c2VyLzIvcmVudGluZy9hZGQvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzICsgXCI6IFwiICsgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcImNhbmNlbGxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB2YXIgaG9tZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvcmVudC9qaG9tZVwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ob21lcyA9IGF3YWl0IGhvbWUuanNvbigpO1xuICAgICAgICAgICAgdmFyIGVzdGF0ZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvcmVudC9qc29uXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVzdGF0ZXMgPSBhd2FpdCBlc3RhdGUuanNvbigpO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNlbGVjdGVkUHJvZHVjdC51cmwsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkUHJvZHVjdC50aXRsZSwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJFc3RhdGU6IFwiICsgX3ZtLnNlbGVjdGVkUHJvZHVjdC5lc3RhdGUsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJCZWRyb29tOiBcIiArIF92bS5zZWxlY3RlZFByb2R1Y3QuYmVkcm9vbSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlbnQ6ICRcIiArIF92bS5zZWxlY3RlZFByb2R1Y3QucmVudCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlRlbmFudDogXCIgKyBfdm0uc2VsZWN0ZWRQcm9kdWN0LnRlbmFudCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZWE6IFwiICsgX3ZtLnNlbGVjdGVkUHJvZHVjdC5hcmVhLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGRyZXNzOlwiLCBtYXJnaW46IFwiM1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiV2ViVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNlbGVjdGVkUHJvZHVjdC5tYXAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk1vdmUtaW5cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQnV0dG9uVGFwKF92bS5zZWxlY3RlZFByb2R1Y3QuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=