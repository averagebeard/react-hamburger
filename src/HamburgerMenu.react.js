// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Bar,
  Container,
  LinkContainer,
  LinkItem,
  LogoContainer,
  TopBar,
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
  linkContainerColor: string,
  LinkContainerContent?: React.Node,
  linkContainerMaxWidth: number,
  linkContainerPadding: number,
  linkContainerSpeed: number,
  linkContainerTransition: Transition,
  linkContainerWidth: number,
  locked: boolean,
  LogoComponent?: React.Node,
  right: boolean,
  routes: Array<Route>,
  theme?: Theme,
  topBarColor: string,
  topBarHeight: number,
  topBarGutter: number,
};

type State = {
  open: boolean,
};

export class HamburgerMenu extends React.Component<Props, State> {
  static defaultProps = {
    barCount: 3,
    LinkContainerContent: null,
    LogoComponent: null,
    theme: defaultTheme,
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
      linkContainerColor,
      LinkContainerContent,
      linkContainerMaxWidth,
      linkContainerPadding,
      linkContainerSpeed,
      linkContainerTransition,
      linkContainerWidth,
      locked,
      LogoComponent,
      right,
      routes,
      theme,
      topBarColor,
      topBarHeight,
      topBarGutter,
    } = this.props;
    const { open } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <>
          <TopBar
            color={topBarColor}
            height={topBarHeight}
            gutter={topBarGutter}
            right={right}
            locked={locked}
          >
            <Container
              height={hamburgerHeight}
              onClick={this.toggleLinks}
              width={hamburgerWidth}
            >
              {this.renderBars()}
            </Container>
            <LogoContainer>
              {LogoComponent}
            </LogoContainer>
          </TopBar>
          <LinkContainer
            color={linkContainerColor}
            height={topBarHeight}
            maxWidth={linkContainerMaxWidth}
            right={right}
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
