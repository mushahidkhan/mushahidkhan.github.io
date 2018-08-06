const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // check to see if the build paht directory exists and if not recreate interval it

for(let contract in output) {
	//create a json file
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') +'.json'),
		output[contract]
	);
}
