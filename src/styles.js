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

export const topBarPositioning = css`
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
