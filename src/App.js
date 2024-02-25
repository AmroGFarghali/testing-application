import logo from "./logo.svg";
import "./App.scss";
import {
  FormGroup,
  TextInput,
  RadioButtonGroup,
  RadioButton,
  Button,
  Stack,
} from "@carbon/react";

function App() {
  return (
    <FormGroup
      style={{
        maxWidth: "400px",
      }}
      legendText="FormGroup Legend"
    >
      <Stack gap={7}>
        <TextInput data-testid="first name" id="one" labelText="First Name" />
        <TextInput data-testid="last name" id="two" labelText="Last Name" />
        <RadioButtonGroup
          legendText="Radio button heading"
          name="radio-button-group"
          defaultSelected="radio-1"
          data-testid="radio button group"
        >
          <RadioButton
            data-testid="radiobutton"
            labelText="Option 1"
            value="radio-1"
            id="radio-1"
          />
          <RadioButton
            data-testid="radiobutton"
            labelText="Option 2"
            value="radio-2"
            id="radio-2"
          />
          <RadioButton
            data-testid="radiobutton"
            labelText="Option 3"
            value="radio-3"
            id="radio-3"
          />
        </RadioButtonGroup>
        <Button>Submit</Button>
      </Stack>
    </FormGroup>
  );
}

export default App;
