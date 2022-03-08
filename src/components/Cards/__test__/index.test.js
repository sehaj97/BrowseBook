import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from '..';

afterEach(cleanup);

describe('Cards component', () => {
  it('renders', () => {
    render(<Cards />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Cards />);
    expect(asFragment()).toMatchSnapshot();
  });

  })