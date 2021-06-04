import { useState, useRef } from "react";
import { Container, Modal } from "./styles";

import { Input, Button, TextField } from "@material-ui/core";

function HoursCalculator() {
    const [inputs, setInputs] = useState([1, 1]);

    let hoursInputRef = useRef(new Array());
    let minutesInputRef = useRef(new Array());

    const handleOnclick = (event) => {};

    const handleAddNewInputs = () => {
        if (inputs.length >= 5) return false;

        setInputs([...inputs, 1]);
    };

    const handleRemoveLastInput = () => {
        if (!inputs.length) return false;
        setInputs([1, 1]);
    };

    const teste = () => {
        console.log(hoursInputRef.current[0].value);
        console.log(minutesInputRef);
    };

    return (
        <Container>
            <h1>Calculadora de Horas</h1>
            <Modal>
                <div id="div-addNewButtons">
                    <Button style={{ backgroundColor: "#a2cf6e", color: "white", width: 147 }} onClick={handleAddNewInputs} variant="contained">
                        +
                    </Button>
                    <Button style={{ backgroundColor: "tomato", color: "white" }} onClick={handleRemoveLastInput} variant="contained">
                        Limpar campos
                    </Button>
                </div>
                <div id="div-all-input-hours">
                    {inputs.map((elem, index) => {
                        return (
                            <div className="div-input-hours" key={index}>
                                <TextField inputRef={(element) => (hoursInputRef.current[index] = element)} className="outlined-basic" className="hour" label="Horas" variant="outlined" />
                                <TextField inputRef={(element) => (minutesInputRef.current[index] = element)} className="outlined-basic" className="minutes" label="Minutos" variant="outlined" />
                            </div>
                        );
                    })}
                </div>

                <div id="div-buttons">
                    <Button onClick={teste} variant="contained" color="primary">
                        Adição
                    </Button>
                    <Button onClick={() => handleOnclick("reset")} variant="contained" color="secondary">
                        Reset
                    </Button>
                    <Button onClick={() => handleOnclick("decrease")} variant="contained" color="primary">
                        Subtração
                    </Button>
                </div>
                <hr />
                <h1>Resultado</h1>
                <div id="div-results">
                    <TextField id="filled-basic" inputProps={{ readOnly: true }} label="Horas" variant="outlined" defaultValue="2017-05-24" />
                    <TextField id="filled-basic" inputProps={{ readOnly: true }} label="Minutos" variant="outlined" defaultValue="2017-05-24" />
                </div>
            </Modal>
        </Container>
    );
}

export default HoursCalculator;
