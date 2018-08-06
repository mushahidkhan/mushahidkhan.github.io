'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

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