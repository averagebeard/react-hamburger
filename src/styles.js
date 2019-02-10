// @flow

import { css } from 'styled-components';

const clearMixin = css`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const linkContainerSpacing = css`
  ${({
    showTopBar,
    theme: { hamburger, topBar },
  }) => (
    (showTopBar || topBar.display)
      ? ({ paddingTop: topBar.height })
      : ({ paddingTop: hamburger.dimensions })
  )}
`;

const linkContainerTransition = css`
  ${({ speed, theme: { linkContainer }, transition }) => `
    transition: transform ${speed || linkContainer.speed}s ${transition || linkContainer.transition};
  `};
`;

export const horizontalSlideTransition = (
  leftPosition: number,
  rightPosition: number,
  units: string,
) => css`
  transform: translateX(${({
    right,
    open,
    theme: { hamburger: { location } },
  }) => (
    // eslint-disable-next-line no-nested-ternary
    (right || location === 'right')
      ? (open ? leftPosition : rightPosition)
      : (open ? rightPosition : leftPosition)
  )}${units});
  ${linkContainerTransition};
`;

export const topBarPositioning = css`
  display: flex;
  top: 0;
  width: 100%;
  z-index: 99;
  ${({ right, theme: { hamburger } }) => `
    flex-direction: ${right || (hamburger.location === 'right') ? 'row-reverse' : 'row'};
  `};
  ${({
    inline,
    locked,
    theme: { topBar },
  }) => {
    if (locked || topBar.locked) {
      if (inline || topBar.inline) {
        return {
          position: 'fixed',
        };
      }
      return {
        float: 'left',
        position: 'sticky',
        clearMixin,
      };
    }
    if (inline || topBar.inline) {
      return {
        float: 'left',
        position: 'absolute',
        clearMixin,
      };
    }
    return {
      float: 'left',
      position: 'relative',
      clearMixin,
    };
  }};
`;

export const verticalSlideTransition = (
  topPosition: number,
  bottomPosition: number,
  units: string,
) => css`
  transform: translateY(${({
    top,
    open,
    theme: { hamburger: { location } },
  }) => (
    // eslint-disable-next-line no-nested-ternary
    (top || location === 'top')
      ? (open ? topPosition : bottomPosition)
      : (open ? bottomPosition : topPosition)
  )}${units});
  ${linkContainerTransition};
`;
