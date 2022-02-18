class TicketFilter extends React.Component {
  render() {
    return(<h1>TicketFilter placeholder</h1>);
  }
}
class TicketTable extends React.Component {
  render() {
    return(<h1>TicketTable placeholder</h1>);
  }
}
class TicketAdd extends React.Component {
  render() {
    return(<h1>TicketAdd placeholder</h1>);
  }
}
class IssueList extends React.Component {
  render() {
    return(
      <React.Fragment>
      <h1>Ticket List</h1>
      <TicketFilter></TicketFilter>
      <TicketTable></TicketTable>
      <TicketAdd></TicketAdd>
      </React.Fragment>);
  }
}
const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));
