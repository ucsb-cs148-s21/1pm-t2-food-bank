import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Inventory.css'


export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {

      stringData: '["VALUE1", "VALUE2", "VALUE3", "VALUE4", "VALUE5"]',


      products: [
        {
          'name': 'Banana',
          'limit': 1,
          'amount': 1,
        },
        {
          'name': 'Apple',
          'limit': 1,
          'amount': 3,
        },
      ],

      inventory: null,
      loading: true,
      error: null,

      columns: [{
        dataField: 'name',
        text: 'Inventory'
      },
      {
        dataField: 'limit',
        text: 'limit'
      },
      {
        dataField: 'amount',
        text: 'quantity'
      }]
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
    var myJSON = JSON.stringify(this.state.inventory);
    return (
      <div>
        {/* <BootstrapTable keyField='inventory'
          data={this.state.inventory}
          columns={this.state.columns} /> */}

        <div>{myJSON}</div>
        {/* <div>{this.state.inventory}</div> */}

        {/* <tbody>
        {a.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody> */}
      </div>
    );
  }
}

    // inventory 是一个 JSON file
    //var myJSON = JSON.stringify(this.state.inventory); // 把 inventory 变成一个string
    // <div>{myJSON}</div>

    // const valuesArray = JSON.parse(myJSON) //把string 变成一个JS object
    // var as = JSON.parse(inventory);



        // {/* <div className="App" >
        // <inventory inventory={this.state.inventory} />
        // </div> */}
