import React, { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";

import "./ValueInput.scss";

interface ValueInputProps {
  title: string;
  varName: string;
  financeData: any;
  updateData: any;
  increment: number;
}

const ValueInput = (props: ValueInputProps) => {
  const [value, setValue] = useState();

  const handleChange = (value: any) => {
    setValue(value);
    // Use spread operator
    props.updateData({ ...props.financeData, [props.varName]: value });
  };

  return (
    <div className="value-input">
      <Text as="h2" fontSize="xl" fontWeight="semibold">
        {props.title}
      </Text>
      <NumberInput step={props.increment} onChange={handleChange} value={value}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
};

export default ValueInput;
