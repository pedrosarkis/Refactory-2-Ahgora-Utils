import React from 'react';
import styled from 'styled-components';
const periodTypesTranslator = {
    shift: 'Jornada',
    nightly: 'Noturno',
    punch: 'Batida',
    leave: 'Afastamento',
    tolerance: 'Tolerância',
    intinere: 'Intinere',
    onCalls: 'SobreAviso',
    businessHour: 'Hora contratual'
}

const PeriodWrapper = styled.div`
    border: 0px solid black;
`

const DailyTimeline = ({ timeline }) => {
    return (
        <PeriodWrapper>
            <label> Inicio periodo: </label>
            <label> {timeline.startInfo} </label>
            <br></br>
            <label> Fim Periodo: </label>
            <label> {timeline.endInfo} </label>
            <br></br>
            <label> Tratamento caso trabalhado neste período: </label>
            <label> {timeline.options?.shift?.DESC_TIPO_HORA} </label>
            <br></br>
            <label> Tipo do período: </label>
            <label> {timeline.type.map(type => periodTypesTranslator[type]).join(', ')} </label>
        </PeriodWrapper>
    )
}

export default DailyTimeline;