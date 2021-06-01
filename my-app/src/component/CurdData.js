import React, { Component } from 'react'

export class CurdData extends Component {
    render() {
        return (
            this.props.curdData.map((ele, idx) => {
                return (
                    <div key={idx}>
                        <button onClick={(e) => this.props.deleteFav(ele.slug)}>Delete</button>
                        <button onClick={(e) => this.props.updaeState(ele.slug, ele.name, ele.gender)}>Update</button>
                        <h2>{ele.name}</h2>
                        <h4>{ele.gender}</h4>
                        <img src={ele.img} alt="" />


                    </div>
                )
            })
        )
    }
}

export default CurdData
