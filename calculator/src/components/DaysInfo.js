import React from 'react';
import styled from 'styled-components';
import DailyTimeline from './DailyTimeline';

const Container = styled.div`
    border: 1px solid red;
    min-width: 250px;
    height: auto;
`
const Label = styled.label`
    display: block;
`

const DayInfo = ({day}) => {
    return (
        <Container>
            <Label>Dia</Label>
            <Label>{day.dia} </Label>
            <label>Há feriado neste dia? </label>
            <label> {day.events.isHoliday ? 'Sim' : 'Não'} </label>
            <br></br>
            <label>Há afastamento neste dia? </label>
            <label> {day.events.leave.range ? 'Sim' : 'Não'} </label>
            <Label> Batidas na tolerância</Label>
            <Label> {day.punchesInTolerance.map(punch => punch.hora).join(', ')}</Label>
            {day.timeline.map((timeline, index) => (
                <>
                <label>Período {index +1 }</label>
                <DailyTimeline timeline={timeline}/>
                <br></br>
                </>
            ))}

        </Container>
    )
}

export default DayInfo;