// @flow

import * as deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  HamburgerIcon,
  LinkContainerHorizontal,
  TopBar,
  TopContainer,
  TopContentContainer,
  LinkContainerVertical,
} from './components';
import { Bars } from './components/Bars.react';

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
  TopContent?: React.Node,
  verticalSlide?: boolean,
};

type State = {
  open: boolean,
};

export class ReactHamburger extends React.Component<Props, State> {
  static defaultProps = {
    barCount: 3,
    theme: defaultTheme,
    TopContent: null,
    verticalSlide: false,
  }

  state = {
    open: false,
  }

  hamburgerTheme: ?Theme

  hamburgerToggle = () => {
    const { open } = this.state;
    return (open ? this.toggleLinkContainer(false) : this.toggleLinkContainer(true));
  }

  toggleLinkContainer = (value: boolean) => this.setState({ open: value });

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
      verticalSlide,
    } = this.props;
    const { open } = this.state;

    const hamburgerTheme = deepmerge.all([defaultTheme, theme]);

    const Top = showTopBar || hamburgerTheme.topBar.display
      ? TopBar
      : TopContainer;

    const linkContainer = (
      verticalSlide || hamburgerTheme.linkContainer.vertical
        ? (
          <LinkContainerVertical
            color={linkContainerColor}
            hamburgerHeight={hamburgerHeight}
            onClick={this.hamburgerToggle}
            open={open}
            padding={linkContainerPadding}
            speed={linkContainerSpeed}
            showTopBar={showTopBar}
            topBarHeight={topBarHeight}
            transition={linkContainerTransition}
            width={linkContainerWidth}
          >
            {children}
          </LinkContainerVertical>
        )
        : (
          <LinkContainerHorizontal
            color={linkContainerColor}
            hamburgerHeight={hamburgerHeight}
            maxWidth={linkContainerMaxWidth}
            onClick={this.hamburgerToggle}
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
          </LinkContainerHorizontal>
        )
    );

    return (
      <ThemeProvider theme={hamburgerTheme}>
        <>
          <Top
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
          {linkContainer}
        </>
      </ThemeProvider>
    );
  }
}
