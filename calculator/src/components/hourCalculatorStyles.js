import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    height: 398px;
    width: 600px;
    left: 60%;
    margin: auto;
    border:  1px solid black;
    background-color:  #f1f1f1;
    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;
    font-size: 13px;
    color: #757575;
`

const InputHour = styled.input`
    text-align: center;
    border: 1px #042e5d solid;
    width: 82px;
    height: 50px;
    margin-left: 10px;
    font-size: 30px;
`
const InputHourResult = styled.input`
    border: 1px #042e5d solid;
    width: 82px;
    height: 50px;
    text-align:center;
    font-size: 30px;
    background-color: #042e5d;
    color: white;
`

const ContainerHour = styled.div`
    text-align: center;
    margin-left: 10px;
    font-size: 30px;
    padding: 10px;

`

const LabelHour = styled.label`
    color: #fff;
    letter-spacing: 3pt;
    font-size: 15px;
    padding: 10px;
    background: rgb(7, 86, 151);
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border: 1px #fcfcfc solid;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
`
export {Container, InputHour, InputHourResult, ContainerHour, LabelHour}