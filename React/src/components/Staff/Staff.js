import React, { Component, useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Staff.css'

import Datatable from "./datatable"

// https://www.youtube.com/watch?v=d1r0aK5awWk
// require("es6-promise").polyfill();
// require("isomorphic-fetch")
<<<<<<< HEAD
const onCreate = () =>{
  
}
=======
>>>>>>> 8493e1a0abd5d8e579c2ad8da50aa322336aa182

export default class Staff extends Component {

  constructor(props) {
    super(props);
    // const [data, setData] = useState([]);
    // const [q, setQ] = useState("")
    this.state = {
      data: null,
      loading: true,
      error: null,
      q: "",
    };
  }

  async componentDidMount() {
    const API = "/api/getInventory";
    const response = await fetch(API);
    try {
      const data = await response.json();
      this.setState({ data: data, loading: false });
    } catch (e) { this.setState({ error: e }) }
  }

  setQ(value){
    this.setState({ q: value });
  }
  search(rows){
    return rows.filter( row => row.name.toLowerCase().indexOf(this.state.q) > -1 || row.catagory.toLowerCase().indexOf(this.state.q) > -1)
  }
  
  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <label className= 'searchLabel' for="search">Search:</label>
        <input className= 'searchInput' type="text" id="search" value={this.state.q} onChange={(e) => this.setQ(e.target.value)}></input>

        <div name="staffTable">
          <Datatable data={this.search(this.state.data)} />
        </div>
<<<<<<< HEAD
        <button onClick={onCreate}>Create</button>
=======
>>>>>>> 8493e1a0abd5d8e579c2ad8da50aa322336aa182
      </div>

    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 8493e1a0abd5d8e579c2ad8da50aa322336aa182
