import React from 'react';
class TicketAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          name: "add",
        }
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.ticketAdd;
        const ticket = {
          name: form.name.value, phoneNumber: form.phoneNumber.value,
        }
        this.props.createTicket(ticket);
        form.name.value = ""; form.phoneNumber.value = "";
      }
    
      render() {
        return (
          <div>
          <p>Please enter the traveller information to add:</p>
          <form name="ticketAdd" onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" placeholder="input name" />
            <br></br>
            <br></br>
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" placeholder="input phone number" />
            <button>Add</button>
          </form>
          </div>
        );
      }
  }
  export default TicketAdd;