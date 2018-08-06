import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
	static async getInitialProps(props) {
		const { address } = props.query;
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestsCount().call();
		const approversCount = await campaign.methods.approversCount().call();
		const requests = await Promise.all(
			Array(parseInt(requestCount)).fill().map((element, index) => {
				return campaign.methods.requests(index).call()
			})
		);
		return { address: props.query.address, requests: requests, requestCount:requestCount, approversCount:approversCount };
	}

	renderRows() {
		console.log(this.props.requestCount);
		return this.props.requests.map((request, index) => {
			return <RequestRow id={index} key={index} request={request} address={this.props.address} approversCount={this.props.approversCount}/>
		});
	}

	render(){
		return (
			<Layout>
				<h3>Request List </h3>
				<Link route={`/campaigns/${this.props.address}/requests/new`}>
					<a>
					<Button primary floated="right" style={{  marginBottom:10 }}>Add Request</Button>
					</a>
				</Link>

				<Table>
				 <Table.Header>
					 <Table.Row>
						 <Table.HeaderCell>ID</Table.HeaderCell>
						 <Table.HeaderCell>Description</Table.HeaderCell>
						 <Table.HeaderCell>Amount (Ether)</Table.HeaderCell>
						 <Table.HeaderCell>Recipient</Table.HeaderCell>
						 <Table.HeaderCell>Approval</Table.HeaderCell>
						 <Table.HeaderCell>Approve</Table.HeaderCell>
						 <Table.HeaderCell>Finalize</Table.HeaderCell>
					 </Table.Row>
				 </Table.Header>
				 <Table.Body>
					 {this.renderRows()}
		 		 </Table.Body>
				</Table>
				<div>Found {this.props.requestCount} request(s).</div>
			</Layout>
		)
	}
}

export default RequestIndex;
