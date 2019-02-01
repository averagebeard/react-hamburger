// @flow

import * as deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Bar,
  HamburgerIcon,
  LinkContainer,
  TopBar,
  TopContainer,
  TopContentContainer,
} from './components';

import { theme as defaultTheme } from './theme';

import type {
  Theme,
  Transition,
} from './types';

type Props = {
  barColor: string,
  barCount?: number,
  barHeight: number,
  barRadius: number,
  hamburgerHeight: number,
  hamburgerWidth: number,
  inline: boolean,
  LinkContainerContent?: () => React.Node,
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

/*
* TODO(erikryanmoore): Need to handle click outside.
*/

export class ReactHamburger extends React.Component<Props, State> {
  static defaultProps = {
    barCount: 3,
    LinkContainerContent: null,
    theme: defaultTheme,
    TopContent: null,
  }


  constructor(props: Props) {
    super(props);

    // const hamburgerTheme = deepmerge.all([defaultTheme, theme]);

    const { theme } = this.props;
    this.hamburgerTheme = deepmerge.all([defaultTheme, theme]);

    this.state = {
      open: false,
    };
  }

  toggleLinkContainer = (value: boolean) => this.setState({ open: value });

  hamburgerToggle = () => {
    const { open } = this.state;
    return (open ? this.toggleLinkContainer(false) : this.toggleLinkContainer(true));
  }

  hamburgerTheme: ?Theme

  renderBars = () => {
    const {
      barColor,
      barCount,
      barHeight,
      barRadius,
    } = this.props;

    const barArray = Array.from(Array(barCount), (x, i) => i + 1);
    return barArray.map<{}>(b => (
      <Bar
        color={barColor}
        height={barHeight}
        radius={barRadius}
        key={b}
      />
    ));
  }

  render() {
    const {
      hamburgerHeight,
      hamburgerWidth,
      inline,
      LinkContainerContent,
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

    const Top = showTopBar || (theme !== undefined ? theme.topBar.display : null)
      ? TopBar
      : TopContainer;

    return (
      <ThemeProvider theme={this.hamburgerTheme}>
        <>
          <Top
            color={topBarColor}
            height={topBarHeight}
            gutter={topBarGutter}
            inline={inline}
            right={right}
            locked={locked}
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
              {this.renderBars()}
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
            {LinkContainerContent}
          </LinkContainer>
        </>
      </ThemeProvider>
    );
  }
}
