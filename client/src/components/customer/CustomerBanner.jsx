import React from 'react';

// nav bar
const CustomerBanner = (props) => {

  let welcomeMessage;
  let queueMessage;
  welcomeMessage = (props.customer) ? `Welcome back, ${props.customer.name}!` : 'Welcome!';
  queueMessage = (props.customer) ? <p className="restaurant-queued-at">You are currently queued at {props.customer.restaurant.name.toUpperCase()}</p> : null;

  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  const d = new Date();

  const currDate = d.getDate();
  const currMonth = d.getMonth();
  const dateNow = (currDate + ' ' + months[currMonth]);

  return (
    <div className="gradient-banner-container">
      <div className="banner-content">
        <p className="banner-title">{welcomeMessage}</p>
        {queueMessage}
      </div>
      <div className="date-container">
        <p className="date-info">Today is {dateNow}</p>
      </div>
    </div> 
  );
};

export default CustomerBanner;
