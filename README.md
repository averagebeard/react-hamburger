# React-Hamburger

## Installation

```bash
npm install react-hamburger --save
# or
yarn add react-hamburger
```

## Props

| Name | Type | Units | Description | Default | `theme` key |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `barColor` | `string` | N/A | Color of the hamburger icon bars | `#FFFFFF` | `bars.color` |
| `barCount` | `number` | N/A | Number of bars in the hamburger icon | `3` | N/A |
| `barHeight` | `number` | `px` | Height of the individual hamburger bars | `5` | `bars.height` |
| `barRadius` | `number` | `px` | Curvature of the hamburger bars | `5` | `bars.radius` |
| `hamburgerHeight` | `number` | `px` | Height of the hamburger icon | `40` | `hamburger.dimensions` |
| `hamburgerWidth` | `number` | `px` | Width of the hamburger icon | `40` | `hamburger.dimensions` |
| `linkContainerColor` | `string` | N/A | Color of the `LinkContainer` | `#123456` | `linkContainer.color` |
| `linkContainerMaxWidth` | `number` | `px` | Maximum width the `LinkContainer` will cover the screen | `300` | `linkContainer.maxWidth` |
| `linkContainerPadding` | `number` | `px` | External padding around the outside of the `LinkContainer` | `10` | `linkContainer.padding` |
| `linkContainerSpeed` | `number` | `seconds` | Speed (in seconds) that the `LinkContainer` slides in and out | `0.5` | `linkContainer.speed` |
| `linkContainerTransition` | `Transition` | N/A |  Transition type for the `LinkContainer` | `ease` | `linkContainer.transition` |
| `linkContainerWidth` | `number` | `%` | Width that the `LinkContainer` will take, up to it's maxWidth | `75` | `linkContainer.width` |
| `locked` | `boolean` | N/A | Whether to lock the TopBar and its contents to the top of the screen | `false` | `topBar.locked` |
| `LogoComponent` | `React.Node` | N/A | | `null` | N/A |
| `right` | `boolean` | N/A | Whether the hamburger icon should be on the right side of the screen | `false` | `hamburger.location` |
| `theme` | `Theme` | N/A | `theme` object that can be passed to `react-hamburger` rather than passing individual props. The object and the keys can be seen in __Custom Types__ | See default theme | N/A |
| `topBarColor` | `string` | N/A | Color of the top bar that holds the hamburger icon and any other contents placed inside the `TopBar` | `#111111` | `topBar.color` |
| `topBarHeight` | `number` | `px` | Height of the bar that holds the hamburger icon and any other contents placed inside the `TopBar` | `60` | `topBar.height` |
| `topBarGutter` | `number` |`px` | Space between the contents of the hamburger icon and the edge of the screen | `10` |`topBar.gutter` |

### Custom Types

```flow
type Route = {
  path: string,
  title: string,
};
```

```flow
type Theme = {
  bars: {
    color: string,
    height: number,
    radius: number,
  },
  hamburger: {
    dimensions: number,
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
    height: number,
    gutter: number,
    locked: boolean,
  },
};
```

```flow
type Transition = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
```
