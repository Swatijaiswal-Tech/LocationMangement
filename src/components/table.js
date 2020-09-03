import React, { useState, useCallback, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Button,
} from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LocationContext } from "../reducer/LocationState";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
  },

  table: {
    width: "100%",
    margin: theme.spacing(1),
    top: "15px",
  },

  btn: {
    position: "absolute",
    right: "10px",
    top: "15px",
  },
  noData: {
    position: "relative",
    textAlign: "center",
    margin: "5em"
  }
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "locationName",
    numeric: false,
    disablePadding: true,
    label: "Location Name",
  },
  { id: "city", numeric: true, disablePadding: false, label: "city" },
  {
    id: "phoneNo",
    numeric: true,
    disablePadding: false,
    label: "Phone Number",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.head}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const history = useHistory();
  const { locationList, setLocationById ,deleteLocation} = useContext(LocationContext);

  const createData = (id ,locationName, city, phoneNumber) => {
    return {id, locationName, city, phoneNumber };
  };

  const _rows = locationList?.map((item, index) => {
    return createData(item.id ,item.locationName, item.city, item.phoneNumber);
  });

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const removeLocation = (data) => {
    deleteLocation(data);
  }
  const isSelected = (name) => selected.indexOf(name) !== -1;
  if(locationList.length <= 0) {
    return (
    <>
    <h1 className={classes.noData}>There is no location </h1>
    <div className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/addLocation"
        >
          <AddIcon />
          Add Location
        </Button>
      </div>

    </>
    )}

  return (
    <div className={classes.root}>
     <div className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/addLocation"
        >
          <AddIcon />
          Add Location
        </Button>
      </div>


      <Paper>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={_rows.length}
            />
            <TableBody>
              {stableSort(_rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow key={row.locationName} selected={isItemSelected}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.locationName}
                      </TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                      <TableCell align="right">{row.phoneNo}</TableCell>
                      <TableCell>
                        <button 
                        type='button'
                        name="remove"
                        onClick={() => removeLocation(row.id)}>
                          
                        <DeleteOutlineIcon/>
                        </button>
                        <button
                        name="edit"
                        type="button"
                        onClick={()=>{
                          history.push(`/editLoaction/${row.id}`)
                          setLocationById(locationList[index])
                        }}>
                          <EditIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={_rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
