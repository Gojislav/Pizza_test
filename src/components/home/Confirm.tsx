import React from "react";
import JSONPretty from "react-json-pretty";
import { FormValue } from "../../constant/types";
import { SubTitle } from "../common/Typography";
import "react-json-pretty/themes/monikai.css";

interface Props {
  data: FormValue;
}

const Confirm = ({ data }: Props) => {
  return (
    <div>
      <SubTitle>Please confirm result</SubTitle>
      <JSONPretty data={data} />
    </div>
  );
};

export default Confirm;
