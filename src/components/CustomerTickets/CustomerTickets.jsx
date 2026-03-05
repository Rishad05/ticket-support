import React, { use } from 'react';
import CustomerTicket from './CustomerTicket/CustomerTicket';

const CustomerTickets = ({ customerTicketsPromise }) => {

 const customerTicketsData = use(customerTicketsPromise);

 return (
  <>
   <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {
     customerTicketsData.map((ticket) => (
      <CustomerTicket key={ticket.id} customerTicketsData={ticket} />
     ))
    }
   </div>
  </>
 );
};

export default CustomerTickets;