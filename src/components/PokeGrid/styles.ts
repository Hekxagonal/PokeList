import styled from 'styled-components'
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 60px;
`

export const PokeWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

export const Navigation = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 50%;
    margin-top: 50px;
`

export const PageRight = styled(FaRegArrowAltCircleRight)`
    cursor: pointer;
`
export const PageLeft = styled(FaRegArrowAltCircleLeft)`
    cursor: pointer;
`