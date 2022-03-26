import React from 'react';

const clientinfo = ({clients}) =>
  clients.map(client => <li key={client}>{client}</li>);
 
 
export default QuoteList