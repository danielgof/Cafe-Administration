import React, { Component } from 'react'

export default class C2component2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/clients")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.clients
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });

            }
        )
    }

    render() {
        const {error, isLoaded, items } = this.state;
        if (error) {
            return <p> Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return ( 
                <ul>
                    {items.map(item => (
                        <li key={item.Danzel}>
                            {item.Danzel}
                        </li>
                    ))};
                </ul>
            )
        }
    }
}
