import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Inventory.css'

class Inventory extends Component {
    state = {
        products: [
          {
            'inventory': 'banana',
            'quantity': 1,
          },
          {
            'inventory': 'meat',
            'quantity': 2,
          },
          {
            'inventory': 'milk',
            'quantity': 3,
          },
        ],
        columns: [{
          dataField: 'inventory',
          text: 'Inventory'
        },
        {
          dataField: 'quantity',
          text: 'Quantity'
        }]
    }

    render() {
        return (
          <div class="inventoryTable">
            <BootstrapTable keyField='inventory' 
            data={ this.state.products } 
            columns={ this.state.columns } />
          </div>
        );
    }
}

export default Inventory;
