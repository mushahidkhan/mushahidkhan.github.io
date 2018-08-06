webpackHotUpdate(8,{

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(734);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(450);

var _routes = __webpack_require__(674);

var _campaign = __webpack_require__(1023);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1182);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mushahid/Documents/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRows',
		value: function renderRows() {
			var _this2 = this;

			console.log(this.props.requestCount);
			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, { id: index, key: index, request: request, address: _this2.props.address, approversCount: _this2.props.approversCount, __source: {
						fileName: _jsxFileName,
						lineNumber: 25
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, 'Request List '), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Amount (Ether)'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Approval'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Approve'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Finalize'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, this.renderRows())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Found ', this.props.requestCount, ' request(s).'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: props.query.address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInJlcXVlc3RDb3VudCIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7OzsrQkFjUTtnQkFDWjs7V0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2VBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNsRDsyQkFBTyxBQUFDLHNDQUFXLElBQVosQUFBZ0IsT0FBTyxLQUF2QixBQUE0QixPQUFPLFNBQW5DLEFBQTRDLFNBQVMsU0FBUyxPQUFBLEFBQUssTUFBbkUsQUFBeUUsU0FBUyxnQkFBZ0IsT0FBQSxBQUFLLE1BQXZHLEFBQTZHO2dCQUE3RztrQkFBUCxBQUFPLEFBQ1A7QUFETztLQUFBO0FBRFIsQUFBTyxBQUdQLElBSE87Ozs7MkJBS0EsQUFDUDswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esa0NBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFHLGNBQTFDLEFBQXVDLEFBQWdCO2VBQXZEO2lCQUFBO0FBQUE7TUFKRixBQUVDLEFBQ0MsQUFDQSxBQUlELGtDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBO0FBQUE7QUFBQSxNQUhELEFBR0MsQUFDQSxtQ0FBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUE7QUFBQTtBQUFBLE1BSkQsQUFJQyxBQUNBLDhCQUFDLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQTtBQUFBO0FBQUEsTUFMRCxBQUtDLEFBQ0EsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSw0QkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUE7QUFBQTtBQUFBLE1BVEgsQUFDQyxBQUNDLEFBT0MsQUFHRiwrQkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FwQkYsQUFRQyxBQVlDLEFBQ0UsQUFBSyxBQUdSLGdDQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBekJ6QixBQUNDLEFBd0JDLEFBR0Y7Ozs7O3dHQWpENEIsQTs7Ozs7WUFDcEI7QSxrQkFBWSxNQUFNLEEsTUFBbEIsQSxBQUNGO0EsbUJBQVcsd0JBQUEsQUFBUyxBOztlQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBLEFBQW9DOztZQUF6RDtBOztlQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7WUFBekQ7QTs7aUNBQ2lCLEFBQVEsVUFDeEIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM1RDtnQkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3hDO0FBSHFCLEFBQ3RCLEEsU0FBQSxDQURzQjs7WUFBakI7QTt5Q0FLQyxFQUFFLFNBQVMsTUFBQSxBQUFNLE1BQWpCLEFBQXVCLFNBQVMsVUFBaEMsQUFBMEMsVUFBVSxjQUFwRCxBQUFpRSxjQUFjLGdCLEFBQS9FLEFBQThGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWDVFLEEsQUFxRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tdXNoYWhpZC9Eb2N1bWVudHMva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mushahid/Documents/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mushahid/Documents/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC45NjQ1M2E4OWUzNzlhODhiYjNkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2NlMzAyZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5cbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG5cdFx0Y29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuXHRcdGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcblx0XHRjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdFx0QXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdHJldHVybiB7IGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsIHJlcXVlc3RzOiByZXF1ZXN0cywgcmVxdWVzdENvdW50OnJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQ6YXBwcm92ZXJzQ291bnQgfTtcblx0fVxuXG5cdHJlbmRlclJvd3MoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5yZXF1ZXN0Q291bnQpO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiA8UmVxdWVzdFJvdyBpZD17aW5kZXh9IGtleT17aW5kZXh9IHJlcXVlc3Q9e3JlcXVlc3R9IGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gYXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9Lz5cblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+UmVxdWVzdCBMaXN0IDwvaDM+XG5cdFx0XHRcdDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG5cdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7ICBtYXJnaW5Cb3R0b206MTAgfX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHQ8VGFibGU+XG5cdFx0XHRcdCA8VGFibGUuSGVhZGVyPlxuXHRcdFx0XHRcdCA8VGFibGUuUm93PlxuXHRcdFx0XHRcdFx0IDxUYWJsZS5IZWFkZXJDZWxsPklEPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0IDxUYWJsZS5IZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0IDxUYWJsZS5IZWFkZXJDZWxsPkFtb3VudCAoRXRoZXIpPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0IDxUYWJsZS5IZWFkZXJDZWxsPlJlY2lwaWVudDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdCA8VGFibGUuSGVhZGVyQ2VsbD5BcHByb3ZhbDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdCA8VGFibGUuSGVhZGVyQ2VsbD5BcHByb3ZlPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0IDxUYWJsZS5IZWFkZXJDZWxsPkZpbmFsaXplPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdCA8L1RhYmxlLlJvdz5cblx0XHRcdFx0IDwvVGFibGUuSGVhZGVyPlxuXHRcdFx0XHQgPFRhYmxlLkJvZHk+XG5cdFx0XHRcdFx0IHt0aGlzLnJlbmRlclJvd3MoKX1cblx0XHQgXHRcdCA8L1RhYmxlLkJvZHk+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0KHMpLjwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUE3Q0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=