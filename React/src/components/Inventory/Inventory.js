import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Inventory.css'

class Inventory extends Component {
    state = {
        products: [
          {
            'inventory': 'Banana',
            'quantity': 1,
          },
          {
            'inventory': 'Apple',
            'quantity': 3,
          },
          {
            'inventory': 'Orange',
            'quantity': 3,
          },
          {
            'inventory': 'Kiwi',
            'quantity': 3,
          },
          {
            'inventory': 'Potato',
            'quantity': 3,
          },
          {
            'inventory': 'Sweet Potato',
            'quantity': 3,
          },
          {
            'inventory': 'Beef',
            'quantity': 3,
          },
          {
            'inventory': 'Pork',
            'quantity': 2,
          },
          {
            'inventory': 'Chicken',
            'quantity': 3,
          },
          {
            'inventory': 'Orange Juice',
            'quantity': 3,
          },
          {
            'inventory': 'Apple Juice',
            'quantity': 3,
          },
          {
            'inventory': 'Milk',
            'quantity': 3,
          },
          {
            'inventory': 'Rice',
            'quantity': 3,
          },
          {
            'inventory': 'Refried Beans',
            'quantity': 3,
          },
          {
            'inventory': 'Black Beans',
            'quantity': 3,
          },
          {
            'inventory': 'Cheese',
            'quantity': 3,
          },
          {
            'inventory': 'Toilet Paper',
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
