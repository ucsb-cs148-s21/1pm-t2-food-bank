import React from "react";
import { CardColumns } from "react-bootstrap";
import { Column } from "../../footer/footer_style";
import axios from 'axios'

function onUpdate(){
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

// tutorial: https://www.javatpoint.com/react-axios-delete-request-example
function onDelete(name){
    console.log(name)
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
}
// end

function onCreate(){
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
}

export default function Datatable({data})
{
    const columns = data[0] && Object.keys(data[0]);
    return (
    <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
                <td><label id={row.name+"name"} name="fname"/></td>
                {window.alert(row.name)}
                <td><label id={row.name+"category"} name="fname"/></td>
                <td><button onClick={onUpdate}>Update</button></td>
                <td><button onClick={() => onDelete(row.name)}>Delete</button></td>
            </tr>)}
            <tr>
            <td><input type="text" id="name" name="fname" required/></td>
            <td><input type="number" id="limit" name="flimit" min="1" required/></td>
            <td><input type="number" id="amount" name="famount" min="0" required/></td>
            <td><input type="text" id="category" name="fcategory" required/></td>
            <td><button onClick={onCreate}>Create</button></td>
            </tr>
        </tbody>
    </table>
    )
}