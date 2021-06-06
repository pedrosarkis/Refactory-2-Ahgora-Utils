import { Button, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { decreaseHoursAndMinutes, sumHoursAndMinutes } from '../../helper/calculator';
import { Container, Modal } from "./styles";

function HoursCalculator() {
    const [inputs, setInputs] = useState([1, 1]);
    const [obj, setObj] = useState({hours: '', minutes: ''})
    console.log(obj);

    let hoursInputRef = useRef(new Array()); 
    let minutesInputRef = useRef(new Array());

    const resetFields = () => {
        hoursInputRef.current.forEach(elem => elem.value = '')
        minutesInputRef.current.forEach(elem => elem.value = '')
        setObj({hours: '', minutes: ''})
    };

    const handleAddNewInputs = () => inputs.length >= 31 ? false : setInputs([...inputs, 1]);

    const handleRemoveLastInput = () => !inputs.length ? false : setInputs([1, 1]);

    const doCalc = (operation) => {
        const hours = hoursInputRef.current.map(elem => !elem.value ? 0 : parseInt(elem.value))
        const minutes = minutesInputRef.current.map(elem => !elem.value ? 0 : parseInt(elem.value))
        setObj(operation === "sum" ? sumHoursAndMinutes({hours, minutes}) : decreaseHoursAndMinutes({hours, minutes}));
    };

    return (
        <Container>
            <h1>Calculadora de Horas</h1>
            <Modal>
                <div id="div-addNewButtons">
                    <Button style={{ backgroundColor: "#a2cf6e", color: "white", width: 147 }} onClick={handleAddNewInputs} variant="contained">+</Button>
                    <Button style={{ backgroundColor: "tomato", color: "white" }} onClick={handleRemoveLastInput} variant="contained">Limpar campos</Button>
                </div>
                <div id="div-all-input-hours">
                    {inputs.map((elem, index) => {
                        return (
                            <div className="div-input-hours" key={index}>
                                <TextField inputRef={(element) => (hoursInputRef.current[index] = element)} className="outlined-basic" label="Horas" variant="outlined" />
                                <TextField inputRef={(element) => (minutesInputRef.current[index] = element)} className="outlined-basic" label="Minutos" variant="outlined" />
                            </div>
                        )})}
                </div>
                <div id="div-buttons">
                    <Button onClick={() => doCalc('sum')} variant="contained" color="primary">Adição</Button>
                    <Button onClick={() => resetFields("reset")} variant="contained" color="secondary">Reset</Button>
                    <Button onClick={() => doCalc('decrease')} variant="contained" color="primary">Subtração</Button>
                </div>
                <hr />
                <h1>Resultado</h1>
                <div id="div-results">
                    <TextField id="filled-basic"  inputProps={{ readOnly: true }}  variant="outlined" label='Resultado Horas' value={obj.hours} />
                    <TextField id="filled-basic" inputProps={{ readOnly: true }}  variant="outlined" label='Resultado Minutos' value={obj.minutes}  />
                </div>
            </Modal>
        </Container>
    );
}

export default HoursCalculator;
