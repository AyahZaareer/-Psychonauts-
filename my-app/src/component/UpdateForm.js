import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateFav}>
                    <input onChange={this.props.updateName} value={this.props.name} />
                    <button type="submit" value="update">Update</button>
                    <input onChange={this.props.updateGender} value={this.props.gender} />
                    <button type="submit" value="update">Update</button>

                </form>

            </div>
        )
    }
}

export default UpdateForm
