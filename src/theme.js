// @flow

export const topBarHeight = 60;

export const theme = {
  bars: {
    color: '#FF9900',
    height: 5,
    radius: 5,
  },
  hamburger: {
    dimensions: 40,
    inline: false,
    location: 'left',
    slide: false,
  },
  linkContainer: {
    color: '#123456',
    maxWidth: 300,
    padding: 0,
    allowToggle: true,
    speed: 0.5,
    transition: 'ease',
    vertical: false,
    width: 75,
  },
  topBar: {
    color: '#111111',
    display: false,
    height: topBarHeight,
    gutter: 10,
    locked: false,
  },
};
