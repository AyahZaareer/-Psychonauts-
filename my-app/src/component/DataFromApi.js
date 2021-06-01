import React, { Component } from 'react'

export class DataFromApi extends Component {
    render() {
        return (
            this.props.apiData.map((ele, idx) => {
                return (
                    <div key={idx}>
                        <button onClick={(e) => this.props.addFav(ele)}>Save to Fovirt</button>
                        <h2>{ele.name}</h2>
                        <h4>{ele.gender}</h4>
                        <img src={ele.img} alt="" />


                    </div>
                )
            })
        );
    }
}

export default DataFromApi
