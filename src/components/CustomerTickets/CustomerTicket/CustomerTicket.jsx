import React from 'react';
import calender from '../../../assets/calender.png';

const CustomerTicket = ({ customerTicketsData, handleTaskInProgress }) => {
 const {
  title,
  description,
  customer,
  priority,
  status,
  id,
  createdAt,
 } = customerTicketsData;
 
 return (
  <>
   <div className="card bg-base-100 shadow-xl" onClick={() => handleTaskInProgress(customerTicketsData)}>
    <div className="p-5">
     <div className="flex justify-between items-center mt-2 mb-5">
      <h4 className="font-bold">{title}</h4>
      <div
       className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
       style={{
        backgroundColor: status?.background,
       }}
      >
       <div
        className="w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: status?.color }}
       ></div>
       <span>{status?.type}</span>
      </div>
     </div>
     <p className="text-gray-500 pb-5">{description}</p>
     <div className="flex justify-between mt-5 text-sm">
      <div className="flex items-center gap-3">
       <p>{id}</p>
       <p className="font-medium" style={{ color: priority?.color }}>
        {priority?.level}
       </p>
      </div>
      <div className="flex items-center gap-3 text-gray-500">
       <p>{customer}</p>
       <p className="flex items-center gap-1">
        <img src={calender} alt="Calendar icon" className="w-4 h-4" />
        <span>{createdAt}</span>
       </p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default CustomerTicket;