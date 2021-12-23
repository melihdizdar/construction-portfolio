import React from 'react';
import styled from 'styled-components';

function Button({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) =>{
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: #3E414A;
    cursor: pointer;
    transition: all .1s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        color:#ff3838;
    }
    &:hover{
        color:#ff3838;
    }
    &:not(:last-child){
        margin-right: .6rem;
    }
`;
const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem auto;
`;
export default Button;