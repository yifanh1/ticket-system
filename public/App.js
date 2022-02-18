class TicketFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "TicketFilter placeholder");
  }

}

class TicketTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "TicketTable placeholder");
  }

}

class TicketAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "TicketAdd placeholder");
  }

}

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Ticket List"), /*#__PURE__*/React.createElement(TicketFilter, null), /*#__PURE__*/React.createElement(TicketTable, null), /*#__PURE__*/React.createElement(TicketAdd, null));
  }

}

const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));