// @flow

import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
* TODO(averagebeard):
* Add ability to slide hamburger down from top.
*/

export const Bar = styled.div`
  width: 100%;
  ${({
    color,
    height,
    radius,
    theme: { bars },
  }) => `
    background: ${color || bars.color};
    border-radius: ${radius || bars.radius}px;
    height: ${height || bars.height}px;
  `};
`;

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${({
    height,
    theme: { hamburger: { dimensions } },
    width,
  }) => `
    height: ${height || dimensions}px;
    width: ${width || dimensions}px;
  `};
`;

export const LinkContainer = styled.div`
  position: fixed;
  transform: translateX(${({
    right,
    open,
    theme: { hamburger: { location } },
  }) => (
    // eslint-disable-next-line no-nested-ternary
    (right || location === 'right')
      ? (open ? -100 : 0)
      : (open ? 0 : -100)
  )}%);
  z-index: 999999;
  ${({
    color,
    height,
    maxWidth,
    padding,
    right,
    speed,
    theme: {
      linkContainer,
      hamburger,
      topBar,
    },
    transition,
    width,
  }) => `
    background: ${color || linkContainer.color};
    height: calc(100vh - ${height || topBar.height}px);
    max-width: ${maxWidth || linkContainer.maxWidth}px;
    padding: ${padding || linkContainer.padding}px;
    right: ${right || (hamburger.location === 'right') ? `${-linkContainer.maxWidth}px` : ''};
    transition: transform ${speed || linkContainer.speed}s ${transition || linkContainer.transition};
    width: ${width || linkContainer.width}%;
  `};
`;

export const LinkItem = styled(Link)`
  color: white;
  display: block;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: capitalize;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
`;

export const TopBar = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 999998;
  ${({
    color,
    height,
    gutter,
    locked,
    right,
    theme: { hamburger, topBar },
  }) => `
    background: ${color || topBar.color};
    flex-direction: ${(right || hamburger.location) === 'right' ? 'row-reverse' : 'row'};
    height: ${height || topBar.height}px;
    padding-left: ${gutter || topBar.gutter}px;
    padding-right: ${gutter || topBar.gutter}px;
    position: ${(locked || topBar.locked ? 'sticky' : 'relative')};
  `};
`;
