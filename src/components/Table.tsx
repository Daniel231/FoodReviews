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
    tableHeaderCell: {
      fontWeight: 'bold'
    }
  });

  interface IColumn {
    label: string,
    id: string
  }

  interface ITableProps {
    columns: IColumn[],
    rows: any[],
    loading?: boolean,
    page: number,
    rowsPerPage: number,
    onCustomActionClick: (event: any) => void,
    handleChangePage: (newPage: number) => void,
    totalRows: number
  }
  
  const Table = ({columns, rows, loading = false, page, rowsPerPage, onCustomActionClick, handleChangePage, totalRows}: ITableProps) => {
    const classes = useStyles();
  
    const onChangePage = (event: unknown, newPage: number) => {
      handleChangePage(newPage);
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
                    className={classes.tableHeaderCell}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell className={classes.tableHeaderCell}>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? 
                <TableRow>
                  <TableCell>
                    Loading...
                  </TableCell>
                </TableRow>
              : rows.map((row) => {
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
                      <IconButton onClick={() => onCustomActionClick(row.id)}>
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
          rowsPerPageOptions={[10]}
          component="div"
          count={totalRows || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={onChangePage}
        />
      </Paper>
    );
  }

  export default Table;