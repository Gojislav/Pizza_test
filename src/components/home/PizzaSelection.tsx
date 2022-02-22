import React, { useMemo } from "react";
import styled from "styled-components";
import { Row, Col } from "../common/Grid";
import { SubTitle, Label } from "../common/Typography";
import CheckBox from "../common/CheckBox";
import Radio from "../common/Radio";
import { PizzaSizeData, PizzaCombinationData } from "../../constant/data";
import { PizzaSize } from "../../constant/types";

const FormWrapper = styled.div`
  margin-top: 10px;
`;

interface Props {
  size: PizzaSize;
  handleChangeSize: (size: PizzaSize) => void;
  handleChangeCombination: (value: string[]) => void;
  combination: string[];
}

const PizzaSelection = ({ size, combination = [], handleChangeSize, handleChangeCombination }: Props) => {
  const onChangeCombination = (checked, value) => {
    const filtered = combination.filter((item) => item !== value);
    if (checked) {
      handleChangeCombination([...filtered, value]);
    } else {
      handleChangeCombination(filtered);
    }
  };

  const price = useMemo(() => {
    let total = 0;
    const pizzaSize = PizzaSizeData.find((item) => item.size === size);
    total += pizzaSize ? pizzaSize.price : 0;

    PizzaCombinationData.forEach((item) => {
      if (combination.includes(item.type)) {
        total += item.price;
      }
    });

    return  total;
  }, [combination, size]);

  return (
    <div>
      <SubTitle>Pizza selection</SubTitle>
      <Row>
        <Col cols={12}>
          <Label>Choose one of the 3 pizza sizes</Label>
          <FormWrapper>
            {PizzaSizeData.map((item) => (
              <Radio
                name="size"
                key={item.size}
                label={item.label}
                checked={size === item.size}
                handleChange={() => handleChangeSize(item.size)}
              />
            ))}
          </FormWrapper>
        </Col>
        <Col cols={12}>
          <Label>Choose any combination of the following toppings</Label>
          <FormWrapper>
            {PizzaCombinationData.map((item) => (
                <CheckBox
                  key={item.type}
                  label={item.label}
                  checked={Boolean(combination.find((option) => option === item.type))}
                  handleChange={(e) => onChangeCombination(e.target.checked, item.type)}
                />
              )
            )}
          </FormWrapper>
        </Col>
      </Row>
      <Label>{`Price: $${price}`}</Label>
    </div>
  );
};

export default PizzaSelection;
