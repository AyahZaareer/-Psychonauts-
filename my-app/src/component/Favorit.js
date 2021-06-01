import React, { Component } from 'react';
import axios from 'axios';
import CurdData from './CurdData';
import UpdateForm from './UpdateForm';

export class Favorit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curdData: [],
            url: process.env.REACT_APP_SERVER,
            masseg: '',
            showMasseg: false,
            name: '',
            gender: '',
            showForm: false,
            slugName: ''
        }
    };

    updateName = (e) => { this.setState({ name: e.target.value }) }
    updateGender = (e) => { this.setState({ gender: e.target.value }) }

    updaeState = (slug, name, gender) => {
        this.setState({
            name: name,
            gender: gender,
            slugName: slug,
            showForm: true
        })
    }

    updateFav = async (e) => {
        const updatereq = await axios.get(`${this.state.url}/favorite/:${this.stateslug}`, { name: this.state.name, gender: this.state.gender });
        this.setState({
            curdData: updatereq.data
        })
    }
    //desplay data from DB in favorit page
    componentDidMount = async () => {
        const getreq = await axios.get(`${this.state.url}/favorite`);
        console.log(getreq);
        this.setState({
            curdData: getreq.data
        });

    }

    deleteFav = async (slug) => {
        const delereq = await axios.get(`${this.state.url}/favorite/:${slug}`);
        this.setState({
            curdData: delereq.data
        });
    }
    render() {
        return (
            <div>
                {this.state.showForm &&
                    <UpdateForm updateFav={this.updateFav} updateName={this.updateName} name={this.state.name} updateGender={this.updateGender} gender={this.state.gender} />
                }
                <CurdData curdData={this.state.curdData} deleteFav={this.deleteFav} updaeState={this.updaeState} />


            </div>
        )
    }
}

export default Favorit
