import React from 'react';
class TicketDelete extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          name : "delete",
        }
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.ticketDelete;
        const ticket = {
          name: form.name.value, phoneNumber: form.phoneNumber.value,
        }
        this.props.deleteTicket(ticket);
        form.name.value = ""; form.phoneNumber.value = "";
      }
    
      render() {
        return (
          <form name="ticketDelete" onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="input name" />
            <input type="text" name="phoneNumber" placeholder="input phone number" />
            <button>Delete</button>
          </form>
        );
      }
  }
  export default TicketDelete;