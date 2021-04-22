import React, { Component } from 'react';

class fetchExample extends Component {
    state = {
      isLoading: true,
      t2: ""
    };

    async componentDidMount() {
        const response = await fetch('/api/t2');
        const body = await response.json();
        this.setState({ groups: body, isLoading: false });
    }
    render() {
        const {t2, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        
        return (
            <div className="Example">
                t2
            </div>
        )
        
    }
}
export default fetchExample;
