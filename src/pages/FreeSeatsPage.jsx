import React from 'react'
function drawDots(num) {
    return 
}
class TicketAvail extends React.Component {
    
    render() {
        const ticketNum = this.props.ticketNum;
        return (
            <div>
                <h2>Free Seats</h2>
            <div id="seats">
            {Array.from({ length: ticketNum }, (_, i) => <span class="dot_purple">{i+1}</span>)}
            {Array.from({ length: 25-ticketNum }, (_, i) => <span class="dot_green">{i+ticketNum+1}</span>)}
            </div>
            <p>There are {25-ticketNum} seats avaiable.</p>
            </div>
        )
    }
}
export default TicketAvail;