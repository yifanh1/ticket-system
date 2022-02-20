import React from 'react';


class NavBar extends React.Component {
      render() {
        return (
          // should return nav bar
          <nav>
            <ul class="nav-list">
                <li><button onclick="backHome()">Home</button></li>
                <li><button onclick="bookTickets()">Book Tickets</button></li>
                <li><button onclick="cancelBookings()">Cancel Bookings</button></li>
                <li><button onclick="searchReservation()">Display Bookings</button></li>
            </ul>
        </nav>
        );
      }
  }
  export default TicketDelete;