'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser and metamast is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// we are on the server or user does not have metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/o4RYptAjJ3t1NBIbA34s');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBM0QsYUFBd0UsQUFDdkU7QUFDQTtRQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7QUFIRCxPQUdPLEFBQ1A7QUFDQztLQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNoQixBQURnQixBQUFqQixBQUdBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXVzaGFoaWQvRG9jdW1lbnRzL2tpY2tzdGFydCJ9