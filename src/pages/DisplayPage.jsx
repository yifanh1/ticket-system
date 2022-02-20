import React from 'react';
  function TicketRow(props){
    const ticket = props.ticket;
      //console.log("yifan props: ", this.props.ticket)
      return (
        <tr>
          <td>{ticket.id}</td>
          <td>{ticket.name}</td>
          <td>{ticket.phoneNumber}</td>
          <td>{ticket.created.toISOString()}</td>
        </tr>
      );
  }
  class TicketTable extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
      render(){
        const ticketRows = this.props.tickets.map(ticket =>
          <TicketRow key={ticket.id} ticket={ticket} />
        );
      return (
        <div>
          <h2>Current Traveller List</h2>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {ticketRows}
          </tbody>
        </table>
        </div>
      );}
    }


  export default TicketTable;