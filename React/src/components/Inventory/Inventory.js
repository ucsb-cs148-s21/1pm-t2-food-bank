import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import '../Staff/Table.css' // css same as staff table

import Datatable from "./datatable"
import Layout from '../../pages/Layout'
import Loading from "../../pages/Loading"

import getUser from "../../utils/get-user";

import moment from 'moment';

function TempInventory (){
  const user = getUser();
  return (
    <Layout user={user}>
    <Inventory />
    </ Layout>
  )
}

class Inventory extends Component {

  constructor(props) {
    super(props);
    // const [data, setData] = useState([]);
    // const [q, setQ] = useState("")
    this.state = {
      time: null,
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

    const timeAPI = "/api/getTime/last update";
    const res = await fetch(timeAPI);
    try {
      const date = await res.json();
      this.setState({ time: moment(date.date).fromNow() });
    } catch (e) { this.setState({ error: e }) }
  }

  setQ(value){
    this.setState({ q: value });
  }
  search(rows){
    return rows.filter( row => row.name.indexOf(this.state.q) > -1 || row.category.indexOf(this.state.q) > -1)
  }
  
  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>
    }
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <div>
          <label className= 'searchLabel' for="search">Search:</label>
          <input className= 'searchInput' type="text" id="search" value={this.state.q} onChange={(e) => this.setQ(e.target.value)}></input>

          <div className="time">Last updated: {this.state.time} </div>

          <div name="inventoryTable">
            <Datatable data={this.search(this.state.data)} />
          </div>
      </div>
    );
  }
}

export default TempInventory;