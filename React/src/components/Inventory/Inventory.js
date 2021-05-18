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
      </div>
    );
  }
}