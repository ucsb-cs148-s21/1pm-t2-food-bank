import React, { Component } from 'react';
import './Home_Content.css'

class Home_Content extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div>
                <div class="landing-page">
                    <div class="page-content">
                        <h1>UCSB Food Bank</h1>
                        <p>
                            Come and find out what's in our Inventory today!
                        </p>
                        <a href="">Get Started</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_Content