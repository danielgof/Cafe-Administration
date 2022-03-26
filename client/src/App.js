import React, { Component } from 'react';
import ClientList from './ClientList'
import AddClientForm from './AddClientForm'
import axios from 'axios'
import './App.css';


const CLIENT_SERVICE_URL = 'http://localhost:8080/api/v1/client'

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      Client: ['1']};
  }
  render() {
    const title = 'Add clients'
    return (
      <div className='App'>
        <h2 className='App-title'>{title}</h2>
        <p>{this.state.isFetching ? 'Add new clients' : ''}</p>
        <ClientList clients={this.state.clients} />
        <AddClientForm quote_service_url={CLIENT_SERVICE_URL}/>
      </div>
    );
  }

  componentDidMount() {
    this.fetchClients();
    this.timer = setInterval(() => this.fetchClients(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchClients = () => {
    this.setState({...this.state, isFetching: true})
    axios.get(CLIENT_SERVICE_URL)
      .then(response => {
        this.setState({clients: response.data, isFetching: false})
      })
      .catch(e => console.log(e));
  }

  fetchClientsWithFetch = () => {
    this.setState({...this.state, isFetching: true})
    fetch(CLIENT_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({clients: result, isFetching: false}))
      .catch(e => console.log(e));
  }
}

export default App
