import React, {useState, useEffect, useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {Grid ,Typography} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({  
    paper: {
        width: '60%',
        margin: '6em'
        
      },
   grid: {
      margin: '25px',
      color: 'Green'
   }   
   
  });
const LocationTiming = () => {
    const classes = useStyles();
    const [selectedDays , setDays] = useState([]);
    const [sunday ,setWeekDay1] = useState({
       to: null,
       from:null
    });
    const [monday ,setWeekDay2] = useState({
       to: null,
       from: null
    });
    const [tuesday ,setWeekDay3] = useState('');
    const [wednesday ,setWeekDay4] = useState('');
    const [thrusday ,setWeekDay5] = useState('');
    const [friday ,setWeekDay6] = useState('');
    const [saturday ,setWeekDay7] = useState('');


    const handleSundayFrom = useCallback(
      (e) => {
         const from = e.target.value
         setWeekDay1((prevState) => ({
         to:prevState.to,
         from: from
        }))},
      []
    );

    const handleSundayTo = useCallback(
      (e) => {
         const to = e.target.value;
         setWeekDay1((prevState) => ({
         from: prevState.from,
         to:to
      }))},
      []
    );
    
    const handleMondayFrom = useCallback(
      (e) => {
         const from = e.target.value
         setWeekDay2((prevState) => ({
         to:prevState.to,
         from: from
        }))},
      []
    );

    const handleMondayTo = useCallback(
      (e) => {
         const to = e.target.value;
         setWeekDay2((prevState) => ({
         from: prevState.from,
         to:to
      }))},
      []
    );

    const handleTuesdayFrom = useCallback(
      (e) => {
         const to = e.target.value;
         setWeekDay3((prevState) => ({
         from: prevState.from,
         to:to
      }))},
      []
    );
    const handleTuesdayTo = useCallback(
      (e) => {
         const to = e.target.value;
         setWeekDay3((prevState) => ({
         from: prevState.from,
         to:to
      }))},
      []
    );

    const handleWedFrom = useCallback(
       (e) => {
         const from = e.target.value;
         setWeekDay4((prevState) => ({
            from: from,
            to: prevState.to
         }))
    }, []);

    const handleWedTo = useCallback(
      (e) => {
        const to = e.target.value;
        setWeekDay4((prevState) => ({
           to: to,
           from: prevState.from
        }))
   }, []);

   const handleThrusTo = useCallback(
      (e) => {
        const to = e.target.value;
        setWeekDay5((prevState) => ({
           to: to,
           from: prevState.from
        }))
   }, []);
   const handleThrusFrom = useCallback(
      (e) => {
        const from = e.target.value;
        setWeekDay5((prevState) => ({
           to: prevState.to,
           from: from
        }))
   }, []);
   
   const handleFridayFrom = useCallback(
      (e) => {
        const from = e.target.value;
        setWeekDay6((prevState) => ({
           to: prevState.to,
           from: from
        }))
   }, []);

   const handleFridayTo = useCallback(
      (e) => {
        const to = e.target.value;
        setWeekDay6((prevState) => ({
           to: to,
           from: prevState.from
        }))
   }, []);
   const handleSatFrom = useCallback(
      (e) => {
        const from = e.target.value;
        setWeekDay7((prevState) => ({
           to: prevState.to,
           from: from
        }))
   }, []);
   const handleSatTo = useCallback(
      (e) => {
        const from = e.target.value;
        setWeekDay7((prevState) => ({
           to: prevState.to,
           from: from
        }))
   }, []);
   
    return (
        <Paper className={classes.paper}> 
        <Grid container>
         <Grid xs={12} className={classes.grid}>
            Facility Times
         </Grid> 
         <Grid xs={2}>
         </Grid>
         <Grid xs={2}>
         From
         </Grid>
         <Grid xs={2}>  
         </Grid>
         <Grid xs={2}>
          To
         </Grid>
         </Grid>    
            
          <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Sun"
                       
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField id="outlined-basic"
                   label="10:30" 
                   size="small" 
                   variant="outlined" 
                   onChange={handleSundayFrom}/>  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                   id="outlined-basic"
                  label="10:30" 
                  size="small" 
                  variant="outlined"
                  onChange={handleSundayTo} />
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Apply to all check</Button>  
              </Grid>   
           </Grid>   

           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Mon"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField 
                  id="outlined-basic"
                  label="10:30"
                  size="small"
                  variant="outlined"
                  onChange={handleMondayTo}
                  />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained"color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                    id="outlined-basic"
                    label="10:30" 
                    size="small"
                   variant="outlined" 
                   onChange={handleMondayFrom}/>
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Applytoallcheck</Button>  
              </Grid>   
           </Grid>   

           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Tue"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField 
                  id="outlined-basic"
                  label="10:30" 
                  size="small"
                  variant="outlined"
                  onChange = {handleTuesdayFrom}
                   />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                   id="outlined-basic"
                  label="10:30" 
                  size="small" 
                  variant="outlined"
                  onChange = {handleTuesdayTo} />
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Apply to all check</Button>  
              </Grid>   
           </Grid>  
           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Wed"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField
                  id="outlined-basic" 
                  label="10:30" 
                  size="small" 
                  onChange={handleWedFrom}
                  variant="outlined" />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                   id="outlined-basic"
                  label="10:30" 
                  size="small" 
                  variant="outlined" 
                  onChange={handleWedTo}/>
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Apply to all check</Button>  
              </Grid>   
           </Grid>   
           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Thrus"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField 
                  id="outlined-basic"
                   label="10:30" 
                   size="small" 
                   variant="outlined"
                   onChange={handleThrusTo} />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                   id="outlined-basic"
                  label="10:30" 
                  size="small"
                  variant="outlined" 
                  onChange={handleThrusFrom}/>
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Apply to all check</Button>  
              </Grid>   
           </Grid>   
           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Fri"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField 
                  id="outlined-basic" 
                  label="10:30"
                  size="small"
                  variant="outlined"
                  onChange={handleFridayFrom} />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField
                    id="outlined-basic"
                   label="10:30"
                    size="small" 
                    variant="outlined"
                    onChange={handleFridayTo} />
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button  variant="" color="">Apply to all check</Button>  
              </Grid>   
           </Grid>   
           <Grid container>
              <Grid xs={1}>
                    <FormGroup row>
                        <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Sat"
                        />
                   </FormGroup>
               </Grid>
               <Grid xs={2}>
                  <TextField 
                  id="outlined-basic"
                  label="10:30"
                  size="small"
                  variant="outlined"
                  onChange={handleSatFrom}  />  
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color="primary"> am</Button>
              </Grid>  
              <Grid xs={1}>
                    <Button  variant="contained" color=" Secondary"> pm</Button>  
              </Grid>  
                <Grid xs={2}>
                   <TextField 
                   id="outlined-basic"
                  label="10:30" 
                  size="small" 
                  variant="outlined" 
                  onChange={handleSatTo} />
              </Grid>  
                <Grid xs={1}>
                   <Button  variant="contained" color="primary"> am</Button>
                </Grid> 
                <Grid xs={1}>
                   <Button  variant="contained" color=" Secondary"> pm</Button>
                </Grid> 
                <Grid xs={3}>
                <Button color="primary" >Apply to all checked</Button>
              </Grid>   

              <Grid xs={8}>
              </Grid>  
              <Grid xs={1}>
              <Button  variant="contained" color="primary"> Save</Button> 
              </Grid>
              <Grid>
              <Button  variant="contained" color="secondary"> Cancel</Button> 
              </Grid>    
              
           </Grid>   

         </Paper>   
    );
}

export default LocationTiming;
 
