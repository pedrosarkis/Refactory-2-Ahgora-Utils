import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #454545;
    margin-top: 30px;
    flex-direction: column;

    div {
        margin: 20px 0px;

        div {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            input{
                height: 40px;
                margin-top: 20px;
                font-size: 20px;
                text-align: center;
            }
        }
    }
`
