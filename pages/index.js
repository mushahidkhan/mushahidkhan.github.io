import React, { Component } from 'react';
import factory from '../ethereum/factory'
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout'
import { Link } from '../routes';

class CampaignIndex extends Component {
	//static is used so next can just call this method instead of rendering the entire component
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		return { campaigns };
	}

	//the componentDidMount method does not get executed on the next server
	// async componentDidMount() {
	//
	// 	console.log(campaigns);
	// }
	renderCampaigns() {
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: <Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
				fluid: true,
				style: { overflowWrap: 'break-word'}
			}
		});

		return <Card.Group items={items} />
	}

	render() {
		return (
		<Layout>
				<div>
				<h3>Open Campaigns</h3>
				<Link route="campaigns/new">
					<a>
						<Button
							content="Create Campaign" icon="add circle" primary floated="right"/>
					</a>
				</Link>
				{this.renderCampaigns()}
			</div>
		</Layout>
	);
	}
}

export default CampaignIndex;
