import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')
debugger;
const convertDate = (date, format) => moment(date).format(format);

const getWeeklyDay = (date) => moment(date).format('dddd');

export {
    convertDate,
    getWeeklyDay
}

