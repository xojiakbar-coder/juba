"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Fragment } from "react";
// import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Fragment {...props} />
    </ChakraProvider>
  );
}
