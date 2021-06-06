const sumHoursAndMinutes = ({hours, minutes}) => {
    const allHoursAndMinutes = [...hours.map(hour => hour * 3600), ...minutes.map(minute => minute * 60)].reduce((acc, curr) => acc + curr, 0);

    return {
        hours: extractHoursFromSeconds(allHoursAndMinutes),
        minutes: extractMinutesFromSeconds(allHoursAndMinutes),
    };
};
const decreaseHoursAndMinutes = ({hours, minutes}) => {
    debugger;
    const hoursAndMinutes = hours.map((hour, index) =>  hour * 3600 + minutes[index] * 60).reduce((acc, curr) => acc - curr);

    return {
        hours: extractHoursFromSeconds(hoursAndMinutes),
        minutes: extractMinutesFromSeconds(hoursAndMinutes),
    };
};

const sum = ({ hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0 }) => {
    const sumHours = hourToSeconds(hour1) + hourToSeconds(hour2);
    const sumMinutes = minutesToSeconds(minute1) + minutesToSeconds(minute2);
    return {
        hours: extractHoursFromSeconds(sumHours + sumMinutes),
        minutes: extractMinutesFromSeconds(sumHours + sumMinutes),
    };
};

const decrease = ({ hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0 }) => {
    const sumFirstLine = hourToSeconds(hour1) + minutesToSeconds(minute1);
    const sumSecondLine = hourToSeconds(hour2) + minutesToSeconds(minute2);

    const result = sumFirstLine - sumSecondLine;
    return {
        hours: extractHoursFromSeconds(result),
        minutes: extractMinutesFromSeconds(result),
    };
};

const reset = (setTime) => {
    setTime({});
    return {};
};

const calcNightlyFactor = ({ hours, minutes }) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;
    if (!minutesInSeconds && !totalSeconds) return {};

    const resultsWithFactor = totalSeconds * getNightlyFactor();

    return {
        hours: extractHoursFromSeconds(resultsWithFactor),
        minutes: extractMinutesFromSeconds(resultsWithFactor),
    };
};

const removeNightlyFactor = ({ hours, minutes }) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;

    if (!minutesInSeconds && !totalSeconds) return {};

    const resultWithoutFactor = Math.ceil(totalSeconds / getNightlyFactor());

    return {
        hours: extractHoursFromSeconds(resultWithoutFactor),
        minutes: extractMinutesFromSeconds(resultWithoutFactor),
    };
};

const converterToCentesimal = time => {
    if (!time) return false;
    const [hours, minutes] = removeUnderline(time).split(":");
    return `${hours}.${Math.floor(minutes * 1.67)}`;
};

const converterToSexagesimal = time => {
    if (!time) return false;
    let [hours, minutes] = removeUnderline(time).split(".");
    return `${hours}:${Math.round(minutes / 1.67)
        .toString()
        .padStart(2, 0)}`;
};

const secondsToHoursAndMinutes = (totalSeconds) => {
    return `${extractHoursFromSeconds(totalSeconds).toString().padStart(2, 0)}:${extractMinutesFromSeconds(totalSeconds).toString().padStart(2, 0)}`;
};

const hourToSeconds = hour => hour * 3600;

const minutesToSeconds = minutes => minutes * 60;

const removeUnderline = string => string.replaceAll("_", "0");

const extractHoursFromSeconds = seconds => seconds > 0 ? Math.floor(seconds / 3600) : Math.floor(Math.abs(seconds) / 3600) * -1; 

const extractMinutesFromSeconds = seconds => seconds > 0 ?  Math.floor((seconds % 3600) / 60) :  Math.floor((Math.abs(seconds) % 3600) / 60) * -1;

const getNightlyFactor = () => 8 / 7;

export { sum, decrease, reset, extractHoursFromSeconds, extractMinutesFromSeconds, calcNightlyFactor, removeNightlyFactor, converterToCentesimal, converterToSexagesimal, secondsToHoursAndMinutes, removeUnderline, sumHoursAndMinutes, decreaseHoursAndMinutes };
