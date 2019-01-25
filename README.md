# React-Hamburger

## Installation

```bash
npm install react-hamburger --save
# or
yarn add react-hamburger
```

## Usage

```javascript
// ES6 syntax
import { ReactHamburger } from 'react-hamburger';

// ES5 syntax
const { ReactHamburger } = require('react-hamburger');
```

After importing the component, simply render in the typical React manner.

```javascript
// stateless component
const HamburgerMenu = () => {
  return (
    <ReactHamburger />
  )
}

// class-based component
class HamburgerMenu extends React.Component {
  render() {
    return (
      <ReactHamburger />
    )
  }
}
```

## Props

Props can either be directly passed through the `ReactHamburger` component or, where it exists, through the corresponding `theme` key.

### General

|   Name  |   Type  | Units |                                                                      Description                                                                     |      Default      | `theme` key |
| :-----: | :-----: | :---: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------: | :---------: |
| `theme` | `Theme` |  N/A  | `theme` object that can be passed to `react-hamburger` rather than passing individual props. The object and the keys can be seen in **Custom Types** | See default theme |     N/A     |

### HamburgerIcon

The icon that the user clicks to show or hide the `LinkContainer`.

|        Name       |    Type   | Units |                                       Description                                      |  Default  |       `theme` key      |
| :---------------: | :-------: | :---: | :------------------------------------------------------------------------------------: | :-------: | :--------------------: |
|     `barColor`    |  `string` |  N/A  |                            Color of the `HamburgerIcon` bars                           | `#FFFFFF` |      `bars.color`      |
|     `barCount`    |  `number` |  N/A  |                          Number of bars in the `HamburgerIcon`                         |    `3`    |           N/A          |
|    `barHeight`    |  `number` |  `px` |                      Height of the individual `HamburgerIcon` bars                     |    `5`    |      `bars.height`     |
|    `barRadius`    |  `number` |  `px` |                          Curvature of the `HamburgerIcon` bars                         |    `5`    |      `bars.radius`     |
| `hamburgerHeight` |  `number` |  `px` |                              Height of the `HamburgerIcon`                             |    `40`   | `hamburger.dimensions` |
|  `hamburgerWidth` |  `number` |  `px` |                              Width of the `HamburgerIcon`                              |    `40`   | `hamburger.dimensions` |
|      `inline`     | `boolean` |  N/A  | Whether the `HamburgerIcon` and any `TopContent` should take up space on the main page |  `false`  |   `hamburger.inline`   |
|      `locked`     | `boolean` |  N/A  |        Whether to lock the `HamburgerIcon` and `TopBar` to the top of the screen       |  `false`  |     `topBar.locked`    |
|      `slide`      | `boolean` |  N/A  |          Whather the `HamburgerIcon` should slide out with the `LinkContainer`         |  `false`  |    `hamburger.slide`   |
|      `right`      | `boolean` |  N/A  |          Whether the `HamburgerIcon` should be on the right side of the screen         |  `false`  |  `hamburger.location`  |

### LinkContainer

The component that holds the links (or whatever content the developer wants) that will show or hide when the user clicks on the `HamburgerIcon`

|            Name           |     Type     |   Units   |                          Description                          |  Default  |         `theme` key        |
| :-----------------------: | :----------: | :-------: | :-----------------------------------------------------------: | :-------: | :------------------------: |
|    `linkContainerColor`   |   `string`   |    N/A    |                  Color of the `LinkContainer`                 | `#123456` |    `linkContainer.color`   |
|  `linkContainerMaxWidth`  |   `number`   |    `px`   |    Maximum width the `LinkContainer` will cover the screen    |   `300`   |  `linkContainer.maxWidth`  |
|   `linkContainerPadding`  |   `number`   |    `px`   |   External padding around the outside of the `LinkContainer`  |    `10`   |   `linkContainer.padding`  |
|    `linkContainerSpeed`   |   `number`   | `seconds` | Speed (in seconds) that the `LinkContainer` slides in and out |   `0.5`   |    `linkContainer.speed`   |
| `linkContainerTransition` | `Transition` |    N/A    |            Transition type for the `LinkContainer`            |   `ease`  | `linkContainer.transition` |
|    `linkContainerWidth`   |   `number`   |    `%`    | Width that the `LinkContainer` will take, up to it's maxWidth |    `75`   |    `linkContainer.width`   |

### TopBar

|      Name      |     Type     | Units |                                              Description                                              |  Default  |    `theme` key   |
| :------------: | :----------: | :---: | :---------------------------------------------------------------------------------------------------: | :-------: | :--------------: |
|  `showTopBar`  |   `boolean`  |  N/A  |              Whether or not to render a `TopBar`. Gives access to other `topBar*` props.              |  `false`  | `topBar.display` |
|  `topBarColor` |   `string`   |  N/A  | Color of the top bar that holds the `HamburgerIcon` and any other contents placed inside the `TopBar` | `#111111` |  `topBar.color`  |
| `topBarHeight` |   `number`   |  `px` |   Height of the bar that holds the `HamburgerIcon` and any other contents placed inside the `TopBar`  |    `60`   |  `topBar.height` |
| `topBarGutter` |   `number`   |  `px` |              Space between the contents of the `HamburgerIcon` and the edge of the screen             |    `0`    |  `topBar.gutter` |
|  `TopContent`  | `React.Node` |  N/A  |                          Any content to render alongside the `HamburgerIcon`                          |   `null`  |        N/A       |

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
```

```flow
type Transition = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
```

## Theme

The theme object and its default values is listed below (can also be seen in the props tables). If you don't pass a prop to the component or overwrite the key in the `theme` the default will be used.

```javascript
const theme = {
  bars: {
    color: '#FFFFFF',
    height: 5,
    radius: 5,
  },
  hamburger: {
    dimensions: 40,
    inline: false,
    location: 'left',
  },
  linkContainer: {
    color: '#123456',
    maxWidth: 300,
    padding: 0,
    speed: 0.5,
    transition: 'ease',
    width: 75,
  },
  topBar: {
    color: '#111111',
    display: false,
    height: 60,
    gutter: 10,
    locked: false,
  },
};
```
