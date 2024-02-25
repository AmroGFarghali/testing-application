import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
// Tests that see if components are rendered
test("checks if both input fields were rendered", () => {
  render(<App />);

  expect(screen.getByTestId(/first name/i)).toBeInTheDocument();
  expect(screen.getByTestId(/last name/i)).toBeInTheDocument();
});

test("checks if radio buttons are rendered and there are 3 buttons", () => {
  render(<App />);

  const radioButtons = screen.getAllByTestId(/radiobutton/i);
  radioButtons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
  expect(radioButtons).toHaveLength(3);
});
//Input fields are empty by default
test("first and last name input should be empty", () => {
  render(<App />);
  const firstName = screen.getByTestId(/first name/i);
  const lastName = screen.getByTestId(/last name/i);
  expect(firstName.value).toBe("");
  expect(lastName.value).toBe("");
});
//Input fields reflect change when typing
test("first name input should change", () => {
  render(<App />);
  const firstName = screen.getByTestId(/first name/i);
  const testValue = "test";

  fireEvent.change(firstName, { target: { value: testValue } });
  expect(firstName.value).toBe(testValue);
});
test("last name input should change", () => {
  render(<App />);
  const lastName = screen.getByTestId(/last name/i);
  const testValue = "test";

  fireEvent.change(lastName, { target: { value: testValue } });
  expect(lastName.value).toBe(testValue);
});

//Checks to see if radio buttons are all unchecked expect button 1 which is checked by default
test("checks to see if first button is checked and rest isnt", () => {
  render(<App />);

  const radioButtons = screen.getAllByTestId(/radiobutton/i);
  radioButtons.forEach((button, index) => {
    if (index === 0) expect(button.defaultChecked).toBe(true);
    else expect(button.defaultChecked).toBe(false);
  });
  expect(radioButtons).toHaveLength(3);
});
