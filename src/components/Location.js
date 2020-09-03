import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { LocationContext } from "../reducer/LocationState";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  makeStyles,
} from "../materialutils";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "auto",
    height: "auto",
    margin: "8em",
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
  },
}));

const Location = () => {
  const history = useHistory();
  const { addLocation, editLocation, locationById } = useContext(
    LocationContext
  );

  const [formData, updateFormData] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const handleFormDataChange = (e) => {
    updateFormData({
      ...formData,
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
    if (locationById != null) {
      updateFormData(locationById);
      setIsEdit(true);
    }
  }, [locationById]);

  const classes = useStyles();
  return (
    <>
      <form
        className={classes.form}
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
               value={appointmentPool}
                name={"appointmentPool"}
                variant="standard"
                id="outlined-basic"
                label="Appointment Pool"
                onChange={handleFormDataChange}
                required
              />
            </Grid>
            <Grid item xs={8}></Grid>

            <Grid item xs={2}>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={() => history.push('/')}
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
                disabled={!formData}
              >
              {isEdit ? 'Update' : 'Save'}  
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  );
};

export default Location;
