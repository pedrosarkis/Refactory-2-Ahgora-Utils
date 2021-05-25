import React, { useState, useRef } from "react";
import {Container} from './style.js'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';

const MultiplyingFactor = () => {


    return (
        <Container>
            <h1>Conversor de Horas</h1>
            <div>
                <div>
                    <h3>Quantidade de Banco</h3>
                    <InputMask mask="99:99" ></InputMask>
                </div>
                <div>
                    <h3>Fator Multiplicador </h3>
                    <InputMask mask="9.9" ></InputMask>
                </div>
            </div>
            <Button variant="contained" color="primary" style={{marginBottom: 50}}>Multiplicar</Button>
            <p>*Multiplique o banco pelo fator multiplicador</p>

        </Container>

    )
}

export default MultiplyingFactor;


