import React, { Component } from 'react';
import axios from 'axios';
import DataFromApi from './DataFromApi';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            url: process.env.REACT_APP_SERVER,
            masseg: '',
            showMasseg: false
        }
    };
    // display data from API
    componentDidMount = async () => {
        const apireq = await axios.get(`${this.state.url}/characters`);
        console.log(apireq);
        this.setState({
            apiData: apireq.data
        });

    }
    // add favorit element to db
    addFav = async (ele) => {
        const addreq = await axios.post(`${this.state.url}/favorite`, ele);
        this.setState({
            masseg: addreq.data,
            showMasseg: true

        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.masseg}</h1>
                <DataFromApi apiData={this.state.apiData} addFav={this.addFav} />

            </div>
        )
    }
}

export default Main
