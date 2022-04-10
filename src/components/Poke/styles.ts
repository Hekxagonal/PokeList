import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

type Theme = {
  light: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      box: string;
    };
  };
  dark: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      box: string;
    };
  };
};

interface iProps {
  theme: Theme;
  anim?: string;
  themeValue: keyof Theme;
}

export const animationDelay = keyframes`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
`;

export const animationRed = keyframes`
    0% { filter: blur(1.5px) }
    100% { filter: blur(0px) }
`;

export const Container = styled.div`
  background: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 25px 10px 10px 10px;
  margin-top: 60px;
  width: 195px;
  height: 70px;
  animation: ${({ anim }: iProps) => anim}s ease-out 0s 1 ${animationDelay};
  background-color: ${({ theme, themeValue }: iProps) =>
    theme[themeValue].colors.box};
`;

export const PokeName = styled.h1`
  font-size: 15px;
  color: ${({ theme, themeValue }: iProps) =>
    theme[themeValue].colors.secondary};
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 50%;
`;

export const Type = styled.div`
  padding: 4px;
  border-radius: 3px;
  font-size: 12px;
  color: white;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  ${({ children }) => {
    switch (children) {
      default:
        return css`
          background: white;
          color: black;
        `;
      case 'BUG':
        return css`
          background: rgba(156, 178, 0, 1);
        `;
      case 'DARK':
        return css`
          background: rgba(75, 47, 29, 1);
        `;
      case 'DRAGON':
        return css`
          background: rgba(137, 76, 255, 1);
        `;
      case 'ELECTRIC':
        return css`
          background: rgba(251, 204, 0, 1);
        `;
      case 'FAIRY':
        return css`
          background: rgba(254, 158, 190, 1);
        `;
      case 'FIGHTING':
        return css`
          background: rgba(205, 0, 0, 1);
        `;
      case 'FIRE':
        return css`
          background: rgba(255, 142, 0, 1);
        `;
      case 'FLYING':
        return css`
          background: rgba(161, 186, 249, 1);
        `;
      case 'GHOST':
        return css`
          background: rgba(109, 85, 115, 1);
        `;
      case 'GRASS':
        return css`
          background: rgba(96, 211, 117, 1);
        `;
      case 'GROUND':
        return css`
          background: rgba(242, 218, 144, 1);
        `;
      case 'ICE':
        return css`
          background: rgba(149, 181, 237, 1);
        `;
      case 'NORMAL':
        return css`
          background: rgba(174, 151, 118, 1);
        `;
      case 'POISON':
        return css`
          background: rgba(159, 63, 169, 1);
        `;
      case 'PSYCHIC':
        return css`
          background: rgba(255, 107, 169, 1);
        `;
      case 'ROCK':
        return css`
          background: rgba(206, 175, 78, 1);
        `;
      case 'STEEL':
        return css`
          background: rgba(160, 159, 167, 1);
        `;
      case 'WATER':
        return css`
          background: rgba(113, 189, 255, 1);
        `;
    }
  }}
`;

export const FrontSprite = styled.img`
  position: absolute;
  margin-top: -70px;
  margin-left: -20px;
  z-index: 1;
  animation: 2s ease-out 0s 1 ${animationRed};
`;

export const BackSprite = styled.img`
  margin-top: -70px;
  margin-left: 20px;
  position: absolute;
  filter: blur(1px);
`;
