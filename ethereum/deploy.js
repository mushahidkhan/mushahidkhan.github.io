const HDWalletprovider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//hdwallet provider lets us conenct to rinkeby and have access to our accounts
const provider = new HDWalletprovider('later bone minor defense buddy aerobic lamp admit fine ancient ability exact','https://rinkeby.infura.io/o4RYptAjJ3t1NBIbA34s');
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data: '0x' + compiledFactory.bytecode})
	.send({ from: accounts[0], gas: '1000000'});

	console.log('Contract deployed to ', result.options.address);
}

deploy();
