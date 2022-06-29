import React from 'react'
import axios from 'axios'
export default class Shop extends React.Component {
    state = {
        products: [],
        loaded: false
    }
    async componentDidMount() {
        // when using axios, the JSON files must be in public folder
        let response = await axios.get('/products.json')
        this.setState({
            products: response.data,
            loaded: true
        })
    }

    renderProducts() {
        if (this.state.products) {
            return <ul>
                {this.state.products.map(p => <li key={p._id}>{p.name} - ${p.cost / 100}</li>)}
            </ul>
        } else {
            return <p>Please wait loading...</p>
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Our Shop</h1>
                {
                    this.state.loaded ?
                        <ul>
                            {this.state.products.map(p => <li key={p._id}>{p.name} - ${p.cost / 100}</li>)}
                        </ul>
                        :
                        <p>Loading please wait</p>

                }
            </React.Fragment>

        )
    }
}