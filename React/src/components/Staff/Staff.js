import React, { Component, useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Staff.css'
import getUser from "../../utils/get-user";
import Layout from '../../pages/Layout'

import Datatable from "./datatable"

// https://www.youtube.com/watch?v=d1r0aK5awWk
// require("es6-promise").polyfill();
// require("isomorphic-fetch")

function TempStaff (){
  const user = getUser();
  return (
    <Layout user={user}>
      <Staff />
    </ Layout>
  )
}

class Staff extends Component {

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
    return rows.filter( row => row.name.indexOf(this.state.q) > -1 || row.catagory.indexOf(this.state.q) > -1)
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
        </div>

    );
  }
}

export default TempStaff;