import React from "react";
import { Row, Col } from "../common/Grid";
import TextInput from "../common/TextInput";
import { SubTitle, Label } from "../common/Typography";
import { FormValue, FormError } from "../../constant/types";

interface Props {
  data: FormValue;
  error: FormError;
  handleChange: (field, value) => void;
}

const CustomerInfo = ({ data, error, handleChange }: Props) => {
  const handleChangeValue = (value: any, field: string) => {
    handleChange(field, value);
  };

  return (
    <div>
      <SubTitle>Customer information</SubTitle>
      <Row>
        <Col cols={6}>
          <Label>Name</Label>
          <TextInput
            value={data.name}
            error={error.name}
            onChange={(e) => handleChangeValue(e.target.value, "name")}
          />
        </Col>
        <Col cols={6}>
          <Label>Phone number</Label>
          <TextInput
            value={data.phone}
            error={error.phone}
            onChange={(e) => handleChangeValue(e.target.value, "phone")}
          />
        </Col>
        <Col cols={6}>
          <Label>Street name</Label>
          <TextInput
            value={data.street}
            error={error.street}
            onChange={(e) => handleChangeValue(e.target.value, "street")}
          />
        </Col>
        <Col cols={6}>
          <Label>House number</Label>
          <TextInput
            value={data.house}
            error={error.house}
            onChange={(e) => handleChangeValue(e.target.value, "house")}
          />
        </Col>
        <Col cols={6}>
          <Label>Postal code</Label>
          <TextInput
            value={data.postal}
            error={error.postal}
            onChange={(e) => handleChangeValue(e.target.value, "postal")}
          />
        </Col>
        <Col cols={6}>
          <Label>City</Label>
          <TextInput
            value={data.city}
            error={error.city}
            onChange={(e) => handleChangeValue(e.target.value, "city")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CustomerInfo;
