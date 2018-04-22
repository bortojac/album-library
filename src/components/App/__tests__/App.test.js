import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from '../App';

//jest.mock('../../Search', () => 'Search'); // gives unknown prop warnings

jest.mock('../../Search'); // use manual mock in __mocks__ folder of Search

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App getAccessToken={()=>''}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App getAccessToken={()=> ''}  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
