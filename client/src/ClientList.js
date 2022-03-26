import React from 'react'

const ClientList = ({clients}) =>
  clients.map(client => <li key={client}>{client}</li>)


export default ClientList
