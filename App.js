import React from "react";
import Animacao from "./src/Animacao";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#01911e" />
      <Animacao />
    </>
  );
}
