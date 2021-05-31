import React, { Component, useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Staff.css'
import getUser from "../../utils/get-user";
import Layout from '../../pages/Layout'

import moment from 'moment';

import Datatable from "./datatable"
import axios from 'axios'

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
      time: null,
      data: null,
      loading: true,
      error: null,
      q: "",
      columns: ['name', 'limit', 'amount', 'catagory'],
      update: 'true'
    };
  }

  async componentDidMount() {
    const API = "/api/getInventory";
    const response = await fetch(API);
    try {
      const data = await response.json();
      this.setState({ data: data, loading: false });
    } catch (e) { this.setState({ error: e }) }
    console.log(this.state.data);
  }

  async fetchAPI(){
    const API = "/api/getInventory";                                                          
    const response = await fetch(API);
    try {
      const data = await response.json();
      return data;
    } catch (e) { this.setState({ error: e }) }
  }        
  
  timeout(){
    setTimeout(async() =>{
      let list = await this.fetchAPI();                                            
      console.log(list);
      this.setState({data: list});
      console.log(this.state.data, "data")
    }, 1000);
  }

  // async componentWillMount() {
  //   const API = "/api/getInventory";
  //   const response = await fetch(API);
  //   try {
  //     const data = await response.json();
  //     this.setState({ data: data, loading: false });
  //   } catch (e) { this.setState({ error: e }) }
  //   console.log("update: ", this.state.loading);
  // }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.loading !== this.state.loading) {
  //       const API = "/api/getInventory";
  //     const response = await fetch(API);
  //     try {
  //       const data = await response.json();
  //       this.setState({ data: data, loading: false });
  //     } catch (e) { this.setState({ error: e }) }
  //     console.log("update: ", this.state.loading);
  //   }
  // }

  setQ(value){
    this.setState({ q: value });
  }
  search(rows){
    return rows.filter( row => row.name.indexOf(this.state.q) > -1 || row.catagory.indexOf(this.state.q) > -1)
  }

  onCreate(){
    var name = document.getElementById('name').value
    var limit = document.getElementById('limit').value
    var amount = document.getElementById('amount').value
    var category = document.getElementById('category').value
    if (limit === '' || amount === '' || name === '' || category === '' ){
        window.alert('Invalid input!')
    }
    else {
        const item = {
            'name': name,
            'limit': limit,
            'amount': amount,
            'catagory': category
        }
        axios.post('api/addInventory', item)
        .then(function (response) {
            console.log(response);
            window.alert('Item Created!')
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    this.timeout();
    document.getElementById('name').value = null;
    document.getElementById('limit').value = null;
    document.getElementById('amount').value = null;
    document.getElementById('category').value = null;
  }




  // tutorial: https://www.javatpoint.com/react-axios-delete-request-example
  onDelete(name){
    if (name === ''){
        window.alert('Invalid item!')
    }
    else {
        axios.delete('api/deleteInventory/'+ name)
        .then(function (response) {
            console.log(response);
            window.alert('Item Deleted!')
            //console.log(response.data);
            //const posts = data.filter(item => item.name !== name);
            //this.setState({ posts });  
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    this.timeout();
  }

  onUpdate(){
    var name = document.getElementById('name').value
    var limit = document.getElementById('limit').value
    var amount = document.getElementById('amount').value
    var category = document.getElementById('category').value
    if (limit === '' || amount === '' || name === '' || category === '' ){
        window.alert('Invalid input!')
    }
    else {
        const item = {
            'name': name,
            'limit': limit,
            'amount': amount,
            'catagory': category
        }
        axios.put('api/updateInventory', item)
        .then(function (response) {
            console.log(response);
            window.alert('Item Updated!')
        })
        .catch(function (error) {
            console.log(error);
        })
    }
  }

  render() {
    console.log("re-render");
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }

    var now = '2021-05-31 15:20';
    var time = moment(now).fromNow();

    return (
        <div>
          <label className= 'searchLabel' for="search">Search:</label>
          <input className= 'searchInput' type="text" id="search" value={this.state.q} onChange={(e) => this.setQ(e.target.value)}></input>
     
          <div className="time">Last updated: {this.state.time, time}</div>
     
          <div name="staffTable">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>{this.state.columns.map(heading => <th>{heading}</th>)}</tr>
              </thead>
              <tbody>
                  {this.state.data.map(row => 
                  <tr>                                      
                      {row != null? this.state.columns.map(column => <td>{row[column]}</td>) : null}
                      {row != null? <td><button onClick={this.onUpdate}>Update</button></td> : null}
                      {row != null? <td><button onClick={() => this.onDelete(row.name)}>Delete</button></td> : null}
                  </tr>
                  )}
                  <tr>
                  <td><input type="text" id="name" name="fname" required/></td>
                  <td><input type="number" id="limit" name="flimit" min="1" required/></td>
                  <td><input type="number" id="amount" name="famount" min="0" required/></td>
                  <td><input type="text" id="category" name="fcategory" required/></td>
                  <td><button onClick={() => this.onCreate()}>Create</button></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

    );
  }
}

export default TempStaff;