import styled from 'styled-components'
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa'

type Theme = {
    light: {
      colors: { primary: string, secondary: string, background: string };
    };
    dark: {
      colors: { primary: string, secondary: string, background: string };
    };
  };
  
  interface iProps {
    theme: Theme;
    themevalue: keyof Theme;
}

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
    color:${({ theme, themevalue }: iProps) => theme[themevalue].colors.secondary};
    transition: all 1s ease-in-out;
`
export const PageLeft = styled(FaRegArrowAltCircleLeft)`
    cursor: pointer;
    color:${({ theme, themevalue }: iProps) => theme[themevalue].colors.secondary};
    transition: all 1s ease-in-out;
`