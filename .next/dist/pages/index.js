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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mushahid/Documents/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaigns',

		//the componentDidMount method does not get executed on the next server
		// async componentDidMount() {
		//
		// 	console.log(campaigns);
		// }
		value: function renderCampaigns() {
			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 23
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 23
						}
					}, 'View Campaign')),
					fluid: true,
					style: { overflowWrap: 'break-word' }
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: 'campaigns/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				content: 'Create Campaign', icon: 'add circle', primary: true, floated: 'right', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}))), this.renderCampaigns()));
		}
	}], [{
		key: 'getInitialProps',

		//static is used so next can just call this method instead of rendering the entire component
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7O09BT0w7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O29DQUNrQixBQUNqQjtPQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2pEOzthQUFPLEFBQ0UsQUFDUjtrQ0FBYSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO2lCQUEzQjttQkFBQSxBQUFzQztBQUF0QztNQUFBLGtCQUFzQyxjQUFBOztpQkFBQTttQkFBQTtBQUFBO0FBQUEsUUFGN0MsQUFFTyxBQUFzQyxBQUNuRDtZQUhNLEFBR0MsQUFDUDtZQUFPLEVBQUUsY0FKVixBQUFPLEFBSUMsQUFBZ0IsQUFFeEI7QUFOTyxBQUNOO0FBRkYsQUFBYyxBQVNkLElBVGM7O3dDQVNQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDRTtBQURGO0FBQUEsSUFBQSxrQkFDRSxjQUFBOztlQUFBO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREEsQUFDQSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQzthQUFELEFBQ1MsbUJBQWtCLE1BRDNCLEFBQ2dDLGNBQWEsU0FEN0MsTUFDcUQsU0FEckQsQUFDNkQ7ZUFEN0Q7aUJBSkYsQUFFQSxBQUNDLEFBQ0MsQUFJRDtBQUpDO0FBQ0MsY0FQTCxBQUNBLEFBQ0UsQUFRQyxBQUFLLEFBSVI7OztPQXZDRDs7Ozs7Ozs7Ozs7ZUFFeUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztZQUF6RDtBO3lDQUNDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSm1CLEEsQUEyQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tdXNoYWhpZC9Eb2N1bWVudHMva2lja3N0YXJ0In0=