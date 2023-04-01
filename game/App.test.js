import { render, screen } from '@testing-library/react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import Navigation from './Navigation';
import { shallow } from 'enzyme';
import Home from './Home';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

//testcase for Navigation.js
describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

//testcases for Home.js
describe('Home Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a logo image', () => {
    const logo = wrapper.find('img');
    expect(logo.exists()).toBe(true);
  });

  it('contains a "LET\'S TAKE OFF!" button', () => {
    const button = wrapper.find('Button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual("LET'S TAKE OFF!");
  });

  it('redirects to Instructions component when "LET\'S TAKE OFF!" button is clicked', () => {
    const mockPush = jest.fn();
    const historyMock = { push: mockPush };
    wrapper.setProps({ history: historyMock });
    wrapper.find('Button').simulate('click');
    expect(mockPush).toHaveBeenCalledWith('/Instructions');
  });
});
