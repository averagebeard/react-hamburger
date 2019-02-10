// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { ReactHamburger } from '../src/ReactHamburger.react';

describe('<ReactHamburger />', () => {
  describe('props', () => {
    const tests = [
      {
        description: 'should render the component',
        props: {},
        expected: 1,
      },
    ];

    tests.forEach((t) => {
      it(t.description, () => {
        const wrapper = shallow(<ReactHamburger {...t.props} />);

        expect(wrapper).to.have.length(t.expected);
      });
    });
  });

  describe('methods', () => {
    const closedState = { open: false };
    const openState = { open: true };
    const tests = [
      {
        description: 'expect state to be closed',
        state: closedState,
        expected: closedState,
      },
      {
        description: 'expect state to be open',
        state: openState,
        expected: openState,
      },
      {
        description: 'toggleLinkContainer should setState to open if closed',
        instance: 'toggleLinkContainer',
        instanceValues: true,
        expected: openState,
        state: closedState,
      },
      {
        description: 'toggleLinkContainer should setState to closed if open',
        instance: 'toggleLinkContainer',
        instanceValues: false,
        expected: closedState,
        state: openState,
      },
      {
        description: 'hamburgerToggle should setState to open if closed',
        instance: 'hamburgerToggle',
        expected: openState,
        state: closedState,
      },
      {
        description: 'hamburgerToggle should setState to closed if open',
        instance: 'hamburgerToggle',
        expected: closedState,
        state: openState,
      },
    ];

    tests.forEach((t) => {
      it(t.description, () => {
        const wrapper = shallow(
          <ReactHamburger {...t.props} />,
        );

        let invokedWrapper = wrapper;

        if (t.state !== undefined) {
          wrapper.setState(t.state);
        }
        if (t.instance !== undefined) {
          invokedWrapper = wrapper.instance()[t.instance](t.instanceValues);
        }

        expect(invokedWrapper.instance().state).to.deep.equal(t.expected);
      });
    });
  });
});
