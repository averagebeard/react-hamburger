// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Bar,
  HamburgerIcon,
  LinkContainer,
  LinkItem,
  TopBar,
  TopContainer,
} from './components';

import { renderLinks } from './renderLinks';
import { theme as defaultTheme } from './theme';

import type {
  Route,
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
  linkContainerColor: string,
  LinkContainerContent?: React.Node,
  linkContainerMaxWidth: number,
  linkContainerPadding: number,
  linkContainerSpeed: number,
  linkContainerTransition: Transition,
  linkContainerWidth: number,
  locked: boolean,
  right: boolean,
  routes: Array<Route>,
  theme?: Theme,
  topBar: boolean,
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
    barCount: 3,
    LinkContainerContent: null,
    theme: defaultTheme,
    TopContent: null,
  }

  state = {
    open: false,
  }

  toggleLinks = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

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
      linkContainerColor,
      LinkContainerContent,
      linkContainerMaxWidth,
      linkContainerPadding,
      linkContainerSpeed,
      linkContainerTransition,
      linkContainerWidth,
      locked,
      right,
      routes,
      theme,
      topBar,
      topBarColor,
      topBarGutter,
      topBarHeight,
      TopContent,
    } = this.props;
    const { open } = this.state;

    const Top = topBar
      ? TopBar
      : TopContainer;

    return (
      <ThemeProvider theme={theme}>
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
              onClick={this.toggleLinks}
              right={right}
              width={hamburgerWidth}
            >
              {this.renderBars()}
            </HamburgerIcon>
            {TopContent}
          </Top>
          <LinkContainer
            color={linkContainerColor}
            height={topBarHeight}
            maxWidth={linkContainerMaxWidth}

            open={open}
            padding={linkContainerPadding}
            speed={linkContainerSpeed}
            transition={linkContainerTransition}
            width={linkContainerWidth}
          >
            {LinkContainerContent || renderLinks(
              routes,
              LinkItem,
              this.toggleLinks,
            )}
          </LinkContainer>
        </>
      </ThemeProvider>
    );
  }
}
