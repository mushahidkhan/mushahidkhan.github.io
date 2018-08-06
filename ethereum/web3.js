import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser and metamast is running
	web3 = new Web3(window.web3.currentProvider);
} else {
// we are on the server or user does not have metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/o4RYptAjJ3t1NBIbA34s'
	);
	web3 = new Web3(provider);
}

export default web3;
