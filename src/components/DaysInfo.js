import React from 'react';
import styled from 'styled-components';
import DailyTimeline from './DailyTimeline';
import { convertDate, getWeeklyDay } from '../helper/utils';
import moment from 'moment';
import momentDuration from 'moment-duration-format';
import {
    extractMinutesFromSeconds,
    extractHoursFromSeconds
} from '../helper/calculator';
import 'moment/locale/pt-br';
moment.locale('pt-br')


const Container = styled.div`
    border: 1px solid black;
    min-width: 300px;
    height: auto;
    font-size: 20px;
    padding-left: 5px;
    padding-right: 5px;
`
const Label = styled.label`
    display: block;
`

const DayInfo = ({ day, timeline }) => {
    const shiftIndex = day.jornada ?? null;
    const shiftData = timeline.shifts[shiftIndex];
    const contractualHour = shiftData?.ops.HORAS_CONTRATUAIS.join('-') || 'Não há horas previstas';
    const punches = day.punchesInTolerance.map(punch => moment(punch.hora).format('HH:MM')).join('-');
    debugger;
    return (
        <Container>
            <Label>Dia {convertDate(day.dia, 'DD/MM/YYYY')}</Label> <br></br>
            <Label>Dia da semana: {getWeeklyDay(day.dia)}</Label> <br></br>
            <Label> Horário contratual: </Label>
            <Label> {contractualHour} </Label>

            <hr></hr>
            <label>Há feriado neste dia? </label>
            <label> {day.events.isHoliday ? 'Sim' : 'Não'} </label>
            <br></br>
            <label>Há afastamento neste dia? </label>
            <label> {day.events.leave.range ? 'Sim' : 'Não'} </label>
            <Label> Batidas na tolerância</Label>
            <Label> {day.punchesInTolerance.map(punch => moment(punch.hora, 'HHmm').format('HH:mm')).join('-')}</Label>
            {day.timeline.map((timeline, index) => (
                <>
                <br></br>
                <label>Período {index + 1 }</label>
                <DailyTimeline timeline={timeline}/>
                <br></br>
                </>
            ))}


        </Container>
    )
}

export default DayInfo;