import React from "react";
import * as I from "./styles";

const ResumoItem = ({ title, Icon, value }) => {
  return (
    <I.Container>
      <I.Header>
        <I.HeaderTitle>{title}</I.HeaderTitle>
        <Icon />
      </I.Header>
      <I.Total>{value}</I.Total>
    </I.Container>
  );
};

export default ResumoItem;
