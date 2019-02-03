// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Bars } from '../src/components/Bars.react';

describe('<Bars />', () => {
  const defaultProps = {
    barColor: 'red',
    barHeight: 3,
    barRadius: 3,
  };

  const tests = [
    {
      description: 'renders the component with 3 bars',
      props: defaultProps,
      expected: 3,
    },
    {
      description: 'renders the component with 4 bars',
      props: {
        ...defaultProps,
        barCount: 4,
      },
      expected: 4,
    },
  ];

  tests.forEach((t) => {
    it(t.description, () => {
      const wrapper = shallow(
        <Bars {...t.props} />,
      );

      expect(wrapper).to.have.length(t.expected);
    });
  });
});
