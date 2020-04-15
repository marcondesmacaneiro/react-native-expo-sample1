import React from "react";
import Calculadora from "./src/Calculadora";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#01911e" />
      <Calculadora />
    </>
  );
}
