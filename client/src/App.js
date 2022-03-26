import React, { Component } from 'react';
import QuoteList from './QuoteList'
import AddQuoteForm from './AddQuoteForm'
import axios from 'axios'
import './App.css';


const QUOTE_SERVICE_URL = 'http://localhost:8080/api/v1/client'

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      quotes: ['1']};
  }
  render() {
    const title = 'Quotes for ya!'
    return (
      <div className='App'>
        <h2 className='App-title'>{title}</h2>
        <p>{this.state.isFetching ? 'Fetching quotes...' : ''}</p>
        <QuoteList quotes={this.state.quotes} />
        <AddQuoteForm quote_service_url={QUOTE_SERVICE_URL}/>
      </div>
    );
  }

  componentDidMount() {
    this.fetchQuotes()
    this.timer = setInterval(() => this.fetchQuotes(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    this.setState({...this.state, isFetching: true})
    axios.get(QUOTE_SERVICE_URL)
      .then(response => {
        this.setState({quotes: response.data, isFetching: false})
      })
      .catch(e => console.log(e));
  }

  fetchQuotesWithFetch = () => {
    this.setState({...this.state, isFetching: true})
    fetch(QUOTE_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({quotes: result, isFetching: false}))
      .catch(e => console.log(e));
  }
}

export default App
