import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Inventory.css'

const columns = [{
  dataField: 'catagory',
  text: 'Catagory'
  
},
{
  dataField: 'name',
  text: 'Inventory'
},
{
  dataField: 'amount',
  text: 'Quantity'
},
{  
  dataField: 'limit',
  text: 'Limit'
}];


export default class Inventory extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inventory: null,
      loading: true,
      error: null
    };

  }

  async componentDidMount() {
    const API = "/api/getInventory";
    const response = await fetch(API);
    try {
      const data = await response.json();
      this.setState({ inventory: data, loading: false });
    } catch (e) { this.setState({ error: e }) }

    fetch ("api/getTime/last update")
      .then(response => response.json)
      .then(time => this.setState({ time }));
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className='inventoryTable'>
          <BootstrapTable  keyField='catagory' data={this.state.inventory || []} columns={columns} />

      <div>
      

        <label className= 'searchLabel' for="search">Search:</label>
        <input className= 'searchInput' type="text" id="search" value={this.state.q} onChange={(e) => this.setQ(e.target.value)}></input>

        <div className="time">Last updated: {this.state.time}</div>

        <div name="inventoryTable">
          <Datatable data={this.search(this.state.data)} />
        </div>
      </div>
    );
  }
}
