import React from "react";
import { CardColumns } from "react-bootstrap";
import { Column } from "../../footer/footer_style";

import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function Datatable({data})
{
    const classes = useStyles();
    const columns = data[0] && Object.keys(data[0]);
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
          <TableHead>
              <TableRow>{data[0] && columns.map(heading => <StyledTableCell className='cell'>{heading}</StyledTableCell>)}</TableRow>
          </TableHead>
          <TableBody>
              {data.map(row => 
              <StyledTableRow>
                  {
                      columns.map(column => <StyledTableCell className='cell'><label>{row[column]}</label></StyledTableCell>)
                  }
              </StyledTableRow>)}
          </TableBody>
      </Table>
      </TableContainer>
    )
}