import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import HourCalculator from '../../components/hourCalculator';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

 
const IndexPage = () => {
    const [value, setValue] = useState(0);
    const [time, setTime] = useState({});
    

    const tabChooser = {
      0: <HourCalculator handleTime={setTime} timeState={time}/>,
      1: <div> oi</div>
  }

    const classes = useStyles();
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Calculadora"  />
            <Tab label="Adicional Noturno" />
            <Tab label="Conversor" />
            <Tab label="Fator Multiplicador" />
          </Tabs>
        </Paper>
        {tabChooser[value]}
        </>
      );
}

export default IndexPage;

