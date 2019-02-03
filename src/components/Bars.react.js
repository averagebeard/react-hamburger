// @flow

import * as React from 'react';

import { Bar } from '../components';

type Props = {
  barColor: string,
  barCount?: number,
  barHeight: number,
  barRadius: number,
};

export const Bars = (props: Props) => {
  const {
    barColor,
    barCount,
    barHeight,
    barRadius,
  } = props;

  const barArray = Array.from(Array(barCount), (x, i) => i + 1);

  return barArray.map<React.Node>(b => (
    <Bar
      color={barColor}
      height={barHeight}
      radius={barRadius}
      key={b}
    />
  ));
};

Bars.defaultProps = {
  barCount: 3,
};
