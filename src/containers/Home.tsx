import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import PizzaImage from "../assets/pizza.svg";
import CustomerInfo from "../components/home/CustomerInfo";
import PizzaSelection from "../components/home/PizzaSelection";
import PaymentInfo from "../components/home/PaymentInfo";
import Confirm from "../components/home/Confirm";
import Button from "../components/common/Button";
import { FormError, FormValue, PizzaSize, Combination } from "../constant/types";
import valid from 'card-validator';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  background-color: #fef;
  & img {
    width: 400px;
    height: auto;
  }
`;

const Right = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Action = styled.div`
  display: flex;
`;

const FlexGrow = styled.div`
  flex-grow: 1;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 40px;
`;

const Home = () => {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<FormValue>({
    name: "",
    phone: "",
    street: "",
    house: "",
    postal: "",
    city: "",
    size: PizzaSize.Small,
    combination: [Combination.Olives],
    creditCard: "",
    expiration: "",
    security: "",
  });

  const [error, setError] = useState<FormError>({
    name: "",
    phone: "",
    street: "",
    house: "",
    postal: "",
    city: "",
    creditCard: "",
    expiration: "",
    security: "",
  });

  const handleChange = (field: string, value: any) => {
    const clone = _.cloneDeep(data);
    const errorClone = _.cloneDeep(error);
    _.set(clone, field, value);
    _.set(errorClone, field, "");
    setData(clone);
    setError(errorClone);
  };

  const handleSubmit = () => {
    const clone = _.cloneDeep(error);
    let flag = false;

    if (step === 1) {
      const { name, phone, street, house, postal, city } = data;
      if (!name) {
        _.set(clone, "name", "Name is required");
        flag = true;
      }
      if (!phone) {
        _.set(clone, "phone", "Phone is required");
        flag = true;
      }
      if (!street) {
        _.set(clone, "street", "Street is required");
        flag = true;
      }
      if (!house) {
        _.set(clone, "house", "House is required");
        flag = true;
      }
      if (!postal) {
        _.set(clone, "postal", "Postal is required");
        flag = true;
      }
      if (!city) {
        _.set(clone, "city", "City is required");
        flag = true;
      }
      setError(clone);

      if (!flag) setStep(2);
    }

    if (step === 2) setStep(3);

    if (step === 3) {
      const { creditCard, expiration, security } = data;
      if (!creditCard) {
        _.set(clone, "creditCard", "Credit is required");
        flag = true;
      }
      if (creditCard && !valid.number(creditCard).isPotentiallyValid) {
        _.set(clone, "creditCard", "Credit is not right format");
        flag = true;
      }

      if (!expiration) {
        _.set(clone, "expiration", "Expiration is required");
        flag = true;
      } else {
        const exp = expiration.split('/');
        if (!valid.expirationMonth(exp[0]).isPotentiallyValid || !valid.expirationYear(exp[1]).isPotentiallyValid) {
          _.set(clone, "expiration", "Expiration is not right format");
          flag = true;
        }
      }

      if (!security) {
        _.set(clone, "security", "Security is required");
        flag = true;
      }
      if (security && !valid.cvv(security).isPotentiallyValid) {
        _.set(clone, "security", "CVV is not right format");
        flag = true;
      }
      setError(clone);

      if (!flag) setStep(4);
    }
  };

  return (
    <Container>
      <Left>
        <img src={PizzaImage} alt="pizza" />
      </Left>

      <Right>
        <Title>Please order pizza</Title>
        <Form>
          {step === 1 && (
            <CustomerInfo
              data={data}
              error={error}
              handleChange={handleChange}
            />
          )}

          {step === 2 && (
            <PizzaSelection
              size={data.size}
              combination={data.combination}
              handleChangeSize={(size) => handleChange("size", size)}
              handleChangeCombination={(value) => handleChange("combination", value)}
            />
          )}

          {step === 3 && (
            <PaymentInfo
              data={data}
              error={error}
              handleChange={handleChange}
            />
          )}

          {step === 4 && (
            <Confirm data={data} />
          )}

          <Action>
            {step > 1 && (
              <Button outlined onClick={() => setStep(Math.max(step - 1, 1))}>
                Back
              </Button>
            )}
            <FlexGrow />
            <Button onClick={handleSubmit}>
              {step === 4 ? "Submit" : "Next"}
            </Button>
          </Action>
        </Form>
      </Right>
    </Container>
  );
};

export default Home;
