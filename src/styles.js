// @flow

import { css } from 'styled-components';

const clearMixin = css`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

/*
* Known bug:
* When using `showTopBar` and `inline` the UX isn't great.
*/
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

export const createSlideTransition = (
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
  ${({ speed, theme: { linkContainer }, transition }) => `
    transition: transform ${speed || linkContainer.speed}s ${transition || linkContainer.transition};
  `};
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
