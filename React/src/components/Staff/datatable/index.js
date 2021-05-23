import React from "react";
import { CardColumns } from "react-bootstrap";
import { Column } from "../../footer/footer_style";

const onUpdate = () =>{

}

const onDelete = () =>{

}

const onCreate = () =>{

}

export default function Datatable({data})
{
    const columns = data[0] && Object.keys(data[0]);
    return (<table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
                <td><button onClick={onUpdate}>Update</button></td>
                <td><button onClick={onDelete}>Delete</button></td>
            </tr>)}
            <tr>
            <td><input type="text" id="name" name="fname" required></input></td>
            <td><input type="number" id="limit" name="flimit" min="1" required></input></td>
            <td><input type="number" id="amount" name="famount" min="0" required></input></td>
            <td><input type="text" id="category" name="fcategory" required></input></td>
            <td><button onClick={onCreate}>Create</button></td>
            </tr>
        </tbody>
    </table>
    )
}