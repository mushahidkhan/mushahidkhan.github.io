import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xaB91Fe7AFc744634f677238Ef1BC9257cA73865E'
);

export default instance;
