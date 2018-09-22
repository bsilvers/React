import React from 'react';

const PortfolioDetails = (props) => (

    <div>
    <h1>A Thing I've done Page</h1>
    <p>This is the page for the item with the id of {props.match.params.id}.</p>
    </div>

);
  
export default PortfolioDetails;