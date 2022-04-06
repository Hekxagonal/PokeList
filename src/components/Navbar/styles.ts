import styled from "styled-components";

import { BiPaintRoll } from "react-icons/bi";

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
  themeValue: keyof Theme;
}

export const Container = styled.div`
  background: ${({ theme, themeValue }: iProps) =>
    theme[themeValue].colors.primary};
  color: ${({ theme, themeValue }: iProps) =>
    theme[themeValue].colors.background};
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`;

export const ColumnLeft = styled.div`
  margin-left: 10px;
`;
export const ColumnRight = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline;
  color: white;
  font-size: 30px;
`;

export const Name = styled.span`
  color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

export const PainterButton = styled(BiPaintRoll)`
  color: white;
`;
