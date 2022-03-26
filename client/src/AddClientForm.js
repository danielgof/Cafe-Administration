import React, {Component} from 'react'
import axios from 'axios'
import './AddClientForm.css'

class AddClientForm extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {client: ''}
  }

  handleChange = event => this.setState({...this.state, client: event.target.value})

  handleSubmit = event => {
    axios.post(this.props.client_service_url, {'client': this.state.client})
      .then(r => console.log(r))
      .catch(e => console.log(e));

    event.preventDefault();
  }

  handleSubmitWithFetch = event => {
    let data = new FormData()
    data.append('client', this.state.client)
    fetch(this.props.client_service_url, {method: 'POST', body: data})
      .then(response => response.json())
      .catch(e => console.log(e));

    event.preventDefault();
  }


  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="AddClient-text" type="text" value={this.state.client} onChange={this.handleChange} />
        <input className="AddClient-button"type="submit" value="Add Client" />
      </form>
    )
  }
}

export default AddClientForm
