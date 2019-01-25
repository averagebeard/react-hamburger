// @flow

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  createSlideTransition,
  linkContainerSpacing,
  topBarPositioning,
} from './styles';

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

export const HamburgerIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100;
  ${({
    height,
    theme: { hamburger: { dimensions } },
    width,
  }) => `
    height: ${height || dimensions}px;
    width: ${width || dimensions}px;
  `};
  ${({
    maxWidth,
    right,
    slide,
    theme: { hamburger, linkContainer },
  }) => (
    // eslint-disable-next-line no-nested-ternary
    slide || hamburger.slide
      ? (right
        ? createSlideTransition(-maxWidth || -linkContainer.maxWidth, 0, 'px')
        : createSlideTransition(0, maxWidth || linkContainer.maxWidth, 'px')
      )
      : undefined
  )}
`;

export const LinkContainer = styled.div`
  position: fixed;
  z-index: 98;
  ${({
    color,
    maxWidth,
    padding,
    right,
    theme: {
      linkContainer,
      hamburger,
    },
    width,
  }) => `
    background: ${color || linkContainer.color};
    height: 100vh;
    max-width: ${maxWidth || linkContainer.maxWidth}px;
    padding: ${padding || linkContainer.padding}px;
    right: ${right || (hamburger.location === 'right') ? `${-linkContainer.maxWidth}px` : ''};
    width: ${width || linkContainer.width}%;
  `};
  ${linkContainerSpacing};
  ${createSlideTransition(-100, 0, '%')}
`;

export const LinkItem = styled(Link)`
  color: white;
  display: block;
  font-size: 18px;
  text-transform: capitalize;
`;

export const TopBar = styled.div`
  align-items: center;
  position: relative;
  ${({
    color,
    height,
    gutter,
    theme: { topBar },
  }) => `
    background: ${color || topBar.color};
    height: ${height || topBar.height}px;
    padding-left: ${gutter || topBar.gutter}px;
    padding-right: ${gutter || topBar.gutter}px;
  `};
  ${topBarPositioning}
`;

export const TopContainer = styled.div`
  height: 100%;
  ${topBarPositioning}
`;

export const TopContentContainer = styled.div`
  flex: 1;
`;
