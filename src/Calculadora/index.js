import React, { useEffect, useState } from "react";
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
  const [operador, setOperador] = useState("");

  const [numeroSete, setNumeroSete] = useState("7");
  const [numeroOito, setNumeroOito] = useState("8");
  const [numeroNove, setNumeroNove] = useState("9");
  const [numeroSeis, setNumeroSeis] = useState("6");

  const [operadorMais, setOperadorMais] = useState("+");

  const [igual] = useState("=");

  useEffect(() => {
    setTotal(0);
    setMemoria(0);
    setOperador("");
  }, []);

  function calculate() {
    let calculo;

    switch (operador) {
      case operadorMais:
        calculo = total + memoria;
        break;

      default:
        break;
    }
    setTotal(calculo);
    setMemoria(0);
    setOperador("");
  }

  function handleOperator(operator) {
    if (operador === "") {
      setOperador(operator);
      setMemoria(total);
      setTotal(0);
    }
  }

  function handleFunction(item) {
    switch (item) {
      case numeroSete:
      case numeroOito:
      case numeroNove:
        handleVisor(item);
        break;
      case operadorMais:
        handleOperator(operadorMais);
        break;
      case igual:
        calculate();
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

        <Button onPress={() => handleFunction(numeroOito)}>
          <ButtonText value={numeroOito} />
        </Button>

        <Button onPress={() => handleFunction(numeroNove)}>
          <ButtonText value={numeroNove} />
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

        <Button onPress={() => handleFunction(igual)}>
          <ButtonTextOperator value={igual} />
        </Button>

        <Button>
          <ButtonText>0</ButtonText>
        </Button>

        <Button onPress={() => handleFunction(operadorMais)}>
          <ButtonTextOperator value={operadorMais} />
        </Button>
      </Area>
    </Container>
  );
}
