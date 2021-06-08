import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import EditProduct from '../Products/EditProduct';

const useStyles = makeStyles({
  table: {
    minWidth: 450,

  },
});

function createData(imageURL, productName,  price, hasOption) {
  return { imageURL, productName,  price, hasOption };
}

export default function BasicTable({data}) {

  const classes = useStyles();
  const products = data.products
  const rows = products.map(row => createData(row.imageURL, row.productName, row.price, row.hasOption))
  console.log(rows)

  const [state, setState] = useState({
    switchActive: true,
  });
  const [hover, setIsHover] = useState(false)

  const [createProduct, setCreateProduct] = useState(false)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                <h2>Products</h2>
                <p style={hover ? createStyleHover : createStyle}
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                > + create </p>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Active</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            <img src={row.imageURL} style={{height: "70px", width: "70px"}} alt=""/>
                        </TableCell>
                        <TableCell align="right">{row.productName}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                            <Switch
                                checked={state.switchActive}
                                onChange={handleChange}
                                color="primary"
                                name="switchActive"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
              createProduct && <EditProduct />
            }
      </div>
  );
}