import styled, { keyframes } from 'styled-components'

export const anim = keyframes`
 0%{ transform: rotate(0deg); }

 /* 12.5% { transform: rotate(45deg); }
 25% { transform: rotate(90deg); }
 37.5% { transform: rotate(135deg); } */

 5% { transform: rotate(-50deg); }
 10% { transform: rotate(-20deg) }

 15% { transform: rotate(0deg); }
 20% { transform: rotate(-10deg); }

 25% { transform: rotate(40deg); }
 30% { transform: rotate(80deg); }

 50% { transform: rotate(140deg); }
 100%{ transform: rotate(360deg); }
`

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    animation: ${anim} 2s linear infinite;
`

export const PokeBallButton = styled.div`
    position: absolute;
    top: 35.5%;
    left: 39.5%;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 3px solid black;
    border-top: 3px solid red;

    ::after {
        position: absolute;
        width: 20px;
        height: 4px;
        content: '';
        background: black;
        margin: 3px 0px 0px 11px;
    }

    ::before {
        position: absolute;
        width: 20px;
        height: 4px;
        content: '';
        background: black;
        margin: 3px 0px 0px -22px;
    }
`

export const PokeballBorder = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid black;
    border-top: 3px solid red;
`