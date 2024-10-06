import { NavLink } from 'react-router-dom';
import styles from './ResultPage.module.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ResultPage()  {

const [ data , setData ] = useState({})

  useEffect(function(){

    axios.get('http://localhost:5000/resultData').then(
      (res => {
        const result = res.data;
        setData(result)
      })
    )
  },[])

  // console.log("data from useEffect" , data)


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  useEffect(() => {
    if (data.length > 0) {
      Object.entries(data).map(([key, val], i) => {
        console.log( Number(key) + 1, val);
        // console.log(val.player1Name)
      });
    }
  }, [data]);

  return (
    <div className={styles.pageWrapper}>
      <div>
        <h1 className={styles.leaderHeading}> Leader Board  🏆 </h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Match</TableCell>

            <TableCell align="center">Winner</TableCell>
            <TableCell align="center">Runner</TableCell>
            <TableCell align="center">Tied</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

                        {
                  Object.entries(data).map(([key, val]) => (
                    <TableRow
                      key={key}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {Number(key) + 1}
                      </TableCell>
                      <TableCell align="center">{val.winner}</TableCell>
                      <TableCell align="center">{val.runner}</TableCell>
                      <TableCell align="center">{ val.tie.length === 0 ? '-' : val.tie }</TableCell>
                    </TableRow>
                  ))
                }

        </TableBody>
      </Table>
    </TableContainer>

      </div>
    </div>
  );
}

export default ResultPage
