import React from "react";
import { Container, TextRed } from "./styles";
import Visor from "../Visor";

export default function Calculadora() {
  return (
    <Container>
      <Visor />
      <TextRed>Calculadora</TextRed>
    </Container>
  );
}
