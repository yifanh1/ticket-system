"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TicketRow(props) {
  var ticket = props.ticket; //console.log("yifan props: ", this.props.ticket)

  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, ticket.id), /*#__PURE__*/_react.default.createElement("td", null, ticket.name), /*#__PURE__*/_react.default.createElement("td", null, ticket.phoneNumber), /*#__PURE__*/_react.default.createElement("td", null, ticket.created.toISOString()));
}

function TicketTable(props) {
  var ticketRows = props.tickets.map(function (ticket) {
    return /*#__PURE__*/_react.default.createElement(TicketRow, {
      key: ticket.id,
      ticket: ticket
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "ID"), /*#__PURE__*/_react.default.createElement("th", null, "Name"), /*#__PURE__*/_react.default.createElement("th", null, "PhoneNumber"), /*#__PURE__*/_react.default.createElement("th", null, "Created"))), /*#__PURE__*/_react.default.createElement("tbody", null, ticketRows));
}

var _default = TicketTable;
exports.default = _default;