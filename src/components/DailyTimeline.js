import React from 'react';
import styled from 'styled-components';
import { convertDate } from '../helper/utils';
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

const QuestionLabel = styled.label`
    font-weight: bold;
`

const ResponseLabel = styled.label`
    color: blue;
`

const PeriodWrapper = styled.div`
    border: 0px solid black;
`

const DailyTimeline = ({ timeline }) => {
    return (
        <PeriodWrapper>
            <QuestionLabel> Inicio periodo: </QuestionLabel>
            <ResponseLabel> {convertDate(timeline.startInfo, 'DD/MM/YYYY HH:mm') } </ResponseLabel>
            <br></br>
            <QuestionLabel> Fim Periodo: </QuestionLabel>
            <ResponseLabel> {convertDate(timeline.endInfo, 'DD/MM/YYYY HH:mm') } </ResponseLabel>
            <br></br>
            <QuestionLabel title='Gerará essa hora adicional caso esse período seja de batida'> Tratamento caso trabalhado neste período: </QuestionLabel>
            <label> {timeline.options?.shift?.DESC_TIPO_HORA} </label>
            <br></br>
            <QuestionLabel> Tipo do período: </QuestionLabel>
            <label> {timeline.type.map(type => periodTypesTranslator[type]).join(', ')} </label>
            {/* <br/> <br/> */}
            {/* {timeline.type.includes('leave') && (
                <>
                <QuestionLabel> Afastamento: {timeline.options.leave?.motivo} </QuestionLabel>
                <QuestionLabel style={{display: 'block'}}> Tratamento: {timeline.options.leave.tratamento} </QuestionLabel>
                </>
            )
            } */}
        </PeriodWrapper>
    )
}

export default DailyTimeline;