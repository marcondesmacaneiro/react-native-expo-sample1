import React, { useState, useEffect } from "react";
import Lottie from "lottie-react-native";

import { Container } from "./styles";

import Calculadora from "../Calculadora";

import animacao from "../../assets/calculator.json";

export default function Animacao() {
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLottie(false);
    }, 4000);
  }, []);

  return (
    <>
      {showLottie && (
        <Container>
          <Lottie source={animacao} autoPlay resizeMode="contain" />
        </Container>
      )}
      {!showLottie && <Calculadora />}
    </>
  );
}
