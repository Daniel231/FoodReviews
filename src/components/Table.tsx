import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Table as MaterialTable} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
      
    },
    '@global': {
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#AAA',
        borderRadius: 10
      },
      '::-webkit-scrollbar': {
         width: 6,
         backgroundColor: '#F5F5F5'
      }
    },
    container: {
      maxHeight: 440,
    },
  });

  interface IColumn {
    label: string,
    id: string
  }

  interface ITableProps {
    columns: IColumn[],
    rows: any[],
  }
  
  const Table = ({columns, rows}: ITableProps) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <MaterialTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={`${column.label} ${index}`}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover key={JSON.stringify(row)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <IconButton>
                        <VisibilityRoundedIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </MaterialTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }

  export default Table;