import React, { useState, useRef } from "react";
import {Container} from './style.js'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';

const HoursConverter = () => {
    const [sexagesimal, setSexagesimal] = useState()
    const [centesimal, setCentesimal] = useState()

    const  sexagesimalRef = useRef()
    const centesimalRef = useRef()


    const converterToCentesimal = (hours) => {
        hours = hours.split(':')
        hours[1] = Math.floor(hours[1] * 1.67);
        return `${hours[0]}.${hours[1]}`
    }

    const converterToSexagesimal = (hours) => {
        hours = hours.split('.')
        hours[1] = Math.floor(hours[1] / 1.67);
        if(+hours[0] < 9) hours[0] = `0${hours[0]}`

        return `${hours[0]}:${hours[1]}`
    }

    return (
        <Container>
            <h1>Conversor de Horas</h1>
            <div>
                <div>
                    <h3>Valor em Sexagesimal </h3>
                    <InputMask mask="99:99" ></InputMask>
                </div>
                <div>
                    <h3>Valor em Cetesimal </h3>
                    <InputMask  mask="99.99" ></InputMask>
                </div>
            </div>
            <Button variant="contained" color="primary" style={{marginBottom: 50}}>Converter</Button>
            <p>*Converta horas de sexagesimal para centesimal e vice versa</p>

        </Container>

    )
}

export default HoursConverter;


