import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),

  //the address the contract was deployed to
  process.env.FACTORY_CONTRACT_ADDRESS
);

export default instance;
