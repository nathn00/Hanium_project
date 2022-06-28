import { css } from '@emotion/react';
import styled from '@emotion/styled';

const BORDER_RADIUS = 10;
const DEFAULT_FONTSIZE = 15;
const LARGE_FONTSIZE = 30;
const TRANSITION = css`
  transition: all 0.2s linear;
`;
const BOX_SHADOW = css`
  box-shadow: 10px 10px 20px 5px rgba(43, 37, 37, 0.25);
`;
const FLOAT_COLOR = css`
  background-color: rgba(10, 31, 98, 0.4);
`;
const TRANSPARENT_TXTCOLOR = `rgba(255, 255, 255, 0.7)`;

const GlobalContainer = styled('div')`
  width: 100vw;
  height: auto;
  position: relative;
`; // Header와 MainContainer를 감싸는 Container!

const GlobalHeader = styled('header')<{ pathname: string }>`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background-color: ${props =>
    props.pathname === '/rank' ? props.theme.bgColor.blue : 'none'};
  z-index: 1;
  span {
    margin: 15px;
    color: ${props => props.theme.txtColor.primary};
  }
  .logo {
    font-size: 30px;
    color: ${props => props.theme.txtColor.primary};
  }
  .signin {
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    color: ${props => props.theme.txtColor.primary};
    display: ${props =>
      props.pathname === '/sign_in' ||
      props.pathname === '/sign_up' ||
      props.pathname === '/forgot_pw'
        ? 'none'
        : 'block'};
  }
  div {
    width: 280px;
    height: 100%;
    position: absolute;
    left: 120px;
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    display: ${props =>
      props.pathname === '/sign_in' ||
      props.pathname === '/sign_up' ||
      props.pathname === '/forgot_pw'
        ? 'none'
        : 'block'};
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

const Tab = styled('li')<{ isActive: boolean }>`
  margin: auto;
  ${TRANSITION}
  color: ${props =>
    !props.isActive
      ? props.theme.txtColor.primary
      : props.theme.txtColor.selected};
`;

const MainContainer = styled('div')<{ pathname: string }>`
  width: 100vw;
  min-height: 100vh;
  padding: 80px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: linear-gradient(
    ${props =>
      props.pathname === '/rank'
        ? `0, ${props.theme.bgColor.gray} 0, ${props.theme.bgColor.gray} 0`
        : `180deg, ${props.theme.bgColor.blue} 0.06%, ${props.theme.bgColor.gray} 100%`}
  );
  z-index: 0;
`;

export {
  GlobalContainer,
  MainContainer,
  Tab,
  GlobalHeader,
  BORDER_RADIUS,
  FLOAT_COLOR,
  DEFAULT_FONTSIZE,
  LARGE_FONTSIZE,
  BOX_SHADOW,
  TRANSPARENT_TXTCOLOR,
  TRANSITION,
};
