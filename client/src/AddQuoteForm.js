import React, {Component} from 'react'
import axios from 'axios'
import './AddQuoteForm.css'

class AddQuoteForm extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {quote: ''}
  }

  handleChange = event => this.setState({...this.state, quote: event.target.value})

  handleSubmit = event => {
    axios.post(this.props.quote_service_url, {'quote': this.state.quote})
      .then(r => console.log(r))
      .catch(e => console.log(e));

    event.preventDefault();
  }

  handleSubmitWithFetch = event => {
    let data = new FormData()
    data.append('quote', this.state.quote)
    fetch(this.props.quote_service_url, {method: 'POST', body: data})
      .then(response => response.json())
      .catch(e => console.log(e));

    event.preventDefault();
  }


  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="AddQuote-text" type="text" value={this.state.quote} onChange={this.handleChange} />
        <input className="AddQuote-button"type="submit" value="Add Quote" />
      </form>
    )
  }
}

export default AddQuoteForm
