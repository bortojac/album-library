import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from '../App';

jest.mock('../../AlbumList'); 
jest.mock('../../Search'); 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App getAccessToken={()=>''}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App getAccessToken={()=> ''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
