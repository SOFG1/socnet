import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from './App'

test('renders learn react link', () => {
  const root = <Router><Provider store={store}><App /></Provider></Router>
  render(root);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});
 