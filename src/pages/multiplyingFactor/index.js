import React, { useState, useRef } from "react";
import {Container} from './style.js'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';

const MultiplyingFactor = () => {

    const [bancoDeHoras, setBancoDeHoras] = useState()
    const [fator, setFator] = useState()
    const [result, setResult] = useState()

    const hoursRef = useRef()

    const removeUnderline = (string) => {
        if(string === undefined) return false
        string = string.split('').map(elem => elem === "_" ? '0' : elem).join('')
        return string
    }

    const hoursToSeconds = (hours) => {
        hours = hours.split(':')
        let seconds = (+hours[0]*3600)+(+hours[1]*60)
        return seconds
    }

    const secondsToHours = (totalSeconds) => { //full net
        console.log(totalSeconds)
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);

        if(hours < 9) hours = `0${hours}`
        if(minutes < 9) minutes = `0${minutes}`

        return `${hours}:${minutes}`
    }

    const factorMinutes = (seconds) => {
        const factor = removeUnderline(fator) //realiza o calculo mesmo se faltar algum caractere
        return seconds*(+factor)
    }

    const handleClick = () => {
        if(!bancoDeHoras || !fator) return false
        const seconds = hoursToSeconds(removeUnderline(bancoDeHoras))
        const factor = factorMinutes(seconds)
        const hours = secondsToHours(factor)
        setResult(hours)

    }

    return (
        <Container>
            <h1>Fator Multiplicador</h1>
            <div>
                <div>
                    <h3>Quantidade de Banco</h3>
                    <InputMask onChange={(e) => setBancoDeHoras(e.target.value)} ref={hoursRef} mask="99:99" ></InputMask>
                </div>
                <div>
                    <h3>Fator Multiplicador </h3>
                    <InputMask onChange={(e) => setFator(e.target.value)} mask="9.9" ></InputMask>
                </div>
            </div>
            <div id='result'>
                {result && (<h1>Resultado: {result}</h1>)}

            </div>
            <Button onClick={handleClick} variant="contained" color="primary" style={{marginBottom: 50}}>Multiplicar</Button>
            <p>*Multiplique o banco pelo fator multiplicador</p>

        </Container>

    )
}

export default MultiplyingFactor;


