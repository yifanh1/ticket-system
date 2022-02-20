import TicketTable from './pages/DisplayPage'
import TicketAdd from './pages/AddPage'
import TicketDelete from './pages/DeletePage'
import React from 'react';
const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}
class Container extends React.Component {
    constructor() {
        super();
        this.state = { tickets: [] };
        this.createTicket = this.createTicket.bind(this);
        this.deleteTicket = this.deleteTicket.bind(this);
      }
    
      componentDidMount() {
        this.loadData();
      }

      async loadData() {
        const query = `query {
          ticketList {
            id name phoneNumber created
          }
        }`;
    
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ query })
        });
        const body = await response.text();
        const result = JSON.parse(body, jsonDateReviver);
        this.setState({ tickets: result.data.ticketList });
      }
    
      async createTicket(ticket) {
        const query = `mutation ticketAdd {
          ticketAdd(ticket: {
            name: "${ticket.name}",
            phoneNumber: "${ticket.phoneNumber}"
          }) {
            id
          }
        }`
        // console.log(query)
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ query, variables: { ticket } })
        });
        this.loadData();
      }

      async deleteTicket(ticket) {
        const query = `mutation {
          ticketDelete(ticket: {
           name: "${ticket.name}",
           phoneNumber: "${ticket.phoneNumber}",
         })
         }`
        console.log(query);
        // console.log(query)
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ query, variables: { ticket } })
        });
        this.loadData();
      }
    
    
    render() {
      return(
        <React.Fragment>
        <h1>This is the Container</h1>
        <TicketTable tickets={this.state.tickets}></TicketTable>
        <TicketAdd createTicket={this.createTicket}></TicketAdd>
        <TicketDelete deleteTicket={this.deleteTicket}></TicketDelete>
        </React.Fragment>);
    }
  }
  export default Container;