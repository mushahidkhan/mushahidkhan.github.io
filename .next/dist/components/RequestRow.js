'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mushahid/Documents/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprover = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							_context.next = 6;
							return campaign.methods.approveRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;
							_context2.next = 6;
							return campaign.methods.finalizeRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;
			return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, request.approvalCount, '/', approversCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', onClick: this.onApprover, __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Approve')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'teal', onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZXIiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFFTCxzRkFBYSxtQkFBQTtpQkFBQTtpRUFBQTtjQUFBO3NDQUFBO1dBQ047QUFETSxrQkFDSyx3QkFBUyxNQUFBLEFBQUssTUFEbkIsQUFDSyxBQUFvQjt1QkFEekI7Y0FFVyxjQUFBLEFBQUssSUFGaEIsQUFFVyxBQUFTOztXQUExQjtBQUZNLDJCQUFBO3VCQUFBO3VCQUdOLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztjQUM5QyxTQUpLLEFBR04sQUFBb0QsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxRQURLOztXQUhNO1dBQUE7dUJBQUE7O0FBQUE7ZUFBQTtBLGEsQUFRYixzRkFBYSxvQkFBQTtpQkFBQTttRUFBQTtjQUFBO3dDQUFBO1dBQ047QUFETSxrQkFDSyx3QkFBUyxNQUFBLEFBQUssTUFEbkIsQUFDSyxBQUFvQjt3QkFEekI7Y0FFVyxjQUFBLEFBQUssSUFGaEIsQUFFVyxBQUFTOztXQUExQjtBQUZNLDRCQUFBO3dCQUFBO3VCQUdOLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO2NBQy9DLFNBSkssQUFHTixBQUFxRCxBQUNwRCxBQUFTO0FBRDJDLEFBQzFELFFBREs7O1dBSE07V0FBQTt3QkFBQTs7QUFBQTtnQkFBQTtBOzs7OzsyQkFPSjtnQkFDZ0MsS0FEaEMsQUFDcUM7T0FEckMsQUFDQSxZQURBLEFBQ0E7T0FEQSxBQUNJLGlCQURKLEFBQ0k7T0FESixBQUNhLHdCQURiLEFBQ2EsQUFDckI7O09BQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBQy9EOzBCQUNFLGNBQUQsdUJBQUEsQUFBTyxPQUFJLFVBQVUsUUFBckIsQUFBNkIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQXJFLEFBQTZFO2VBQTdFO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQSxBQUNFO0FBREY7QUFBQSxNQURELEFBQ0MsQUFHQSxxQkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRTtBQURGO0FBQUEsY0FKRCxBQUlDLEFBQ1UsQUFFViw4QkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRTtBQURGO0FBQUEsb0JBQ0UsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQVI5QixBQU9DLEFBQ0UsQUFBa0MsQUFFcEMsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBVkQsQUFVQyxBQUNVLEFBRVYsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQUEsQUFDVSxlQUFnQixLQWQzQixBQWFDLEFBR0EsaUNBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQ0UsQUFBUSxXQUFSLEFBQW1CLHVCQUFNLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0IsU0FBUSxTQUFTLEtBQXJDLEFBQTBDO2VBQTFDO2lCQUFBO0FBQUE7SUFBQSxFQWpCNUIsQUFnQkMsQUFDMkIsQUFFM0IsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQ0UsQUFBUSxXQUFSLEFBQW1CLHVCQUFPLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0IsUUFBTyxTQUFTLEtBQXBDLEFBQXlDO2VBQXpDO2lCQUFBO0FBQUE7SUFBQSxFQXJCOUIsQUFDQyxBQW1CQyxBQUM0QixBQUk5Qjs7Ozs7QUE3Q3VCLEEsQUFnRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL211c2hhaGlkL0RvY3VtZW50cy9raWNrc3RhcnQifQ==