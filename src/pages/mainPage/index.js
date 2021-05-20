import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { decrease, sum, reset, calcNightlyFactor, removeNightlyFactor } from "../../helper/calculator";
import TimelineParser from "../../components/TimelineParser";
import Nightly from "../../components/Nightly";

import HourCalculator from "../../components/HourCalculator";

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
    const [resultNightly, setResultNightly] = useState({});

    const chooseMethod = (operation) =>
        ({
            [operation === "sum"]: sum(time),
            [operation === "decrease"]: decrease(time),
        }[true] || reset(setTime));

    const doCalc = (operation) => {
        const resultOperation = chooseMethod(operation);
        if (resultOperation && autoSave) {
            setTime((time) => ({
                ...time,
                hour1: resultOperation.hours,
                minute1: resultOperation.minutes,
                hour2: "",
                minute2: "",
            }));
        }
        setResult(resultOperation);
    };

    const calcNightly = () => {
        const nightlyResult = calcNightlyFactor(nightlyTime);
        setResultNightly(nightlyResult);
    };

    const calcRemoveNightlyFactor = () => {
        const resultRemoval = removeNightlyFactor(nightlyTime);
        setResultNightly(resultRemoval);
    };

    const tabChooser = {
        0: <HourCalculator handleTime={setTime} timeState={time} doCalc={doCalc} result={result} setAutoSave={setAutoSave} />,
        1: <Nightly nightlyTime={nightlyTime} setTime={setNightlyTime} result={resultNightly} calc={calcNightly} remove={calcRemoveNightlyFactor} />,
        4: <TimelineParser />,
    };

    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Paper className={classes.root} style={{ position: "fixed", width: "100vw" }}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Calculadora" />
                    <Tab label="Adicional Noturno" />
                    <Tab label="Conversor" />
                    <Tab label="Fator Multiplicador" />
                    <Tab label="Timeline Parser" />
                </Tabs>
            </Paper>
            <div style={{ paddingTop: 49 }}>{tabChooser[value]}</div>
        </>
    );
};

export default IndexPage;
