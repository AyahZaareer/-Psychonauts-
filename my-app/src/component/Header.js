import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/favorit">FavoritPage</a></li>
                </ul>

            </div>
        )
    }
}

export default Header
