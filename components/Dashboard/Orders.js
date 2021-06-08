import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
});

function createData(client_name, client_phone,  client_email, product_amount) {
  return { client_name, client_phone,  client_email, product_amount };
}

export default function BasicTable({data}) {

  const classes = useStyles();
  const rows = data.map(row => createData(row.client_name, row.client_phone, row.client_email, row.product_amount))
  console.log(rows)

  const [hover, setIsHover] = useState(false)

  const createStyle = {
    color: 'orange',
    fontSize: "18px",
    fontWeight: "bolder",
    padding: "5px 15px",
    cursor: "pointer"
  }
  const createStyleHover = {
    color: 'orange',
    fontSize: "18px",
    fontWeight: "bolder",
    backgroundColor: "whiteSmoke",
    borderRadius: "3px",
    padding: "5px 15px",
    cursor: "pointer",
  }

  return (
      <div style={{margin: "20px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2>Orders</h2>
                <p style={hover ? createStyleHover : createStyle}
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                > + create </p>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Customer Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {/* <img src={row.imageURL} style={{height: "70px", width: "70px"}} alt=""/> */}
                            </TableCell>
                            <TableCell align="right">Cookies</TableCell>
                            <TableCell align="right">{row.client_name}</TableCell>
                            <TableCell align="right">{row.client_phone}</TableCell>
                            <TableCell align="right">{row.client_email}</TableCell>
                            <TableCell align="right">{row.product_amount}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
      </div>
  );
}