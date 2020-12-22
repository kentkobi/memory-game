import React from 'react';
import App from './App';
import {shallow} from './enzyme';

test('Render without crashing', () => {
  shallow(<App />)
});
