import React, { useState } from "react";
import {Container} from './style.js'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

const HoursConverter = () => {
    return (
        <Container>
            <h1>Conversor de Horas</h1>

            <div>
                <div>
                    <h3>Valor em Sexagesimal </h3>
                    <InputMask  mask="99:99" ></InputMask>
                </div>
                <div>
                    <h3>Valor em Sexagesimal </h3>
                    <InputMask  mask="99.99" ></InputMask>
                </div>
            </div>
            <Button variant="contained" color="primary" style={{marginBottom: 50}}>Converter</Button>
            <p>*Converta horas de sexagesimal para centesimal e vice versa</p>

        </Container>

    )
}

export default HoursConverter;


