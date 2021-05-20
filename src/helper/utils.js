import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
const convertDate = (date, format) => moment(date).format(format);

const getWeeklyDay = (date) => {
    const WeeklyDay = moment(date).format("dddd");
    return `${WeeklyDay.slice(0, 1).toLocaleUpperCase()}${WeeklyDay.slice(1, WeeklyDay.length)}`;
};

export { convertDate, getWeeklyDay };
