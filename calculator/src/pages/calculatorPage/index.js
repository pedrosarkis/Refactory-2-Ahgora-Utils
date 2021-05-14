import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { decrease, sum, reset } from '../helper/calculator';
import TimelineParser from '../../components/timelineParser';
import Nightly from '../../components/Nightly';


import HourCalculator from '../../components/hourCalculator';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


const IndexPage = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState({});
  const [result, setResult] = useState({});
  const [autoSave, setAutoSave] = useState(false);
  const [nightlyTime, setNightlyTime] = useState({});



  const chooseMethod = (operation) => ({
    [operation === 'sum']: sum(time),
    [operation === 'decrease']: decrease(time),
  })[true] || reset(setTime);

  const doCalc = (operation) => {
    const resultOperation = chooseMethod(operation);
    if(resultOperation && autoSave) {
      setTime(time => ({
        ...time,
        hour1: resultOperation.hours,
        minute1: resultOperation.minutes,
        hour2: '',
        minute2: '',
      }))
    }
    setResult(resultOperation);
  }

  const tabChooser = {
    0: <HourCalculator handleTime={setTime} timeState={time} doCalc={doCalc} result={result} setAutoSave={setAutoSave} />,
    1: <Nightly nightlyTime={nightlyTime} setTime={setNightlyTime} />,
    4: <TimelineParser />
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
          <Tab label="Calculadora" />
          <Tab label="Adicional Noturno" />
          <Tab label="Conversor" />
          <Tab label="Fator Multiplicador" />
          <Tab label="Timeline Parser" />
        </Tabs>
      </Paper>
      {tabChooser[value]}
    </>
  );
}

export default IndexPage;

