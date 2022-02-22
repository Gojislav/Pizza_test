import React from "react";
import { Row, Col } from "../common/Grid";
import TextInput, { Error } from "../common/TextInput";
import { SubTitle, Label } from "../common/Typography";
import { FormError, FormValue } from "../../constant/types";

interface Props {
  data: FormValue;
  error: FormError;
  handleChange: (field, value) => void;
}

const PaymentInfo = ({ data, error, handleChange }: Props) => {
  const handleChangeValue = (value: any, field: string) => {
    if (['expiration-month', 'expiration-year'].includes(field)) {
      const expiration = data.expiration.split('/');
      if (field === 'expiration-month') {
        expiration[0] = value;
      } else if (field === 'expiration-year') {
        expiration[1] = value;
      }
      const val = expiration.join('/') !== '/' ? expiration.join('/') : '';
      handleChange('expiration', val);
    } else {
      handleChange(field, value);
    }
  };

  return (
    <div>
      <SubTitle>Payment information</SubTitle>
      <Row>
        <Col cols={12}>
          <Label>Credit card number</Label>
          <TextInput
            type="number"
            value={data.creditCard}
            error={error.creditCard}
            onChange={(e) => handleChangeValue(e.target.value, "creditCard")}
          />
        </Col>
        <Col cols={4}>
          <Label>Expiration date</Label>
          <Row>
            <Col cols={4}>
              <TextInput
                type="text" maxlength="2" placeholder="MM"
                value={data.expiration.split('/')?.[0] || ''}
                onChange={(e) => handleChangeValue(e.target.value, "expiration-month")}
              />
            </Col>
            <Col cols={6}>
              <TextInput
                type="text" maxlength="4" placeholder="YYYY"
                value={data.expiration.split('/')?.[1] || ''}
                onChange={(e) => handleChangeValue(e.target.value, "expiration-year")}
              />
            </Col>
            <Col cols={12}>
              <Error>{error.expiration}</Error>
            </Col>
          </Row>
        </Col>
        <Col cols="auto">
          <Label>Security code</Label>
          <TextInput
            value={data.security}
            type="number"
            error={error.security}
            onChange={(e) => handleChangeValue(e.target.value, "security")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaymentInfo;
