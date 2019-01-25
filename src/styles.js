// @flow

import { css } from 'styled-components';

const clearMixin = css`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
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
