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
          <div>
            <p>Please enter the traveller information to cancel:</p>
          <form name="ticketDelete" onSubmit={this.handleSubmit}>
          <label>Name: </label>
            <input type="text" name="name" placeholder="input name" />
            <br></br>
            <br></br>
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" placeholder="input phone number" />
            <button>Delete</button>
          </form>
          </div>
        );
      }
  }
  export default TicketDelete;