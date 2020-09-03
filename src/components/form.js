import React, { useState, useCallback, useContext, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { LocationContext } from "../reducer/LocationState";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  makeStyles,
} from "../utils";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
    height: "50%",
    margin: "15em",
    marginRight: "15em",
    textSize: "1px",
  },

  data: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
      textAlign: "center",
      multilineColor: {
        color: "red",
      },
    },
    btn: {
      // textSize: "1px"
    },
  },
}));

const FormData = (props) => {
  // console.log(props.match.params.id);
  const history = useHistory();
  const { addLocation, editLocation, locationById } = useContext(
    LocationContext
  );
  // console.log("locationById ", locationById);
  const [formData, updateFormData] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const handleFormDataChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  const {
    locationName,
    city,
    state,
    zipCode,
    phoneNumber,
    timeZone,
    appointmentPool,
  } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log('e.target.elements ', e.target.value)
    // console.log("formData ", formData);
    const formObj = {
      id: isEdit ? locationById?.id : Date.now(),
      locationName: locationName,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      timeZone: timeZone,
      appointmentPool: appointmentPool,
    };

    if (locationById) {
      editLocation(formObj);
    } else {
      addLocation(formObj);
    }
    history.push("/");
  };

  useEffect(() => {
    // call only when locationById state changes
    if (locationById != null) {
      updateFormData(locationById);
      // change the button name from Submit to Update
      setIsEdit(true);
    }
  }, [locationById]);

  const classes = useStyles();
  return (
    <>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <Typography variant="h6" component="div">
          {isEdit ? "EDIT Location" : "Add Location"}
        </Typography>
        <Paper className={classes.data}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                value={locationName}
                name={"locationName"}
                variant="standard"
                id="standard-basic"
                label="Location Name"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={city}
                name={"city"}
                variant="standard"
                id="outlined-basic"
                label="City"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={state}
                name={"state"}
                variant="standard"
                id="outlined-basic"
                label="State"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={zipCode}
                name={"zipCode"}
                variant="standard"
                id="outlined-basic"
                label="Zone Code"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={phoneNumber}
                name={"phoneNumber"}
                variant="standard"
                id="outlined-basic"
                label="Phone Number"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={timeZone}
                name={"timeZone"}
                variant="standard"
                id="outlined-basic"
                label="Time Zone"
                onChange={handleFormDataChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                // value={appointmentPool}
                name={"appointmentPool"}
                variant="standard"
                id="outlined-basic"
                label="Appointment Pool"
                onChange={handleFormDataChange}
              />
            </Grid>
            <Grid item xs={8}></Grid>

            <Grid item xs={2}>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
              >
                Cancle
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                className={classes.btn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  );
};

export default FormData;
