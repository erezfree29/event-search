/**
 * @jest-environment jsdom
 */
import React from 'react';
import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../App/redux/store';
import LaLiga from '../components/laliga';
import '@testing-library/jest-dom/extend-expect';

describe('check if all component are rendered', () => {
  it('renders page correctly', () => {
    const tree = render(<Provider store={store}><Router><LaLiga /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
