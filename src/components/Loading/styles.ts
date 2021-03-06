import styled, { keyframes } from 'styled-components';

type Theme = {
  light: {
    colors: { primary: string; secondary: string; background: string };
  };
  dark: {
    colors: { primary: string; secondary: string; background: string };
  };
};

interface iProps {
  theme: Theme;
  themeValue: keyof Theme;
}

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
 30% { transform: rotate(50deg); }

 /* 50% { transform: rotate(160deg); } */
 100%{ transform: rotate(360deg); }
`;

export const PokeBall = styled.div`
  animation: ${anim} 2.5s ease-in-out infinite;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const PokeBallButton = styled.div`
  position: absolute;
  top: 35.5%;
  left: 39.5%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 3px solid
    ${({ theme, themeValue }: iProps) => theme[themeValue].colors.secondary};
  border-top: 3px solid
    ${({ theme, themeValue }: iProps) => theme[themeValue].colors.primary};

  ::after {
    position: absolute;
    width: 20px;
    height: 4px;
    content: '';
    background: ${({ theme, themeValue }: iProps) =>
      theme[themeValue].colors.secondary};
    margin: 3px 0px 0px 11px;
  }

  ::before {
    position: absolute;
    width: 20px;
    height: 4px;
    content: '';
    background: ${({ theme, themeValue }: iProps) =>
      theme[themeValue].colors.secondary};
    margin: 3px 0px 0px -22px;
  }
`;

export const PokeballBorder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid
    ${({ theme, themeValue }: iProps) => theme[themeValue].colors.secondary};
  border-top: 3px solid
    ${({ theme, themeValue }: iProps) => theme[themeValue].colors.primary}; ;
`;
