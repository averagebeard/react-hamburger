// @flow

import styled from 'styled-components';

import {
  horizontalSlideTransition,
  linkContainerSpacing,
  topBarPositioning,
  verticalSlideTransition,
} from './styles';

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
        ? horizontalSlideTransition(-maxWidth || -linkContainer.maxWidth, 0, 'px')
        : horizontalSlideTransition(0, maxWidth || linkContainer.maxWidth, 'px')
      )
      : undefined
  )}
`;

export const LinkContainer = styled.div`
  position: fixed;
  z-index: 98;
  ${({
    color,
    padding,
    theme: { linkContainer },
  }) => `
    background: ${color || linkContainer.color};
    padding: ${padding || linkContainer.padding}px;
  `};
  ${linkContainerSpacing};
`;

export const LinkContainerHorizontal = styled(LinkContainer)`
  ${({
    maxWidth,
    right,
    theme: {
      linkContainer,
      hamburger,
    },
    width,
  }) => `
    height: 100vh;
    max-width: ${maxWidth || linkContainer.maxWidth}px;
    right: ${right || (hamburger.location === 'right') ? `${-linkContainer.maxWidth}px` : ''};
    width: ${width || linkContainer.width}%;
  `};
  ${horizontalSlideTransition(-100, 0, '%')}
`;

export const LinkContainerVertical = styled(LinkContainer)`
  width: 100%;
  ${verticalSlideTransition(-100, 0, '%')};
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
  ${topBarPositioning}
`;

export const TopContentContainer = styled.div`
  flex: 1;
`;
