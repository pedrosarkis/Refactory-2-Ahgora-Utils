import React from 'react';
import 
    { 
        Container,
        InputHour,
        InputHourResult,
        ContainerHour,
        LabelHour
    }  from './hourCalculatorStyles';
import { useForm } from 'react-hook-form';


const Calculator = ({ handleTime, timeState }) => {
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        handleTime(timeState => ({
            ...timeState,
            [name]: value
        }))
    }
    return (
        <> 
            <Container> 
                    <ContainerHour>
                        <InputHour onChange={handleOnChange} name= 'hour1' type="text" value={timeState?.hour1}/>
                        <label for="hours">Horas</label>
                        <InputHour onChange={handleOnChange} name='minute1' value={timeState?.minute1}/>
                        <label for="mins">Minutos</label>
                    </ContainerHour>
                    <ContainerHour> 
                        <InputHour  onChange={handleOnChange} name='hour2' value={timeState?.hour2} />
                        <label for="hours">Horas</label>
                        <InputHour  onChange={handleOnChange} name='minute2' value={timeState?.minute2}/>
                        <label for="mins">Minutos</label>
                    </ContainerHour>
                    <ContainerHour>
                        <LabelHour id="sum " >Adição </LabelHour>
                        <LabelHour id="reset" >Reset</LabelHour>
                        <LabelHour id="decrease" class="bouton_moyen">Subtração</LabelHour>
                    </ContainerHour>
                <hr/>
                    <ContainerHour>
                        <InputHourResult id="resultHour" type="text" readonly maxlength="2"/>
                        <label for="hours">Horas</label>
                        <InputHourResult id="resultMinute" type="text"  readonly maxlength="2"/>
                        <label for="mins">Minutos</label>
                    </ContainerHour>
                    <ContainerHour>
                        <LabelHour id="save" class="bouton_moyen">Salvar</LabelHour>
                        <input id="auto" type="checkbox"/>
                        <label style={{fontSize: '20px', color: 'black'}} for="auto"class="results">Salvar Auto</label>
                    </ContainerHour>
            </Container>
        </>
    )
}

export default Calculator;