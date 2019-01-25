// @flow

export type Route = {
  path: string,
  title: string,
};

export type Theme = {
  bars: {
    color: string,
    height: number,
    radius: number,
  },
  menu: {
    dimensions: number,
    inline: boolean,
    location: string,
  },
  linkContainer: {
    color: string,
    maxWidth: number,
    padding: number,
    speed: number,
    transition: string,
    width: number,
  },
  topBar: {
    color: string,
    display: boolean,
    height: number,
    gutter: number,
    locked: boolean,
  },
};

export type Transition = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
