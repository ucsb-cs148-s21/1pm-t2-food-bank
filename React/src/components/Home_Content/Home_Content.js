import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home_Content.css'
import Layout from '../../pages/Layout'

class Home_Content extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <Layout>
                <div>
                    <div class="landing-page">
                        <div class="page-content">
                            <h1>UCSB Food Bank</h1>
                            <p>
                                Come and find out what's in our Inventory today!
                            </p>
                            <Link to={"/inventory"}>Get Started</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home_Content
