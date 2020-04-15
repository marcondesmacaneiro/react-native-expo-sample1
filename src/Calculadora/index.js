import React, { useState } from "react";
import {
  Container,
  Visor,
  VisorText,
  Area,
  Button,
  ButtonText,
  ButtonTextOperator,
} from "./styles";

export default function Calculadora() {
  const [total, setTotal] = useState(0);
  const [memoria, setMemoria] = useState(0);

  const [numeroSete, setNumeroSete] = useState("7");

  function handleFunction(item) {
    switch (item) {
      case numeroSete:
        handleVisor(item);
        break;
    }
  }

  function handleVisor(number) {
    let element = Number(number);

    if (total > 0) {
      setTotal(Number(`${total}${element}`));
    } else {
      setTotal(element);
    }
  }

  return (
    <Container>
      <Visor>
        <VisorText>{total}</VisorText>
      </Visor>

      <Area>
        <Button onPress={() => handleFunction(numeroSete)}>
          <ButtonText value={numeroSete} />
        </Button>

        <Button>
          <ButtonText>8</ButtonText>
        </Button>

        <Button>
          <ButtonText>9</ButtonText>
        </Button>

        <Button>
          <ButtonTextOperator>/</ButtonTextOperator>
        </Button>
      </Area>

      <Area>
        <Button>
          <ButtonText>4</ButtonText>
        </Button>

        <Button>
          <ButtonText>5</ButtonText>
        </Button>

        <Button>
          <ButtonText>6</ButtonText>
        </Button>

        <Button>
          <ButtonTextOperator>*</ButtonTextOperator>
        </Button>
      </Area>

      <Area>
        <Button>
          <ButtonText>1</ButtonText>
        </Button>

        <Button>
          <ButtonText>2</ButtonText>
        </Button>

        <Button>
          <ButtonText>3</ButtonText>
        </Button>

        <Button>
          <ButtonTextOperator>-</ButtonTextOperator>
        </Button>
      </Area>

      <Area>
        <Button>
          <ButtonText>C</ButtonText>
        </Button>

        <Button>
          <ButtonText>=</ButtonText>
        </Button>

        <Button>
          <ButtonText>0</ButtonText>
        </Button>

        <Button>
          <ButtonTextOperator>+</ButtonTextOperator>
        </Button>
      </Area>
    </Container>
  );
}
