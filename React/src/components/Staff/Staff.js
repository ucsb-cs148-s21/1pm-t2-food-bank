import React, { Component, useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Staff.css'
import getUser from "../../utils/get-user";
import Layout from '../../pages/Layout'
import Loading from "../../pages/Loading"

import { withStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Create';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Datatable from "./datatable"
import axios from 'axios'

import moment from 'moment';

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 25
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

class Staff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: null,
      filterdata: null,
      data: null,
      loading: true,
      error: null,
      q: "",
      columns: ['name', 'limit', 'amount', 'category'],
      update: 'true'
    };
  }

  async componentDidMount() {
    const API = "/api/getInventory";
    const response = await fetch(API);
    try {
      const data = await response.json();
      this.setState({ data: data, filterdata: data, loading: false });
    } catch (e) { this.setState({ error: e }) }
    console.log(this.state.data);

    const timeAPI = "/api/getTime/last update";
    const res = await fetch(timeAPI);
    try {
      const date = await res.json();
      this.setState({ time: moment(date.date).fromNow() });
    } catch (e) { this.setState({ error: e }) }
  }

  async fetchAPI(){
    const API = "/api/getInventory";                                                          
    const response = await fetch(API);
    try {
      const data = await response.json();
      return data;
    } catch (e) { this.setState({ error: e }) }
  }

//update timestamp
  async updateTime(){    
    const time = moment().format();
    const res = await axios.put('api/updateTime', {time: time});
    this.setState({ time: moment(time).fromNow() });
  }
  
  timeout(){
    setTimeout(async() =>{
      let list = await this.fetchAPI();                                            
      console.log(list);
      this.setState({data: list, filterdata: list, q: null});
      console.log(this.state.data, "data")
    }, 1000);
  }


  setQ(value){
    this.setState({ q: value });
    this.setState({filterdata: this.search(this.state.data)});
  }
  search(rows){
    return rows.filter( row => row.name.indexOf(this.state.q) > -1 || row.category.indexOf(this.state.q) > -1)
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
            'category': category
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
    this.updateTime();
    document.getElementById("search").value = '';
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
    this.updateTime();
    document.getElementById("search").value = '';
  }

  onUpdate(name, category){
    if (name === '' || category === ''){
      window.alert('Invalid input!')
    }
    var limit = document.getElementById(name+"limit").value;
    var amount = document.getElementById(name+"amount").value;
    console.log("category: ", category);
    if (limit === '' || amount === ''){
        window.alert('Invalid input!')
    }
    else {
        const item = {
            'name': name,
            'limit': limit,
            'amount': amount,
            'category': category
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
    document.getElementById(name+"limit").value = null;
    document.getElementById(name+"amount").value = null;
    this.timeout();
    this.updateTime();
    document.getElementById("search").value = '';
  }
  loadTable(){
    window.alert(document.getElementById('name').value)
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (this.state.loading) {
      return <Loading/>;
    }


    return (
        <div>
          <label className= 'searchLabel' for="search">Search:</label>
          <input className= 'searchInput' type="text" id="search" onChange={(e) => this.setQ(e.target.value)}></input>
          {/* <div name="staffTable"> */}

          <div className="time">Last updated: {this.state.time} </div>

          <TableContainer component={Paper}>
            <Table className={useStyles.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {this.state.columns.map(heading => <StyledTableCell>{heading}</StyledTableCell>)}
                  <StyledTableCell>Update</StyledTableCell>
                  <StyledTableCell>Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {this.state.filterdata.map(row => 
                  <StyledTableRow>                                    
                      {row != null? <StyledTableCell><label id={row.name+"name"} name={row.name+"fname"} value={row.name}>{row.name}</label></StyledTableCell> : null}
                      {row != null? <StyledTableCell><input type="number" id={row.name+"limit"} name={row.name+"flimit"} placeholder={row.limit}/></StyledTableCell> : null}
                      {row != null? <StyledTableCell><input type="number" id={row.name+"amount"} name={row.name+"famount"} placeholder={row.amount}/></StyledTableCell> : null}
                      {row != null? <StyledTableCell><label id={row.name+"category"} name={row.name+"fcategory"} value={row.category}>{row.category}</label></StyledTableCell> : null}

                      {row != null? <StyledTableCell>
                        <Button
                          variant="contained"
                          color="default"
                          startIcon={<UpdateIcon />}
                          onClick={() => this.onUpdate(row.name,row.category)}
                        >
                          Update
                        </Button>
                      </StyledTableCell> : null}

                      {row != null? <StyledTableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                          onClick={() => this.onDelete(row.name)}
                        >
                          Delete
                        </Button>
                      </StyledTableCell> : null}

                  </StyledTableRow>
                  )}
                  <StyledTableRow>
                  <StyledTableCell><input type="text" id="name" name="fname" required/></StyledTableCell>
                  <StyledTableCell><input type="number" id="limit" name="flimit" min="1" required/></StyledTableCell>
                  <StyledTableCell><input type="number" id="amount" name="famount" min="0" required/></StyledTableCell>
                  <StyledTableCell><input type="text" id="category" name="fcategory" required/></StyledTableCell>

                  <StyledTableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<CreateIcon />}
                      onClick={() => this.onCreate()}
                    >
                      Create
                    </Button>
                  </StyledTableCell>

                  <StyledTableCell />
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
        </div>
        
    );
    
  }
}

export default TempStaff;




/*
          <div name="staffTable">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>{this.state.columns.map(heading => <th>{heading}</th>)}</tr>
              </thead>
              <tbody>
                  {this.state.data.map(row => 
                  <tr>                                      
                      {row != null? <td><label id={row.name+"name"} name={row.name+"fname"}>{row.name}</label></td> : null}
                      {row != null? <td><input type="number" id={row.name+"limit"} name={row.name+"flimit"} placeholder={row.limit}/></td> : null}
                      {row != null? <td><input type="number" id={row.name+"amount"} name={row.name+"famount"} placeholder={row.amount}/></td> : null}
                      {row != null? <td><label id={row.name+"category"} name={row.name+"fcategory"}>{row.category}</label></td> : null}

                      {row != null? <td>
                        <Button
                          variant="contained"
                          color="default"
                          startIcon={<UpdateIcon />}
                          onClick={() => this.onUpdate(row.name)}
                        >
                          Update
                        </Button>
                      </td> : null}

                      {row != null? <td>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                          onClick={() => this.onDelete(row.name)}
                        >
                          Delete
                        </Button>
                      </td> : null}

                  </tr>
                  )}
                  <tr>
                  <td><input type="text" id="name" name="fname" required/></td>
                  <td><input type="number" id="limit" name="flimit" min="1" required/></td>
                  <td><input type="number" id="amount" name="famount" min="0" required/></td>
                  <td><input type="text" id="category" name="fcategory" required/></td>

                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<CreateIcon />}
                      onClick={() => this.onCreate()}
                    >
                      Create
                    </Button>
                  </td>
                  
                  </tr>
              </tbody>
            </table>
          </div>

*/
