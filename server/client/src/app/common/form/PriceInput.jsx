import React from "react";
import { Input, Label } from "semantic-ui-react";

const PriceInput = () => (
  <Input labelPosition="left" type="text" placeholder="Amount">
    <Label basic>$</Label>
    <input />
  </Input>
);

export default PriceInput;
