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
                <h1 className="Homepage_title"> Welcome to UCSB Food Bank </h1>
                <div className="img_AS-Food-bank"></div>
                <ul>
                    <li><div className="introduction_paragraph">This website will let you know what's in the food bank today</div></li>
                    <li><center><iframe className="Introduction_YT" src="https://www.youtube.com/embed/GgJJRo5uT0c"></iframe></center></li>
                    <li><div className="register_paragraph">Prior to your first visit, please&nbsp;<a href="http://tinyurl.com/asfbreg">register </a>first.</div></li>
                </ul>
            </div>

        )
    }
}

export default Home_Content