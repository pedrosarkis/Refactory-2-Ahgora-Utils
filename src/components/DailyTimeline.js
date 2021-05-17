import React, { useState } from 'react';
import styled from 'styled-components';
import { convertDate } from '../helper/utils';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import { blockStatement } from '@babel/types';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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

const BlockLabel = styled.label`
    display: block;
`

const PeriodWrapper = styled.div`
    border: 0px solid black;
`

const DailyTimeline = ({ timeline }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      }

      const handleOpen = () => {
        setOpen(true);
      };

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
            {timeline.type.includes('leave') && (
                <>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <BlockLabel>Motivo Afastamento: {`${timeline.options.leave.motivo}`}</BlockLabel>
                            <BlockLabel>Tratamento: {`${timeline.options.leave.tratamento}`}</BlockLabel>
                            <BlockLabel>Tratamento Noturno: {`${timeline.options.leave.tratamento_noturno}`}</BlockLabel>
                            <BlockLabel>Não abona: {`${timeline.options.leave.nao_abonar_falta}`}</BlockLabel>
                            <BlockLabel>Abona apenas ausências: {`${timeline.options.leave.apenas_abonar_ausencia}`}</BlockLabel>
                            <BlockLabel>Força o tratamento da jornada/escala: {`${timeline.options.leave.force_shift_limits}`}</BlockLabel>
                            <BlockLabel>Possui limites: {`${timeline.options.leave?.LIMITES_HORAS_ADICIONAIS?.length > 0 || 'Não'}`}</BlockLabel>
                            {timeline.options.leave?.LIMITES_HORAS_ADICIONAIS?.length > 0 && (
                                <>
                                     <BlockLabel>Origem: {`${timeline.options.leave.LIMITES_HORAS_ADICIONAIS[0].HORA_ADICIONAL_ORIGEM}`}</BlockLabel>
                                     <BlockLabel>Quantidade: {`${timeline.options.leave.LIMITES_HORAS_ADICIONAIS[0].TM_QUANTIDADE}`}</BlockLabel>
                                     <BlockLabel>Destino: {`${timeline.options.leave.LIMITES_HORAS_ADICIONAIS[0].HORA_ADICIONAL_DESTINO}`}</BlockLabel>
                                </>
                            )
                            }
                        </div>
                    </Modal>
                    <Button variant="outlined" color="primary" onClick={handleOpen}>Ver dados Afastamento</Button>
                </>
            )}

        </PeriodWrapper>
    )
}

export default DailyTimeline;