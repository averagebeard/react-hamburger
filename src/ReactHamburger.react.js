// @flow

import * as deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  HamburgerIcon,
  LinkContainer,
  TopBar,
  TopContainer,
  TopContentContainer,
} from './components';
import { Bars } from './components/Bars.react';

import { theme as defaultTheme } from './theme';

import type {
  Theme,
  Transition,
} from './types';

type Props = {
  allowAutoClose?: boolean,
  barColor: string,
  barCount?: number,
  barHeight: number,
  barRadius: number,
  children: React.Node,
  hamburgerHeight: number,
  hamburgerWidth: number,
  inline: boolean,
  linkContainerColor: string,
  linkContainerMaxWidth: number,
  linkContainerPadding: number,
  linkContainerSpeed: number,
  linkContainerTransition: Transition,
  linkContainerWidth: number,
  locked: boolean,
  right: boolean,
  showTopBar: boolean,
  slide: boolean,
  theme?: Theme,
  topBarColor: string,
  topBarHeight: number,
  topBarGutter: number,
  TopContent?: React.Node
};

type State = {
  open: boolean,
};

export class ReactHamburger extends React.Component<Props, State> {
  static defaultProps = {
    allowAutoClose: true,
    barCount: 3,
    theme: defaultTheme,
    TopContent: null,
  }

  constructor() {
    super();

    this.node = React.createRef();
  }

  componentDidMount() {
    const { allowAutoClose } = this.props;
    return allowAutoClose
      ? document.addEventListener('mousedown', this.handleClick, false)
      : null;
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  toggleLinkContainer = (value: boolean) => this.setState({ open: value });

  // TODO(erikryanmoore): Need to improve the UX of this.
  handleClickOutside = () => this.toggleLinkContainer(false);

  // TODO(erikryanmoore): Add flowtype for event.
  handleClick = (e: any) => {
    if (this.node.current === e.target) {
      return;
    }
    this.handleClickOutside();
  }

  hamburgerToggle = () => {
    const { open } = this.state;
    return (open ? this.toggleLinkContainer(false) : this.toggleLinkContainer(true));
  }

  // TODO(erikryanmoore): Add flowtype for node.
  node: any

  hamburgerTheme: ?Theme

  render() {
    const {
      barColor,
      barCount,
      barHeight,
      barRadius,
    } = this.props;

    const {
      children,
      hamburgerHeight,
      hamburgerWidth,
      inline,
      linkContainerColor,
      linkContainerMaxWidth,
      linkContainerPadding,
      linkContainerSpeed,
      linkContainerTransition,
      linkContainerWidth,
      locked,
      right,
      showTopBar,
      slide,
      theme,
      topBarColor,
      topBarGutter,
      topBarHeight,
      TopContent,
    } = this.props;
    const { open } = this.state;

    const topBarExists = (theme !== undefined ? theme.topBar.display : null);
    const Top = showTopBar || topBarExists
      ? TopBar
      : TopContainer;

    const hamburgerTheme = deepmerge.all([defaultTheme, theme]);

    return (
      <ThemeProvider theme={hamburgerTheme}>
        <>
          <Top
            ref={this.node}
            color={topBarColor}
            height={topBarHeight}
            gutter={topBarGutter}
            inline={inline}
            locked={locked}
            right={right}
          >
            <HamburgerIcon
              height={hamburgerHeight}
              onClick={this.hamburgerToggle}
              open={open}
              right={right}
              slide={slide}
              speed={linkContainerSpeed}
              transition={linkContainerTransition}
              maxWidth={linkContainerMaxWidth}
              width={hamburgerWidth}
            >
              <Bars
                barColor={barColor}
                barCount={barCount}
                barHeight={barHeight}
                barRadius={barRadius}
              />
            </HamburgerIcon>
            <TopContentContainer>
              {TopContent}
            </TopContentContainer>
          </Top>
          <LinkContainer
            color={linkContainerColor}
            hamburgerHeight={hamburgerHeight}
            maxWidth={linkContainerMaxWidth}
            open={open}
            padding={linkContainerPadding}
            right={right}
            speed={linkContainerSpeed}
            showTopBar={showTopBar}
            topBarHeight={topBarHeight}
            transition={linkContainerTransition}
            width={linkContainerWidth}
          >
            {children}
          </LinkContainer>
        </>
      </ThemeProvider>
    );
  }
}
