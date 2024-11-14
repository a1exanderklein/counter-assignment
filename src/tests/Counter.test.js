// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  //ensures Counter message is rendered
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  //ensures the count data-testid starts at 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  //finds the increment button and clicks it
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  //checks if count incremented to 1
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  //finds the decrement button and clicks it
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  //checks if count decremented to -1
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});